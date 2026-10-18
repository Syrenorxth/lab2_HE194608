import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('hiển thị toàn bộ danh sách phim', () => {
  render(<App />);
  expect(screen.getByText(/Total Movies: 6/)).toBeInTheDocument();
});

test('ô tìm kiếm được focus tự động', () => {
  render(<App />);
  expect(screen.getByPlaceholderText('Tìm tên phim...')).toHaveFocus();
});

test('tìm kiếm không phân biệt hoa thường', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText('Tìm tên phim...'), {
    target: { value: 'dark' },
  });
  expect(screen.getByText(/Total Movies: 1/)).toBeInTheDocument();
  expect(screen.getByText(/The Dark Knight/)).toBeInTheDocument();
});

test('lọc theo thể loại', () => {
  render(<App />);
  fireEvent.change(screen.getByDisplayValue('All Genres'), {
    target: { value: 'Action' },
  });
  expect(screen.getByText(/Total Movies: 1/)).toBeInTheDocument();
});

test('sắp xếp theo rating cao đến thấp', () => {
  render(<App />);
  fireEvent.change(screen.getByDisplayValue('Default'), {
    target: { value: 'high' },
  });
  const items = screen.getAllByText(/\| \d{4} \|/);
  expect(items[0]).toHaveTextContent('The Dark Knight');
});

test('thêm / bỏ yêu thích và lưu vào localStorage', () => {
  render(<App />);
  fireEvent.click(screen.getAllByText('Favorite')[0]);
  expect(screen.getByText(/Favorites: 1/)).toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem('movie_favorites'))).toEqual([1]);

  fireEvent.click(screen.getByText('Unfavorite'));
  expect(screen.getByText(/Favorites: 0/)).toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem('movie_favorites'))).toEqual([]);
});

test('xem chi tiết và đóng', () => {
  render(<App />);
  fireEvent.click(screen.getAllByText('View Details')[0]);
  expect(screen.getByText(/Christopher Nolan/)).toBeInTheDocument();
  fireEvent.click(screen.getByText('Close'));
  expect(screen.queryByText(/Christopher Nolan/)).not.toBeInTheDocument();
});

test('chuyển Light / Dark mode', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('light');
  fireEvent.click(screen.getByText('🌙 Dark'));
  expect(container.firstChild).toHaveClass('dark');
});

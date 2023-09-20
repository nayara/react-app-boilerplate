import CalendarPage from '..';
import { render, screen } from '@testing-library/react';

describe('<CalendarPage>', () => {
  it('should render page correctly', () => {
    render(<CalendarPage />);

    expect(
      screen.getByRole('heading', { name: 'Hello from React!' })
    ).toBeInTheDocument();
  });
});

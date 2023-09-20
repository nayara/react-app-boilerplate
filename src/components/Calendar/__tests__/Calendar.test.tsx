import { render, screen } from '@testing-library/react';
import Calendar from '..';

describe('<Calendar >', () => {
  test('render correctly', () => {
    render(<Calendar />);

    expect(screen.getByText('Hello from React!')).toBeInTheDocument();
  });
});

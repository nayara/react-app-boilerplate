import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import { render, screen } from '@testing-library/react';

describe('<Routes>', () => {
  it('should redirect to /calendar when landing in incorrect path', () => {
    const badRoute = '/some/bad/route';

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Hello from React!/i)).toBeInTheDocument();
  });
});

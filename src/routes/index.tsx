import { Route } from 'react-router-dom';
import CalendarPage from '../pages/Calendar';

export const calendarPath = 'calendar';

export const PublicRoutes = (
  <Route path={calendarPath}>
    <Route index element={<CalendarPage />} />
  </Route>
);

import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoutes, calendarPath } from './routes';

const App = () => {
  return (
    <Routes>
      {PublicRoutes}
      <Route path="*" element={<Navigate to={calendarPath} />} />
    </Routes>
  );
};

export default App;

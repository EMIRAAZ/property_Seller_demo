import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

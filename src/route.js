import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { Preview } from './preview';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/preview" element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

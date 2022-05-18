import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Buy from './pages/buy';
import Rent from './pages/rent';
import { Preview } from './preview';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="buy" element={<Buy />} />
          <Route path="rent" element={<Rent />} />
          <Route path="preview" element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

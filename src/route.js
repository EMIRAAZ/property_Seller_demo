import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Buy from './pages/buy';
import Rent from './pages/rent';
import Sell from './pages/sell';
import ShortTerm from './pages/shortterm';
import { Preview } from './preview';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="buy" element={<Buy />} />
          <Route path="rent" element={<Rent />} />
          <Route path="sell" element={<Sell />} />
          <Route path="shortterm" element={<ShortTerm />} />
          <Route path="preview" element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Buy from './pages/buy';
import Rent from './pages/rent';
import Sell from './pages/sell';
import ShortTerm from './pages/shortterm';
import Management from './pages/management';
import Mortgage from './pages/mortgage';
import { Preview } from './preview';
import OurTeam from './pages/ourteam';
import AboutFounder from './pages/aboutfounder';
import About from './pages/about';
import Partner from './pages/ourpartners';
import Policy from './pages/privacypolicy';
import Terms from './pages/terms';
import Career from './pages/career';
import Blog from './pages/dailyblog';

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
          <Route path="management" element={<Management />} />
          <Route path="mortgage" element={<Mortgage />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="ourpartner" element={<Partner/>} />
          <Route path="about" element={<About />} />
          <Route path="dailyblog" element={<Blog />} />
          <Route path="privacypolicy" element={<Policy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="career" element={<Career />} />
          <Route path="aboutfounder" element={<AboutFounder />} />
          <Route path="preview" element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

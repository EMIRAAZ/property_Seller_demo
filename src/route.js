import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/privateroute';
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
import Property from './admin/property';
import AddProperty from './admin/addproperty';
import Login from './admin/login';
import PropertyView from './pages/propertyview';

function Router() {
  const makePrivate = (component, role = '') => (
    <PrivateRoute role={role}>{component}</PrivateRoute>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="admin">
            <Route path="login" element={<Login />} />
            <Route index element={makePrivate(<Property />, 'ADMIN')} />
            <Route
              path="add-property"
              element={makePrivate(<AddProperty />, 'ADMIN')}
            />
            <Route
              path="add-property/:id"
              element={makePrivate(<AddProperty />, 'ADMIN')}
            />
          </Route>
          <Route path="buy" element={<Buy />} />
          <Route path="property/:id" element={<PropertyView />} />
          <Route path="rent" element={<Rent />} />
          <Route path="sell" element={<Sell />} />
          <Route path="shortterm" element={<ShortTerm />} />
          <Route path="management" element={<Management />} />
          <Route path="mortgage" element={<Mortgage />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="ourpartner" element={<Partner />} />
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

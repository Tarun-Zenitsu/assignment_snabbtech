import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/ui/pages/Login';
import Signup from './components/ui/pages/Signup';
import Forgotpassword from './components/ui/pages/Forgotpassword';
import ResetPassword from './components/ui/pages/ResetPassword';
import UpdatePassword from './components/ui/pages/UpdatePassword';
import HeroForMob from './components/ui/pages/HereoForMob';
import Home from './components/ui/pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route path="/heroformob" element={<HeroForMob />} />
      </Routes>
    </Router>
  );
};

export default App;

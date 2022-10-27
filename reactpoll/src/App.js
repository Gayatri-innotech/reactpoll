import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './pages/admin/Cart';
import Navbar from './Navbar';
import Home from './pages/admin/adminHome';
import UserCart from './pages/UserCart';
import Homes from './pages/Home';
import Sign from './pages/admin/sign';
// import Login from './components/auth/Login';
import Polls from './components/auth/Polls';
import LoginReg from './pages/LoginReg';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homes />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/usercart" element={<UserCart />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/sign" element={<Sign />}/>
            <Route path="/login" element={<LoginReg />}/>
            <Route path="/poll" element={<Polls />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
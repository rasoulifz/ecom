import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdownExample from './components/navDropdown';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Blog from './components/blog';
import { Contact } from './components/contactUs';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductProvider from './store/productProvider';
import { Electronic } from './components/electronic';
import { Clothes } from './components/clothes';
import { Home_Decoration } from './components/homeDecoration';
import { DetailPost } from './components/detailPost';
import AuthPage from './components/AuthPage';
import AuthContext, { AuthContextProvider } from './store/auth-context';
import UserProfile from './Profile/UserProfile';
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <AuthContextProvider>
      <ProductProvider>
        <Router>
          <NavDropdownExample />
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route index element={<Home />} />
            <Route exact path="/Blogs" element={<Blog></Blog>}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
            <Route
              exact
              path="/Celectronics"
              element={<Electronic />}
            ></Route>
            <Route exact path="/Cclothes" element={<Clothes />}></Route>
            <Route
              exact
              path="/Chomedecoration"
              element={<Home_Decoration />}
            ></Route>
            <Route exact path="/Blogs/:id" element={<DetailPost />}></Route>
           
              <Route path="/profile" element={<UserProfile/>}></Route>
            
            {!authCtx.isLoggedIn && (
              <Route path="/auth" element={<AuthPage />}></Route>
            )}
            

           
          </Routes>
        </Router>
      </ProductProvider>
    </AuthContextProvider>
  );
}

export default App;

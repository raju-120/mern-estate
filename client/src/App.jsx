import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import PrivateRoute from './Components/PrivateRoute/PrivateROute';
import CreateListing from './Pages/CreateListing/CreateListing';

export default function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/sign-in' element= {<SignIn />} />
      <Route path='/sign-up' element= {<SignUp />} />
      <Route path='/about' element= {<About />} />

      <Route element={<PrivateRoute />}>
       <Route path='/profile' element= {<Profile />} />
       <Route path='/create-listing' element={<CreateListing/>} />
      </Route>
    </Routes>
  </BrowserRouter> 
  
}

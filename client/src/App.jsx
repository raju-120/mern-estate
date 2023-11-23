import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import Header from './Components/Header/Header';
import About from './Pages/About/About';

export default function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/sign-in' element= {<SignIn />} />
      <Route path='/sign-up' element= {<SignUp />} />
      <Route path='/profile' element= {<Profile />} />
      <Route path='/about' element= {<About />} />
    </Routes>
  </BrowserRouter> 
  
}

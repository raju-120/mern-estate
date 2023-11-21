import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import Header from './Components/Header/Header';

export default function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/sign-in' element= {<SignIn />} />
      <Route path='/sign-out' element= {<SignUp />} />
      <Route path='/profile' element= {<Profile />} />
    </Routes>
  </BrowserRouter> 
  
}

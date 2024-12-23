
import './App.css';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Landingpage from './Components/Landingpage/Landingpage'
import Login from './Components/Loginpage/Login';
import Signup from './Components/Signuppage/Signup';
import Welcome from './Components/Wecomepage/Welcome';
import Yoruba from './Components/Yoruba/Yoruba';
import Learnyoruba from './Components/Learnyoruba/Learnyoruba';
import Englishyoruba from './Components/Englishyoruba/Englishyoruba';

function App() {
  return (
    <Routes>
    <Route path="/" exact element={<Landingpage/>} />
    <Route path='/login' exact element={<Login/>}/>
    <Route path='/signup' exact element={<Signup/>}/>
    <Route path='/welcome' exact element={<Welcome/>}/>
    <Route path='/yoruba' exact element={<Yoruba/>}/>
    <Route path='/learnyoruba' exact element={<Learnyoruba/>}/>
    <Route path='/englishyoruba' exact element={<Englishyoruba/>}/>
    </Routes>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appointment from './pages/AppointmentPage/Appointment';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/book-appointment' element={<Appointment/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SimpleForm from './components/SimpleForm';
import MultiStepFrom from './components/MultiStepForm';


function App() {
  return (
      <div>
          <h1>Reserva tu cita Semillero</h1>
        {/* <SimpleForm/> */}
        <MultiStepFrom/>
          
      
      </div>
  );
}
export default App

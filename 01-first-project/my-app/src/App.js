import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile  from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App() {
    
  return (

      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content' >
          <Routes>
            <Route path='/dialogs' element={ <DialogsContainer /> } />
            <Route path='/profile' element={ <Profile/>  } />
          </Routes>
        </div>
      </div>
    
  );
} 


export default App;


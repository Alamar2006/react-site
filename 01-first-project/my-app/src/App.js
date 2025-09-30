import './App.css';
import React from 'react';

import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    
  return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content' >
          <Routes>
            <Route path='/dialogs' element={ <DialogsContainer /> } />
            <Route path='/profile/:userId?' element={ <ProfileContainer/>  } />
            <Route path='/users' element={ <UsersContainer/>  } />
          </Routes>
        </div>
      </div>
    
  );
} 


export default App;


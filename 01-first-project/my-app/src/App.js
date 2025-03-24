import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile  from './components/Profile/Profile';
import Dialogs  from "./components/Dialogs/Dialogs";
import { Route, Routes } from 'react-router-dom';


function App(props) {
    
  return (

      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content' >
          <Routes>
            <Route path='/dialogs' element={ <Dialogs store={props.store} /> } />
            <Route path='/profile' element={ <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />  } />
          </Routes>
        </div>
      </div>
    
  );
} 


export default App;


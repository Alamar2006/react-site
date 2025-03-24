import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {


  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={ store.dispatch.bind(store) } store={store} />
      </BrowserRouter>
    </React.StrictMode>

  );
  // Внутри state будет сидеть redux
  reportWebVitals();
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


import React from 'react';
import './App.css';
import Sidebar from'./component/SideBar'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//모든 컴포넌트는 대문자로 시작해야한다.
function App() {

  return (
    <BrowserRouter>
      <Sidebar/>
      <Switch>
        <Route path='/'></Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;

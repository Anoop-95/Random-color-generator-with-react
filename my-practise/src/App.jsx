import './App.css'
import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from './Navbar';
import News from './News';




export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<News key="general" category="general"/>}></Route>
          <Route path='/general' element={<News key="general" category="general" pagesize="8" />}/>
          <Route path='/business' element={<News  key="business" category="business"/>}/>
          <Route path='/entertainment' element={<News  key="entertainment" category="entertainment"/> }/>
          <Route path='/science' element={<News key="science" category="science"/>}/>
          <Route path='/sports' element={<News key="sports" category="sports"/>}/>
          <Route path='/technology' element={<News key="technology" category="technology"/>}/>
          <Route path='/health' element={<News key="health" category="health"/>}/>
          
          
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App


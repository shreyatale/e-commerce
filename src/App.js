import './Style.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Mekaup/Navbar';
import Home from './Mekaup/Home';
import About from './Mekaup/About';
import Product from './Mekaup/Product';
import Cartlist from './Cartlist/Cartlist';
import Garllery from './Mekaup/Garllery';
import Contant from './Mekaup/Contant';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
function App() {
  const [search,setsearch]=useState("")
  console.log(search)
  const [darkmood, setdarkmood]=useState(true)
  const darkTheme = createTheme({
    palette: {
      mode: darkmood ?'dark': "light",
    },
  });
  
  return (
    <div className="App">
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <BrowserRouter>
      <Navbar search={search} setsearch={setsearch}/>
      <Routes>
      <Route path='/' element={<Home search={search}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product search={search}/>} />
      <Route path='/Cartlist/:id' element={<Cartlist/>}/>
      <Route path='/garllery' element={<Garllery/>}/>
      <Route path='/contant' element={<Contant/>}/>
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

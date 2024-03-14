import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Example from './components/example';
import Footer from './components/footer';
import Header from './components/header';
import UserList from "./components/user/UserList";

function App() { 
  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Example />} />
            <Route path="/user" element={<UserList />} />
          </Routes>      
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
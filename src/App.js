import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Cadastro from './pages/Cadastro/Cadastro';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';
import Container from './components/layouts/Container/Container';
import HomePage from './pages/Home/HomePage';
import Login from './pages/Login/Login';

function App() {
  return (
  <div>
    <Router> 
      <Container customClass="min-height">    
      <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route path="/cadastro" element={<Cadastro/>}></Route>
          <Route path="/login" element={<Login/>}> </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  </div>  
  )
}

export default App;

// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeaderNavBar from './components/MainHeadernavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import ProdEdit from './components/ProdEdit'
import ProdTable from './components/ProdTable';
import ProdForm from './components/ProdForm';




function App() {
  return (
    <div className="ApP">
    <MainHeaderNavBar/>
    <Routes>
    <Route path="/" element={<Navigate replace to="/home"></Navigate>}></Route>
    <Route path="/home" element={<HomeComponent/>}></Route>
    <Route path="/table" element={<ProdTable/>}></Route>
    <Route path="/form" element={<ProdForm/>}></Route>
    <Route path="/edit/:eid" element={<ProdEdit/>}></Route>
    


    </Routes>
    
    </div>
  );
}

export default App;

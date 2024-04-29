
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ErrorPage from './pages/ErrorPages';
import AdminManagement from './pages/AdminManagement';
import Buildings from './pages/Buildings';
import ContactPageForm from './pages/ContactPageForm';
import ContactPage from './pages/Contact';
function App() {


  return (
    <>
    <Routes>
       <Route path='/login'element ={<Login/>}/> 
       <Route path='/admin' element={<Admin/>}>
       <Route path='administration'element ={<AdminManagement/>}/> 
       <Route path='buildings'element ={<Buildings/>}/> 
       <Route path='contacts'element ={<ContactPage/>}/> 
       <Route path='contact/form'element ={<ContactPageForm/>}/> 
       </Route> 
       <Route path='*'  element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default App

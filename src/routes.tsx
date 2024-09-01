import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Form from './pages/form'
import ThankYou from './pages/thank-you'
import ScrollToTop from './utils/scroll-to-top'



export default function Router() {
  return (
    <BrowserRouter>
          <ScrollToTop/>
        <Routes>
        {/* <Route path="/" element={<Navigate to={"/login"} />} /> */}
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration-form' element={<Form/>}/>
            <Route path='/thank-you' element={<ThankYou/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}
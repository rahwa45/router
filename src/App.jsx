import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Features from './Components/Features'
import Enterprise from './Components/Enterprise'
import Support from './Components/Support'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <Header />
     <Routes>
        <Route path='header' element={<Header/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='features' element={<Features/>}></Route>
        <Route path='enterprise' element={<Enterprise/>}></Route>
        <Route path='support' element={<Support/>}></Route>
        <Route path='footer' element={<Footer/>}></Route>
     </Routes>
     
     <Footer/>

    </>

   
  )
}

export default App

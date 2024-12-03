
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Work from './pages/Work'
import BlogPage from './pages/BlogPage'
import Contact from './pages/Contact'



function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/work' element={<Work />} />
          <Route exact path='/blog' element={<BlogPage />} />
          <Route exact path='/contact' element={<Contact />} />
          

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

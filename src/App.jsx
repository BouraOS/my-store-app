import './App.css'
import {Routes, Route} from 'react-router-dom'

// Pages
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Products from './Components/pages/Products' 
import ProductDetail from './Components/pages/ProductDetail'
import Layout from './Components/Layouts/Layout'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<ProductDetail/>}/>
        </Route>
      </Routes>
    </>
  )
}


export default App

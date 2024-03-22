
import './App.css'
import FooterComponenet from './components/FooterComponenet'
import HeadherComponent from './components/HeadherComponent'
import ListProductComponent from './components/ListProductComponent'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ProductComponent from './components/ProductComponent'

function App() {


  return (
    <>
     <BrowserRouter>

      <HeadherComponent/>
        <Routes>
          
          <Route path='/product/getAll' element = {<ListProductComponent/>}></Route>
          <Route path='/product/save' element = {<ProductComponent/>}></Route>
          <Route path='/product/update/:id' element = {<ProductComponent/>}></Route>
        </Routes>

      <FooterComponenet/>

     </BrowserRouter>

    </>
  )
}

export default App

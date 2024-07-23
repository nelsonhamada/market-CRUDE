import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import ProductDetails from './pages/productDetails/ProductDetails';


function App(): ReactElement {
  
  return (
    <>
       <Routes>
        <Route path='/hahaha' element={ <Main /> } />
        <Route path='/:id' element={ <ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
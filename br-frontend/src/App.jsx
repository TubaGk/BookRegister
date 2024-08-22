import './App.css'
import BookComponent from './components/BookComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListBookComponent from './components/ListBookComponent'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            {/* //http://localhost:3000 */}
            <Route path='/' element = {<ListBookComponent/>}></Route>
            {/* //http://localhost:3000/books */}
            <Route path='/books' element = {<ListBookComponent/>}></Route>
            
            {/* //http://localhost:3000/add-book */}
            <Route path='/add-book'element = {<BookComponent/>}></Route>

            {/* //http://localhost:3000/update-book/1 */}
            <Route path='/update-book/:id' element = {<BookComponent/>}></Route>
          </Routes>
        <FooterComponent/>
     </BrowserRouter>
    </>
  )
}

export default App

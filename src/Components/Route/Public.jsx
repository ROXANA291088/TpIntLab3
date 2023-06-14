import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Productos from "../Productos"

function Public() {
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/productos' element={<Productos/>} />
            
        </Routes>
    )
}

export default Public;
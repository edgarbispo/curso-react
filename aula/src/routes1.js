import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Produto from "./pages/Produto";

const Routes1 = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route exact path="/contato" element={<Contato/>} />
                <Route path="/produto/:id" element={<Produto/>} />
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes1;
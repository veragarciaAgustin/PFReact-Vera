//Se necesitan estas 3 importaciones para crear el router
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Item, Category} from "../pages";
import { Navbar } from "../components";
export const MainRouter = () => {    
    return (
        <BrowserRouter>
        {/* El navbar se coloca aqui por el contexto, como el mainlayout esta
        "por fuera", o es padre del mainrouter, el navbar no se renderiza si se coloca en mainlayout */}
            <Navbar />
            <Routes>
                {/* Al no llamar al ItemListContainer directamente, nos permite
                tener una navegacion dinamica y poder cambiar la pagina home en un futuro
                sin afectar al ItemListContainer */}
                <Route path="/" element={<Home />}/>
                <Route path="/item/:id" element={<Item />}/>
                <Route exact path="/category/:category" element={<Category />}/>
            </Routes>
            {/* Aca podemos tratar con los parametros de url, en Item por ejemplo,
            para que nos muestre el detalle del item en base a el id */}
        </BrowserRouter>
    )
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/General/Landing/Landing';
import NavBar from "./components/General/NavBar/NavBar";
import Footer from "./components/General/Footer/Footer";
import DetailContainerUser from './components/User/DetailContainerUser/DetailContainerUser';
import DetailContainerAdmin from './components/Admin/DetailContainerAdmin/DetailContainerAdmin';
import RegisterForm from './components/General/RegisterForm/RegisterForm';
import LoginForm from './components/General/LoginForm/LoginForm';
import ItemListContainer from './components/General/ItemListContainer/ItemListContainer';
import Profile from "./components/General/Profile/Profile";
import Cart from "./components/User/Cart/Cart";
import FavoriteListContainer from "./components/User/FavoriteListContainer/FavoriteListContainer";
import OrderListContainer from './components/General/OrderListContainer/OrderListContainer';
import FormUpdateUser from './components/General/FormUpdateUser/FormUpdateUser';
import DetailOrderContainer from "./components/User/DetailOrderContainer/DetailOrderContainer";
import AboutUs from "./components/General/AboutUs/AboutUs";
import ManageUsersContainer from "./components/Admin/ManageUsersContainer/ManageUsersContainer";
import ManageShopsContainer from "./components/Admin/ManageShopsContainer/ManageShopsContainer";
import OrderListContainerAdmin from "./components/Admin/OrderListContainerAdmin/OrderListContainerAdmin";
import ClientOrderListContainer from "./components/Admin/ClientOrderListContainer/ClientOrderListContainer";
import OrderDetailContainer from "./components/Admin/OrderDetailContainer/OrderDetailContainer";
import ClientOrderDetailContainer from "./components/Admin/ClientOrderDetailContainer/ClientOrderDetailContainer";
import ClientDetailContainer from "./components/Admin/ClientDetailContainer/ClientDetailContainer";
import CreateProductAdmin from "./components/Admin/CreateProductAdmin/CreateProductAdmin";
import GeneralStadistics from "./components/Admin/GeneralStadistics/GeneralStadistics";
import CreateClientAdmin from "./components/Admin/CreateClientAdmin/CreateClientAdmin";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                {/* rutas generales */}
                <Route path="/" element={<Landing />} />
                <Route path="/Registrarse" element={<RegisterForm />} />
                <Route path="/Iniciar-sesion" element={<LoginForm />} />
                <Route path="/Inicio" element={<ItemListContainer />} />
                <Route path="/Mi-perfil" element={<Profile />} />
                <Route path="/Sobre-nosotros" element={<AboutUs />} />
                {/* rutas usuarios */}
                <Route path="/Ordenes" element={<OrderListContainer />} />
                <Route path="/Detalle/:id" element={<DetailContainerUser />} />
                <Route path="/Carrito" element={<Cart />} />
                <Route path="/Favoritos" element={<FavoriteListContainer />} />
                <Route path="/Actualizar-usuario" element={<FormUpdateUser />} />
                <Route path="/Detalle-pedido/:orderId" element={<DetailOrderContainer />} />
                {/* rutas admin */}
                <Route path="/Detalle-admin/:id" element={<DetailContainerAdmin />} />
                <Route path="/Administrar-usuarios" element={<ManageUsersContainer />} />
                <Route path="/Ordenes-admin" element={<OrderListContainerAdmin />} />
                <Route path="/Ordenes-cliente/:id" element={<ClientOrderListContainer />} />
                <Route path="/Detalle-pedido-admin/:id" element={<OrderDetailContainer />} />
                <Route path="/Detalle-pedido-cliente/:id" element={<ClientOrderDetailContainer />} />
                <Route path="/Detalle-cliente/:id" element={<ClientDetailContainer />} />
                <Route path="/Crear-producto" element={<CreateProductAdmin />} />
                <Route path="/Administrar-clientes" element={<ManageShopsContainer />} />
                <Route path="/Analisis" element={<GeneralStadistics />} />
                <Route path="/Crear-cliente" element={<CreateClientAdmin />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
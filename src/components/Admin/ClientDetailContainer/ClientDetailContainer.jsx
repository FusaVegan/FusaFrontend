import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useGetClientDetail } from "../../../hooks/useGetClientDetail";
import axios from "axios";
import { uriBack } from "../../../utils/const";
import { put_error } from "../../../redux/actions";
import { useFetchShops } from "../../../hooks/useFetchShops";


const ClientDetailContainer = () =>{
    const {id} = useParams();
    const shops = useSelector((state) => state.shops);
    const detail = useSelector((state) => state.detail);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = async (e) =>{
        e.preventDefault();
        try {    
            const body = {ClientId: id};
            await axios.post(`${uriBack}/client/deleteClient`, body).then((res)=> alert(res.data.message));
            useFetchShops();
        } catch (error) {
            dispatch(put_error(error.message));
        }
    }


    useGetClientDetail(id, shops);
    //handleInput, style, errorInput, value, label, button, type, id, name 
    return (
        <section className="section-client-detail-admin">
            <button type="button" className="button-form" onClick={handleClick}>Borrar cliente</button>
            <h3>Detalles del cliente: {detail?.localName ? detail?.localName : id}</h3>
            <h4>ID -- {id}</h4>
            {detail?.zone?.length > 0 && <h4>Zona / codigo: {detail.zone}</h4>}
            {detail?.adress?.length > 0 && <h4>Direccion: {detail?.adress}</h4>}
            {detail?.localName?.length > 0 && <h4>Nombre del local: {detail.localName}</h4>}
            {detail?.description?.length > 0 && <h4>Descripcion: {detail.description}</h4>}
            <NavLink to={`/Ordenes-cliente/${id}`}><h4>Listar ordenes del cliente</h4></NavLink>
        </section>
    );

}

export default ClientDetailContainer;
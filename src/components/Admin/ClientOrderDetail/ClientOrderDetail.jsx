import { useEffect, useState } from "react";
import ItemOrder from "../../User/ItemOrder/ItemOrder";
import { useSelector } from "react-redux";
import "./ClientOrderDetail.css";


const ClientOrderDetail = ({id, subtotal, total, discount, description, products, payments, cod, date, ClientId})=>{
    const [productList, setProductList] = useState([]);
    const allProducts = useSelector((state)=> state.products);
    const clients = useSelector((state)=> state.shops);
    const [client, setClient] = useState(undefined);

    useEffect(()=>{
        clients.length > 0 && setClient(clients.find((e) => e.id === ClientId));
        setProductList(products.map((e) => {
            return {
                count: e.count,
                unitPrice: e.unitPrice,
                product: allProducts.find((prod) => prod.id === e.id)
            }
        }));
    },[]);

    return (
        <>
            <section className="section-general-information">    
                <h3>Orden ID: {id}</h3>
                <h4>Cliente: {client?.localName}</h4>
                <h4>Fecha: {date}</h4>
                <h4>Subtotal: ${subtotal}</h4>
                <h4>Descuento: {discount}</h4>
                <h4>Total: ${total}</h4>
                {cod > 0 && <h4>Remito: {cod}</h4>}
                {description && <h4>Descripcion: {description}</h4>}
            </section>

            <section className="section-product-list">
                <h4>Pedido:</h4>
                
                {productList.map((e) => <ItemOrder {...e}/>)}

            </section>

            <section className="section-payments">
                {payments?.length > 0 && <h4>Pagos</h4>}
                {payments?.map((e)=> {
                    return (<>
                        <h5>Cantidad: ${e.amount}</h5>
                        <h5>Medio: {e.type}</h5>
                        {e?.date && <h5>Fecha: {e.date}</h5>}
                    </>)
                })}
            </section>
        </>
    );
}

export default ClientOrderDetail;
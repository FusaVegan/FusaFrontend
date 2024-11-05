import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ClientOrderItem from '../ClientOrderItem/ClientOrderItem';
import ButtonPagination from '../../General/ButtonPagination/ButtonPagination';
import Pagination from '../../General/Pagination/Pagination';
import './ClientOrderList.css';

const ClientOrderList = ({id}) => {

  const orders = useSelector((state) => state.clientOrders);
  const [clientOrders, setClientOrders] = useState([]);

  useEffect(()=>{
    const filteredOrders = orders?.filter((e)=> e.ClientId === id);
    setClientOrders(filteredOrders);
  },[id, orders])
  
  

  const [currentPage, setCurrentPage] = useState(1);
  const [quantityPerPage, setQuantityPerPage] = useState(10);
  const totalPages = Math.ceil(clientOrders?.length / quantityPerPage);

  const firstIndex = (currentPage - 1) * quantityPerPage;
  const lastIndex = Math.min(firstIndex + quantityPerPage, clientOrders?.length);

  const quantityOptions = [10, 20, clientOrders?.length];
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleQuantityChange = (num) => {
    setQuantityPerPage(num);
    setCurrentPage(1);
  };

  return (
    <div className='box-order-list'>

      <ul className='orders'>
        {
          orders?.length > 0 &&
          orders.slice(firstIndex, lastIndex).map((order) => <ClientOrderItem key={order.id} {...order} />)
        }
      </ul>

      <div className='section-pagination'>
        {
          orders.length > 0 &&
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        }
        <div className="container-options">

          <span className='span-options'>Filtrar cantidad de ordenes mostrados</span>

          <div className='container-options-quantity'>
            {
              quantityOptions.map((option) =>
                <ButtonPagination
                  key={option}
                  quantityPerPage={quantityPerPage}
                  handleQuantityChange={handleQuantityChange}
                  option={option}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientOrderList;
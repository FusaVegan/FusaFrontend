import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ManageShop from "../ManageShop/ManageShop";
import "./ManageShopList.css";
import ButtonPagination from "../../General/ButtonPagination/ButtonPagination";
import Pagination from "../../General/Pagination/Pagination";

const ManageShopList = ({ shops }) => {
  const clients = useSelector((state) => state.shops);

  const [currentPage, setCurrentPage] = useState(1);
  const [quantityPerPage, setQuantityPerPage] = useState(6);
  const totalPages = Math.ceil(shops.length / quantityPerPage);

  const firstIndex = (currentPage - 1) * quantityPerPage;
  const lastIndex = Math.min(firstIndex + quantityPerPage, shops.length);

  const quantityOptions = shops.length > 12 ? [6, 12, shops.length] : [6, 12];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleQuantityChange = (num) => {
    setQuantityPerPage(num);
    setCurrentPage(1);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [shops]);
    
  return (


    <ul className="list-shops">
        <section className='layout'>
        {
          shops.length > 0 &&
          shops.slice(firstIndex, lastIndex).map((shop) => <ManageShop key={shop.id} {...shop}  />)
        }
      </section>

      <section className='section-pagination'>
        {
          shops.length > 0 &&
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        }
        <div className="container-options">

          <span className='span-options'>Cantidad de locales a mostrar</span>

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
      </section>
      {/*
      user.map((client) => <ManageShop key={client.id} {...client} />)
      */}
    </ul>
  );
};

export default ManageShopList;

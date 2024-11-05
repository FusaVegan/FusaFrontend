import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { uriBack } from "../utils/const";
import { get_client_orders, put_error } from "../redux/actions";

export const useFetchAllClientOrders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${uriBack}/clientOrder/getAllClientOrders`).then((res) => res.data);
                dispatch(get_client_orders(response));
            } catch (error) {
                dispatch(put_error(error.response.data.error));
            };
        };

        fetchData();
    }, [])
}
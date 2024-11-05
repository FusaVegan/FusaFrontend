import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_shops, clean_shops, put_error, clean_error } from "../redux/actions";
import axios from "axios";
import { uriBack } from '../utils/const';

export const useFetchShops = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${uriBack}/client/getAllClients`).then((res) => res.data);

                dispatch(get_shops(response));
            } catch (error) {
                dispatch(put_error(error.response.data));
            };
        };

        fetchData();

        return () => {
            dispatch(clean_error());
        };
    }, []);
    
};
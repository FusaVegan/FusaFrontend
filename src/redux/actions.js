export const actions = {
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT',
    GET_CLIENTS: 'GET_CLIENTS',
    CLEAN_CLIENTS: 'CLEAN_CLIENTS',
    GET_SHOPS: 'GET_SHOPS',
    CLEAN_SHOPS: 'CLEAN_SHOPS',
    GET_DETAIL: 'GET_DETAIL',
    CLEAN_DETAIL: 'CLEAN_DETAIL',
    GET_FAVORITES: 'GET_FAVORITES',
    CLEAN_FAVORITES: 'CLEAN_FAVORITES',
    GET_ORDERS: 'GET_ORDERS',
    CLEAN_ORDERS: 'CLEAN_ORDERS',
    GET_CLIENT_ORDERS: 'GET_CLIENT_ORDERS',
    CLEAN_CLIENT_ORDERS: 'CLEAN_CLIENT_ORDERS',
    ADD_TO_CART: 'ADD_TO_CART',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    CLEAN_CART: 'CLEAN_CART',
    GET_PRODUCTS: 'GET_PRODUCTS',
    CLEAN_PRODUCTS: 'CLEAN_PRODCUTS',
    DELETE_FROM_CART: 'DELETE_FROM_CART',
    ERROR: 'ERROR',
    CLEAN_ERROR: 'CLEAN_ERROR',
    GET_TYPES: 'GET_TYPES',
    CHANGE_BOOLEAN_TOASTY: 'CHANGE_BOOLEAN_TOASTY',
    FILTER_BY_TYPE: 'FILTER_BY_TYPE',
    ORDER: 'ORDER',
    RESET_PRODUCTS: 'RESET_PRODUCTS',
    GET_REVIEW: 'GET_REVIEW',
    CLEAN_REVIEW: 'CLEAN_REVIEW'
};

// actions para los user

export const sign_in = (user) => {
    return (dispatch) => {
        return dispatch({
            type: actions.SIGN_IN,
            payload: user
        });
    };
};

export const sign_out = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.SIGN_OUT,
            payload: null
        });
    };
};

// actions para los admin

export const get_shops = (shops) => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_SHOPS,
            payload: shops
        });
    };
};

export const clean_shops = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_SHOPS,
            payload: []
        });
    };
};

export const get_clients = (clients) => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_CLIENTS,
            payload: clients
        });
    };
};

export const clean_clients = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.CLEAN_CLIENTS,
            payload: []
        });
    };
};

// actions para los detail

export const clean_detail = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.CLEAN_DETAIL,
            payload: null
        });
    };
};

export const get_detail = (detail) => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_DETAIL,
            payload: detail
        });
    };
};

// actions para las ordenes

export const get_orders = (orders) => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_ORDERS,
            payload: orders
        });
    };
};

export const clean_orders = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_ORDERS,
            payload: []
        });
    };
};
// actions para las ordenes de clientes / locales

export const get_client_orders = (orders) => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_CLIENT_ORDERS,
            payload: orders
        });
    };
};

export const clean_client_orders = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_CLIENT_ORDERS,
            payload: []
        });
    };
};

// actions para los favoritos

export const get_favorites = (favorites) => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_FAVORITES,
            payload: favorites
        });
    };
};

export const clean_favorites = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_FAVORITES,
            payload: []
        });
    };
};

// actions para el carrito

export const add_to_cart = (item) => {
    return (dispatch) => {
        return dispatch({
            type: actions.ADD_TO_CART,
            payload: item
        });
    };
};

export const delete_from_cart = (itemId) => {
    return (dispatch) => {
        return dispatch({
            type: actions.DELETE_FROM_CART,
            payload: itemId
        });
    };
};

export const update_quantity = ({ id, count }) => {
    return (dispatch) => {
        return dispatch({
            type: actions.UPDATE_QUANTITY,
            payload: { id, count }
        });
    };
};

export const clean_cart = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.CLEAN_CART,
            payload: []
        });
    };
};

// actions para los tipos de productos.

export const get_types = (types) => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_TYPES,
            payload: types,
        });
    }
}


// actions para los productos

export const get_products = (products) => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_PRODUCTS,
            payload: products
        });
    };
};

export const clean_products = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.CLEAN_PRODUCTS,
            payload: []
        });
    };
};

// action para el error

export const put_error = (error) => {
    return (dispatch) => {
        return dispatch({
            type: actions.ERROR,
            payload: error
        });
    };
};

export const clean_error = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.CLEAN_ERROR,
            payload: null
        });
    };
};

// action para cambiar el boolean del toasty

export const change_boolean_toasty = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.CHANGE_BOOLEAN_TOASTY,
            payload: false
        });
    };
};

// action para filtros y ordenamientos

export const filter_by_type = (productsToRender, type, products) => {
    return (dispatch) => {
        let response = products;
        if (type != 'all') response = productsToRender.filter((product) => product.Type.name === type)
        if (type != 'all' && response.length === 0) response = products.filter((product) => product.Type.name === type)
        return dispatch({
            type: actions.FILTER_BY_TYPE,
            payload: response,
        });
    };
};

export const order_by_name = (products) => {
    return async (dispatch) => {
        const response = products?.slice().sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        })
        return dispatch({
            type: actions.ORDER,
            payload: response
        });
    };
};

export const order_by_name_backwards = (products) => {
    return (dispatch) => {
        const response = products?.slice().sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        })
        return dispatch({
            type: actions.ORDER,
            payload: response
        });
    };
};

export const order_by_price = (products) => {
    return (dispatch) => {
        const response = products?.slice().sort((a, b) => {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            return 0;
        })
        return dispatch({
            type: actions.ORDER,
            payload: response
        });
    };
};

export const order_by_price_backwards = (products) => {
    return (dispatch) => {
        const response = products?.slice().sort((a, b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
        })
        return dispatch({
            type: actions.ORDER,
            payload: response
        });
    };
};

export const reset_products = (products) => {
    return (dispatch) => {
        return dispatch({
            type: actions.RESET_PRODUCTS,
            payload: products,
        });
    };
};

// actions para las review

export const get_review = (review) => {
    return (dispatch) => {
        return dispatch({
            type: actions.GET_REVIEW,
            payload: review
        });
    };
};

export const clean_review = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.CLEAN_REVIEW,
            payload: []
        });
    };
};
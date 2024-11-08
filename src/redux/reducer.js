import { actions } from "./actions";

const user = {
    id: "0e4aea97-13fc-437d-a85d-99ba88581bf3",
    image: "https://res.cloudinary.com/fusafood/image/upload/v1711925839/Users/ngaldos%40trucho.com.jpg",
    type: "Admin",
    name: "nicolas",
    lastName: "galdos",
    mail: "ngaldos@trucho.com",
    adress: "19 e 34 y 35",
    password: "Nico123.",
    updatedAt: "2024-03-31 19:57:19.721-03",
    createdAt: "2024-03-31 20:08:47.73-03",
    deletedAt: null
};



const initialState = {
    user: user,
    cart: [],
    orders: [],
    clientOrders: [],
    favorites: [],
    products: [],
    productsToRender: [],
    types: [],
    clients: [],
    shops: [],
    reviews: [],
    detail: null,
    error: null,
    booleanToasty: false
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        // actions para los ordenamientos y filtros
        case actions.RESET_PRODUCTS:
            return {
                ...state,
                productsToRender: action.payload,
            };
        case actions.ORDER:
            return {
                ...state,
                productsToRender: action.payload,
            };

        case actions.FILTER_BY_TYPE:
            return {
                ...state,
                productsToRender: action.payload,
            };

        // actions para los user
        case actions.SIGN_IN:
            return {
                ...state,
                user: action.payload
            };

        case actions.SIGN_OUT:
            return {
                ...state,
                user: action.payload
            };

        // actions para los clients 

        case actions.GET_CLIENTS:
            return {
                ...state,
                clients: action.payload
            };

        case actions.CLEAN_CLIENTS:
            return {
                ...state,
                clients: action.payload
            };
        // actions para los shops (locales / clientes)
        case actions.GET_SHOPS:
            return {
                ...state,
                shops: action.payload
            };

        case actions.CLEAN_SHOPS:
            return {
                ...state,
                shops: action.payload
            };

        // actions para los detail

        case actions.GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            };

        case actions.CLEAN_DETAIL:
            return {
                ...state,
                detail: action.payload
            };

        // actions para los favoritos

        case actions.GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            };

        case actions.CLEAN_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            };

        // actions para las ordenes

        case actions.GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            };

        case actions.CLEAN_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
        // actions para las ordenes de clientes / locales

        case actions.GET_CLIENT_ORDERS:
            return {
                ...state,
                clientOrders: action.payload
            };
            
        // actions para los favoritos

        case actions.GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            };

        case actions.CLEAN_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            };

        // actions para el carrito

        case actions.ADD_TO_CART:
            const newProduct = action.payload;

            const findProduct = state.cart.find((prod) => prod.id === newProduct.id);

            if (findProduct == undefined) {
                return {
                    ...state,
                    cart: [...state.cart, newProduct],
                    booleanToasty: true
                };
            }
            else return state;

        case actions.DELETE_FROM_CART:
            const filteredCart = state.cart.filter((prod) => prod.id != action.payload);

            return {
                ...state,
                cart: filteredCart
            };

        case actions.UPDATE_QUANTITY:
            const { id, count } = action.payload;
            const prod = state.cart.find((prod) => prod.id === id);
            const index = state.cart.findIndex((prod) => prod.id === id);

            const newProd = {
                ...prod,
                count: count
            };

            state.cart[index] = newProd;

            return {
                ...state,
                cart: state.cart
            };

        case actions.CLEAN_CART:
            return {
                ...state,
                cart: action.payload
            };

        // actions para los productos

        case actions.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                productsToRender: action.payload,
            };

        case actions.CLEAN_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };

        case actions.GET_TYPES:
            return {
                ...state,
                types: action.payload
            };

        // action para el error

        case actions.ERROR:
            return {
                ...state,
                error: action.payload
            };

        case actions.CLEAN_ERROR:
            return {
                ...state,
                error: action.payload
            };

        // action para cambiar el estado toasty y poder mostrar la alerta

        case actions.CHANGE_BOOLEAN_TOASTY:
            return {
                ...state,
                booleanToasty: action.payload
            };

        // action para las reviews

        case actions.GET_REVIEW:
            return {
                ...state,
                reviews: action.payload
            };

        case actions.CLEAN_REVIEW:
            return {
                ...state,
                reviews: action.payload
            };

        default:
            return state;
    };
};
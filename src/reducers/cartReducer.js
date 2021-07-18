// import { TYPES } from "../actions/cartAction";

// export const cartInitialState = {
//   products: [
//     {
//         id: 1,
//         nombre: "Chikin",
//         precio: 2500,
//         ingredientes: "Pollo, Queso crema, Palta y Cebollín.",
//         categoria: "California Rolls",
    
//       },
//     {
//         id: 7,
//         nombre: "Ebi",
//         precio: 2800,
//         ingredientes: "Camarón, Queso crema, Palta y Cebollín.",
//         categoria: "California Rolls",
//       },
//     {
//         id: 8,
//         nombre: "Samon",
//         precio: 2800,
//         ingredientes: "Salmón, Queso crema, Palta y Cebollín.",
//         categoria: "California Rolls",
  
//       },
//     {
//         id: 9,
//         nombre: "Kani",
//         precio: 2300,
//         ingredientes: "Kanikama, Queso crema, Palta y Cebollín.",
//         categoria: "California Rolls",

//       },
//     {
//         id: 10,
//         nombre: "Daburu",
//         precio: 3000,
//         ingredientes: "Salmón, Camarón, Queso crema y Palta.",
//         categoria: "California Rolls",
    
//       }
//     ],
//   cart: [],
// }

// export function cartReducer(state, action){
//   switch (action.type) {
//     case TYPES.ADD_TO_CART:{
//       let newItem = state.products.find(product => product.id === action.payload)
//       // console.log(newItem)
//       return {
//         ...state,
//         cart: [...state.cart, newItem]
//       }
//     }
//     case TYPES.REMOVE_ONE_FROM_CART:{

//     }
//     case TYPES.REMOVE_ALL_FROM_CART:{

//     }
//     case TYPES.CLEAR_CART:{
//       return cartInitialState;
//     }

//     default:
//       return state
//   }
// }
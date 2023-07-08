import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebaseInit";

// let productData;
// (async function fetchData() {
//   const querySnapshot = await getDocs(collection(db, "products"));
//   productData = querySnapshot.docs.map((doc) => {
//     return {
//       id: doc.id,
//       ...doc.data(),
//     };
//   });
// })();

// const initialState = { products: productData };

const productInitialState = {
  products: [
    {
      id: 1,
      title: "Mens Casual Premium Slim Fit T-Shir...",
      price: 300,
      img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      category: "men",
      isInCart: false,
      qty: 0,
    },
    {
      id: 2,
      title: "John Hardy Women's Legends Naga Gol...",
      price: 6950,
      img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      category: "jewelery",
      isInCart: false,
      qty: 0,
    },
    {
      id: 3,
      title: "WD 2TB Elements Portable External H...",
      price: 999,
      img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      category: "electronics",
      isInCart: false,
      qty: 0,
    },
    {
      id: 4,
      title: "Opna Women's Short Sleeve Moisture...",
      price: 699,
      img: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      category: "women",
      isInCart: false,
      qty: 0,
    },
  ],
  price: 9999,
  category: "",
};

const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {
    increaseQty: (state, action) => {
      const product = state.products.find(
        (product) => product.title === action.payload
      );
      product.qty += 1;
    },
    decreaseQty: (state, action) => {
      const product = state.products.find(
        (product) => product.title === action.payload
      );
      if (product.qty > 0) {
        product.qty--;
      }
      if (product.qty === 0) {
        product.isInCart = false;
      }
    },
    // addToCart: (state, action) => {
    //   const product = state.products.find(
    //     (product) => product.title === action.payload
    //   );
    //   product.isInCart = true;
    //   product.qty = 1;
    // },
    toggleCart: (state, action) => {
      const product = state.products.find(
        (product) => product.title === action.payload
      );
      product.isInCart = !product.isInCart;
      if (product.isInCart) {
        product.qty = 1;
      } else {
        product.qty = 0;
      }
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const productReducer = productSlice.reducer;
export const actions = productSlice.actions;

export const productSelector = (state) => state.productReducer;

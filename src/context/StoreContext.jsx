import React,{createContext,useContext,useMemo,useState} from 'react';
import {products as initialProducts} from '../data/mock';
const StoreContext=createContext();
export function StoreProvider({children}){
 const [cart,setCart]=useState([]); const [wishlist,setWishlist]=useState([]); const [user,setUser]=useState(null);
 const addToCart=(product,qty=1)=>setCart(c=>{const x=c.find(i=>i.id===product.id); return x?c.map(i=>i.id===product.id?{...i,qty:Math.min(i.qty+qty,product.stock)}:i):[...c,{...product,qty}]});
 const updateQty=(id,qty)=>setCart(c=>c.map(i=>i.id===id?{...i,qty:Math.max(1,Math.min(qty,i.stock))}:i));
 const removeFromCart=id=>setCart(c=>c.filter(i=>i.id!==id));
 const toggleWishlist=id=>setWishlist(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id]);
 const cartCount=cart.reduce((a,b)=>a+b.qty,0); const subtotal=cart.reduce((a,b)=>a+b.price*(1-b.discount/100)*b.qty,0);
 const value=useMemo(()=>({products:initialProducts,cart,wishlist,user,setUser,addToCart,updateQty,removeFromCart,toggleWishlist,cartCount,subtotal}),[cart,wishlist,user,subtotal,cartCount]);
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export const useStore=()=>useContext(StoreContext);

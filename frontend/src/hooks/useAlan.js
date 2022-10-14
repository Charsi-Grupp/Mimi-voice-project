import { useEffect, useState, useCallback } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useCart } from "../context/CartContext";
/* import useUser from "../context/useUser"; */

const COMMANDS = {
  OPEN_CART: "open-cart",
  CLOSE_CART: "close-cart",
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  PURCHASE_ITEMS: "purchase-items",
  OPEN_MIMI_START_PAGE: "open-mimi-start-page",
  OPEN_LOGIN_LOGOUT: "open-login-logout",
  OPEN_REGISTER : "open-register",
  WRITTE_EMAIL_LOGIN: "write-email-login",
  OPEN_PROJECT_LINK: "open-project-link",
  OPEN_TEAM_LINK: "open-team-link",
  OPEN_START_LINK : "open-start-link",
  GO_TO_PERFUMES: "go-to-perfumes",
  OPEN_MALE_LINK: "open-male-link",
  OPEN_FEMALE_LINK : "open-female-link",
  OPEN_DETAILS_BUTTON : "open-details-button",
};


export default function useAlan() {
  /* const user = useUser() */

  const [alanInstance, setAlanInstance] = useState();
  const {
    setShowCartItems,
    isCartEmpty,
    addToCart,
    removeFromCart,
    cart,
    checkout,
    perfumeItems,
  } = useCart();
  
  const openCart = useCallback(() => {
    if (isCartEmpty) {
      alanInstance.playText("You have no items in your cart");
    } else {
      alanInstance.playText("Opening cart");
      setShowCartItems(true);
    }
  }, [alanInstance, isCartEmpty, setShowCartItems]);

  const closeCart = useCallback(() => {
    if (isCartEmpty) {
      alanInstance.playText("You have no items in your cart");
    } else {
      alanInstance.playText("Closing cart");
      setShowCartItems(false);
    }
  }, [alanInstance, isCartEmpty, setShowCartItems]);

const openMimiStartPage = useCallback( () => {
  const element = document.getElementById("mimiStartPage");
  if(element){
    element.click()

  }else {
    alanInstance.playText("Not working")
    
  }
},[alanInstance])

const openRegister = useCallback(() => {
  const element = document.getElementById("showRegisterLink");
  if (element) {  
    element.click()
   
  }else {
    alanInstance.playText("Not working")
  }

},[alanInstance])

const writeEmailLogin = useCallback(() => {
const element = document.getElementById("emailLogin");
if (element) {
 // element.value="hallo"

  }else {
    alanInstance.playText("Not working")
  }

},[alanInstance])

const openLoginLogout = useCallback(() =>{
  const element = document.getElementById("loginLogout");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])

const goToPerfumes = useCallback(() =>{
  const element = document.getElementById("perfumesLink");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])


const openStartLink = useCallback(() =>{
  const element = document.getElementById("backTostartLink");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])

const openProjectLink = useCallback(() =>{
  const element = document.getElementById("projectLink");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])


const openMaleLink = useCallback(() =>{
  const element = document.getElementById("maleLink");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])

const openFemaleLink = useCallback(() =>{
  const element = document.getElementById("femaleLink");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])

const openTeamLink = useCallback(() =>{
  const element = document.getElementById("teamLink");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])

const openDetailsButton = useCallback((name) =>{
  console.log("open: " , name );
  const item = perfumeItems.find(
    (i) => i.name.toLowerCase() === name.toLowerCase()
   
  );
  const element = document.getElementById(`detailsLink${item.id}`);
  console.log(element);
  if(item){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance,  perfumeItems])

  const addItem = useCallback(
    ({ detail: { name, quantity } }) => {
      const item = perfumeItems.find(
        (i) => i.name.toLowerCase() === name.toLowerCase()
      );
      if (item == null) {
        alanInstance.playText(`I cannot find the ${name} item`);
      } else {
        addToCart(item.id, quantity);
        alanInstance.playText(
          `Add ${quantity} of the ${name} item to your cart`
        );
      }
    },
    [alanInstance, addToCart, perfumeItems]
  );

  const removeItem = useCallback(
    ({ detail: { name } }) => {
      const entry = cart.find(
        (e) => e.item.name.toLowerCase() === name.toLowerCase()
      );
      if (entry == null) {
        alanInstance.playText(`I cannot find the ${name} item in your cart`);
      } else {
        removeFromCart(entry.itemId);
        alanInstance.playText(`Removed the ${name} item from your cart`);
      }
    },
    [alanInstance, removeFromCart, cart]
  );

  const purchaseItems = useCallback(() => {
    if (isCartEmpty) {
      alanInstance.playText("Your cart is empty");
    } else {
      alanInstance.playText("Checking out");
      checkout();
    }
  }, [alanInstance, isCartEmpty, checkout]);

  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_CART, openCart);
    window.addEventListener(COMMANDS.CLOSE_CART, closeCart);
    window.addEventListener(COMMANDS.ADD_ITEM, addItem);
    window.addEventListener(COMMANDS.REMOVE_ITEM, removeItem);
    window.addEventListener(COMMANDS.PURCHASE_ITEMS, purchaseItems);
    window.addEventListener(COMMANDS.OPEN_MIMI_START_PAGE,openMimiStartPage);
    window.addEventListener(COMMANDS.OPEN_LOGIN_LOGOUT, openLoginLogout);
    window.addEventListener(COMMANDS.OPEN_REGISTER, openRegister);
    window.addEventListener(COMMANDS.WRITTE_EMAIL_LOGIN, writeEmailLogin);
    window.addEventListener(COMMANDS.OPEN_PROJECT_LINK, openProjectLink);
    window.addEventListener(COMMANDS.OPEN_TEAM_LINK, openTeamLink);
    window.addEventListener(COMMANDS.OPEN_START_LINK, openStartLink);
    window.addEventListener(COMMANDS.GO_TO_PERFUMES, goToPerfumes);
    window.addEventListener(COMMANDS.OPEN_MALE_LINK, openMaleLink);
    window.addEventListener(COMMANDS.OPEN_FEMALE_LINK, openFemaleLink);
    window.addEventListener(COMMANDS.OPEN_DETAILS_BUTTON, openDetailsButton);
    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart);
      window.removeEventListener(COMMANDS.CLOSE_CART, closeCart);
      window.removeEventListener(COMMANDS.ADD_ITEM, addItem);
      window.removeEventListener(COMMANDS.REMOVE_ITEM, removeItem);
      window.removeEventListener(COMMANDS.PURCHASE_ITEMS, purchaseItems);
      window.removeEventListener(COMMANDS.OPEN_MIMI_START_PAGE, openMimiStartPage);
      window.removeEventListener(COMMANDS.OPEN_LOGIN_LOGOUT, openLoginLogout);
      window.removeEventListener(COMMANDS.OPEN_REGISTER, openRegister);
      window.removeEventListener(COMMANDS.WRITTE_EMAIL_LOGIN, writeEmailLogin);
      window.removeEventListener(COMMANDS.OPEN_PROJECT_LINK, openProjectLink);
      window.removeEventListener(COMMANDS.OPEN_TEAM_LINK, openTeamLink);
      window.removeEventListener(COMMANDS.OPEN_START_LINK, openStartLink);
      window.removeEventListener(COMMANDS.GO_TO_PERFUMES, goToPerfumes);
      window.removeEventListener(COMMANDS.OPEN_MALE_LINK, openMaleLink);
      window.removeEventListener(COMMANDS.OPEN_FEMALE_LINK, openFemaleLink);
      window.removeEventListener(COMMANDS.OPEN_DETAILS_BUTTON, openDetailsButton);
    
    };
  }, [openCart, closeCart, addItem, removeItem, purchaseItems, openMimiStartPage, openLoginLogout, openRegister ,writeEmailLogin, openProjectLink, openTeamLink, openStartLink, goToPerfumes , openMaleLink, openFemaleLink, openDetailsButton ]);

  useEffect(() => {
    if (alanInstance != null) return;

    setAlanInstance(
      alanBtn({
        top: "0.6rem",
        left: "50%",
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command, payload }) => {
          window.dispatchEvent(new CustomEvent(command, { detail: payload }));
        },
      })
    );
  }, [alanInstance]);

  return null;
}

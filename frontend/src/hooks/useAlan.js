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
  ADD_START_PRICE : "add-start-price",
  ADD_MIDDEL_PRICE : "add-middel-price",
  ADD_FULL_PRICE : "add-full-price",
  OPEN_CART_LINK : "open-cart-link",
  GO_TO_PAY : "go-to-pay",
  SENT_REGISTER_BUTTON : "sent-register-button",
  SENT_LOGIN_BUTTON : "sent-login-button",
  SENT_PAYMENT_BUTTON : "sent-pay-button",
  KEEP_SHOPPING_LINK : "keep-shopping-link",
  GO_TO_TEAM : "go-to-team",
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

const sentRegisterButton = useCallback(() =>{
  const element = document.getElementById("sendRegisterLink");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])

const sentPaymentButton = useCallback(() =>{
  const element = document.getElementById("submit");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])

const goToTeam = useCallback(() =>{
  const element = document.getElementById("wayToTeam");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])

const keepShoppingLink = useCallback(() =>{
  const element = document.getElementById("keepShopping");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])

const sentLoginButton = useCallback(() =>{
  const element = document.getElementById("sendLogin");
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

const goToPay = useCallback(() =>{
  const element = document.getElementById("toPayButton");
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

const addStartPrice = useCallback(() =>{
  const element = document.getElementById("30");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance]);
const addMiddelPrice = useCallback(() =>{
  const element = document.getElementById("50");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance]);

const addFullPrice = useCallback(() =>{
  const element = document.getElementById("100");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance]);

const openCartLink = useCallback(() =>{
  const element = document.getElementById("addToCartLink");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance])


/* const openDetailsButton = useCallback(() =>{
  const element = document.getElementById("det");
  if(element){
    element.click()
  }else{
    alanInstance.playText("Not working")
  }
},[alanInstance]) */


 const openDetailsButton = useCallback( ({ detail: name, ...rest  }) => {
  console.log(name);
  const item = perfumeItems.find(
    (i) => i.name.toLowerCase() === name.toLowerCase()
  );
  console.log(item);
  const element = document.getElementById(item.id);
  console.log(element);
 
    if (item == null) {
      alanInstance.playText(`I cannot find the ${name} item`);
    } else {
      element.click()
    }
  },
  [alanInstance, perfumeItems]) 

/* const [isOpen, setIsOpen] = useState()
  const openItemButton = useCallback( ({ details: name  }) => {
    const item = perfumeItems.find(
      (i) => i.name === name
    );
    console.log(item);
    const element = document.getElementById("det");
    console.log(element);
   
      if (item == null) {
        alanInstance.playText(`I cannot find the ${name} item`);
      } else {
        element.click()
      }
    },
    [alanInstance, perfumeItems]) */

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
    window.addEventListener(COMMANDS.ADD_START_PRICE, addStartPrice);
    window.addEventListener(COMMANDS.ADD_MIDDEL_PRICE, addMiddelPrice);
    window.addEventListener(COMMANDS.ADD_FULL_PRICE, addFullPrice);
    window.addEventListener(COMMANDS.OPEN_CART_LINK, openCartLink);
    window.addEventListener(COMMANDS.GO_TO_PAY, goToPay);
    window.addEventListener(COMMANDS.SENT_REGISTER_BUTTON, sentRegisterButton);
    window.addEventListener(COMMANDS.SENT_LOGIN_BUTTON, sentLoginButton);
    window.addEventListener(COMMANDS.SENT_PAYMENT_BUTTON, sentPaymentButton);
    window.addEventListener(COMMANDS.KEEP_SHOPPING_LINK, keepShoppingLink);
    window.addEventListener(COMMANDS.GO_TO_TEAM, goToTeam);

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
      window.removeEventListener(COMMANDS.ADD_START_PRICE, addStartPrice);
      window.removeEventListener(COMMANDS.ADD_MIDDEL_PRICE, addMiddelPrice);
      window.removeEventListener(COMMANDS.ADD_MIDDEL_PRICE, addMiddelPrice);
      window.removeEventListener(COMMANDS.OPEN_CART_LINK, openCartLink);
      window.addEventListener(COMMANDS.GO_TO_PAY, goToPay);
      window.removeEventListener(COMMANDS.SENT_REGISTER_BUTTON, sentRegisterButton);
      window.addEventListener(COMMANDS.SENT_LOGIN_BUTTON, sentLoginButton);
      window.removeEventListener(COMMANDS.SENT_PAYMENT_BUTTON, sentPaymentButton);
      window.removeEventListener(COMMANDS.KEEP_SHOPPING_LINK, keepShoppingLink);
      window.removeEventListener(COMMANDS.GO_TO_TEAM, goToTeam);
    };
  }, [openCart, closeCart, addItem, removeItem, purchaseItems, openMimiStartPage, openLoginLogout, openRegister ,writeEmailLogin, openProjectLink, openTeamLink, openStartLink, goToPerfumes , openMaleLink, openFemaleLink, openDetailsButton, addStartPrice, addMiddelPrice, addFullPrice, openCartLink, goToPay, sentRegisterButton, sentLoginButton, sentPaymentButton, keepShoppingLink, goToTeam]);

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

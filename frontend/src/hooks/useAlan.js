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

/*   const navigate = useNavigate();
  const handleLogout = async () => {
    await user.logout();
    navigate("/team");
  }; */
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
window.addEventListener(COMMANDS.OPEN_MIMI_START_PAGE,openMimiStartPage)
    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart);
      window.removeEventListener(COMMANDS.CLOSE_CART, closeCart);
      window.removeEventListener(COMMANDS.ADD_ITEM, addItem);
      window.removeEventListener(COMMANDS.REMOVE_ITEM, removeItem);
      window.removeEventListener(COMMANDS.PURCHASE_ITEMS, purchaseItems);
      window.removeEventListener(COMMANDS.OPEN_MIMI_START_PAGE, openMimiStartPage);
    };
  }, [openCart, closeCart, addItem, removeItem, purchaseItems, openMimiStartPage]);

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

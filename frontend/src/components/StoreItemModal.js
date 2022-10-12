
import {  useState } from "react"; // muss useRef lernen
import formatCurrency from "../util/formatCurrency";
import Modal from "react-modal";
import { useCart } from "../context/CartContext";

Modal.setAppElement("#root");

export default function StoreItemModal({ item, open, closeModal }) {
  const [quantity, setQuantity] = useState(item.price.start);

  const { addToCart } = useCart();
 
  function handleSubmit(e) {
    e.preventDefault();

    /* const quantity = parseInt(quantityRef.current.value) */
    addToCart(item.id, quantity);
    closeModal();

  }
   function onChangePrice(e){
/* console.log(e.target.value); */
    setQuantity(e.target.value);
   }


  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        },
        content: {
          margin: "10px",
          padding: "0",
          inset: "auto",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      <section className="text-white body-font overflow-hidden bg-black">
        <div className="container px-4 py-4 mx-auto">
          <div className="mx-auto flex items-center">
            <img
              alt="ecommerce"
             style={{width: '50%'}}
              /* className="w-20px object-cover object-center rounded" */
              src={item.image}
            />
            <div className="pl-8 py-2">
              <h2 className="text-sm title-font text-white tracking-widest">
                {item.brand}
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                {item.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="orange"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="orange"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="orange"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="orange"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a href="https://de-de.facebook.com/" className="text-gray-500">
                    <svg
                      fill="blue"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com/?lang=de" className="ml-2 text-gray-500">
                    <svg
                      fill="blue"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                </span>
              </div>

              <div className="flex mt-4">
                {/* <span className="title-font font-medium text-2xl text-gray-900">
                  {formatCurrency(quantity)}
                </span>  */} 
                <form
                  onSubmit={handleSubmit}
                  className=""
                >    <div class="flex-col text-lg">
                {/* {" "} */}
                  <div className="m-6">
                  <input  type="radio" name="price" onChange={onChangePrice} value={item.price.start}  id="30" />
                  <span className="mr-72 ml-4">30ml</span>
                  <label className="" htmlFor="">{formatCurrency(item.price.start)}</label>
                  <hr />
                 </div>
                 <div className="m-6">
                  <input type="radio" name="price" onChange={onChangePrice} value={item.price.middel}  id="50"  />
                  <span className="mr-72 ml-4">50ml</span>
                  <label htmlFor=""> {formatCurrency(item.price.middel)} </label>
                  <hr />
                  </div>
                  <div className="m-7">
                  <input type="radio" name="price" onChange={onChangePrice} value={item.price.full} id="100"  />
                  <span className="mr-72 ml-4">100ml</span>
                  <label htmlFor="">{formatCurrency(item.price.full)} </label>
                  <hr />
                  </div>  
                  </div>  

                  <button
                    type="submit"
                    className="flex mt-16 ml-96 text-black bg-white rounded-full border-0 py-2 px-3 focus:outline-none hover:bg-red-500 rounded-full"
                  >
                    Add To Cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
}

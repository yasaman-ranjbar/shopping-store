import UiCart from "../components/Cart/UiCart";
import { useCart, useCartActions } from "../Providers/CartProvider";
import CartSummery from "../components/Cart/CartSummery";
import Layout from "../Layout/Layout";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import EmptyCart from "../components/Cart/EmptyCart";

const Cart = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  const addHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const removeHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  if (!cart) {
    return <div>no item in the cart</div>;
  }

  return (
    <Layout>
      <Breadcrumb title="Cart" />
      
        {cart && total ? (
          <div className="p-10 md:flex gap-2 bg-slate-50">
            <section className="md:w-2/3">
              {cart.map((item) => {
                return (
                  <UiCart
                    image={item.image}
                    title={item.title}
                    price={item.price * item.quantity}
                    quantity={item.quantity}
                    rate={item.rating.rate}
                    count={item.rating.count}
                    addHandler={() => addHandler(item)}
                    removeHandler={() => removeHandler(item)}
                  />
                );
              })}
            </section>
            <section className="mt-4 md:mt-0 md:w-1/3">
              <CartSummery total={total} />
            </section>
          </div>
        ) : (
          <EmptyCart />
        )}
    </Layout>
  );
};

export default Cart;

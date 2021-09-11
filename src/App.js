import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { replaceEntireCart, toggleCart } from './store/cartSlice';
import { useEffect } from 'react';

function App() {

  const showCart = useSelector(state => state.cart.showCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://redux-toolkit-example-63dda-default-rtdb.firebaseio.com/cart.json', []);
      if (response.ok) {
        const data = await response.json();
        if (data) dispatch(replaceEntireCart(data));
      }
    };

    fetchData();
  }, [dispatch]);


  const cartButtonClickHandler = () => {
    dispatch(toggleCart());
  }

  return (
    <Layout onMyCartClick={cartButtonClickHandler}>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

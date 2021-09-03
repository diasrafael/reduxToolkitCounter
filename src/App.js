import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from './store/cartSlice';

function App() {

  const showCart = useSelector(state => state.cart.showCart);
  const dispatch = useDispatch();

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

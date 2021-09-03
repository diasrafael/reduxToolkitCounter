import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const itemCount = useSelector(state => 
    state.cart.cart.length ? state.cart.cart.reduce((previous, current) =>
      previous + current.quantity, 0) : 0
  );

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default CartButton;

import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Products = (props) => {

  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('https://redux-toolkit-example-63dda-default-rtdb.firebaseio.com/items.json');
      
      if (response.ok) {
        const json = await response.json();
        setItems(json.filter(item => item != null).map(item => item));
      }
    }

    fetchData();

  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map(item => 
          <ProductItem key={item.id} {...item}/>)}
      </ul>
    </section>
  );
};

export default Products;

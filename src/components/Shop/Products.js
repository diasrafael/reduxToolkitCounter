import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id='1'
          title='React Complete Course'
          price={9}
          description='Use React to create amazing apps!'
        />

        <ProductItem
          id='2'
          title='Redux Course'
          price={6}
          description='Learn how to use Redux to manage React state!'
        />
      </ul>
    </section>
  );
};

export default Products;

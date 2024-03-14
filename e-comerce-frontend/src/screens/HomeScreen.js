import './HomeScreen.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

// Components
import Product from '../components/Product';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';
import { setUserDetails } from '../redux/actions/userAction';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(setUserDetails());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <div className="homescreen__icons">
        <a href="/home" className="http://openclipart.org/image/800px/svg_to_png/47197/home-icon6.png">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>Home</span>
        </a>
        <a href="/profile" className="icon-link">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span>Profile</span>
        </a>
        <a href="/settings" className="icon-link">
          <FontAwesomeIcon icon={faCog} className="icon" />
          <span>Settings</span>
        </a>
        <br />
        <br />
        <br />
        
      </div>
      <h2 className="homescreen__title"></h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;

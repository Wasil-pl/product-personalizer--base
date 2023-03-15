import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({name, title, basePrice, colors, sizes}) => {
  //Tworzymy stan ponieważ potrzebujemy zmiennych z wyborem użytkownika, jaki kolor, rozmiar etc
  // do stanu dodajemy informacje początkowe (domyślne). W tym wypadku są to pierwsze parametry
  const [currentColor, setCurrentColor] = useState(colors[0]); 
  const [currentSizePlusPrice, setCurrentSizePlusPrice] = useState(sizes[0]);

  const price = useMemo(() => {
    const calculatedPrice = basePrice  + currentSizePlusPrice.additionalPrice;
      return calculatedPrice
  }, [basePrice, currentSizePlusPrice.additionalPrice]);

  const cartSummary = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('==============');
    console.log('Name: ', title);
    console.log('Price: ', price);
    console.log('Size: ', currentSizePlusPrice.name);
    console.log('Color: ', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          cartSummary={cartSummary}
          sizes={sizes}
          colors={colors}
          setCurrentColor={setCurrentColor}
          currentColor={currentColor}
          currentSizePlusPrice={currentSizePlusPrice}
          setCurrentSizePlusPrice={setCurrentSizePlusPrice}
          />
      </div>
    </article>
  )
};

// ustalamy jakie parametry są potrzebne w komponencie

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;
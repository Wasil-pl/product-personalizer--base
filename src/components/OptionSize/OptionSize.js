import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionSize = ({ setCurrentSizePlusPrice, currentSizePlusPrice, sizes }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size) => (
          <li key={shortid()}>
            <button type='button' onClick={() => {
              setCurrentSizePlusPrice(size);
              }} 
              className={clsx(size.name === currentSizePlusPrice.name && styles.active)}>  {/* Jeśli chcemy użyć dwóch lub więcej klas, to jako className podajemy po prostu wywołanie funkcji clsx, gdzie argumentami są nazwy klas, których chcemy użyć. */}
                {size.name}                                                                                                                   {/* W tym wypadku robimy warunek który, jeśli rozmiar jest równy wybranemu elementowi to nadaj klase active */}
            </button>
          </li>
          ))}
      </ul>
    </div>
  )
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  setCurrentSizePlusPrice: PropTypes.func.isRequired,
  currentSizePlusPrice: PropTypes.object.isRequired,
};

export default OptionSize;
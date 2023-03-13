import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);


  return (
    <section>
      {products.map((product) => ( <Product key={product.id} {...product}/> ))}
    </section>
  )

  /* korzystamy z pętli 'map' aby przejsć po wszytkich produktach "products". Jako że to będzie lista React oczekiuje unikalnego 'key',
  Następnie zamiast wypisywać każdy parametr osobno czyli "id={products[0].id} name={products[0].name} colors={products[0].colors itd" To wystarczy 
  że użyjemy "spread operator" czyli "<Product {...products[0]} />" da to ten sam efekt" */

};

export default Products;
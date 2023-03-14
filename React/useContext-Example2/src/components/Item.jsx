import { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

export default function Item({ id, price, name, inCart }) {

  const { SetCartItems } = useContext(StoreContext);

  function AddToCart(id, name, price) {
    let item = {
      id,
      name,
      price
    }

    SetCartItems((prev) => [...prev, item])
  }



  return (
    <div>
      <p>
        id: {id} | name: {name} | price: {price} NIS
        {
          (!inCart) ?
            <button onClick={() => AddToCart(id, name, price)}>Add to cart</button>
            : null
        }
      </p>
    </div>
  )
}

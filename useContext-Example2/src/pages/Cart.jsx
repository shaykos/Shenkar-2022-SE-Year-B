import { useContext } from 'react'
import { StoreContext } from '../context/storeContext'
import Item from '../components/Item';

export default function Cart() {

  const { cartItems } = useContext(StoreContext);

  return (
    <div>
      <h1>Cart</h1>
      {
        cartItems.map((item) => <Item key={item.id} {...item} inCart={true}/>)
      }
    </div>
  )
}

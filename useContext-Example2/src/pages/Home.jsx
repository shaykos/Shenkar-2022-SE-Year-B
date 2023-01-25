import { useContext } from 'react';
import { StoreContext } from '../context/storeContext';
import Item from '../components/Item';

export default function Home() {

  const { items } = useContext(StoreContext);


  return (
    <div>
      <h1>Home</h1>
      {/* {items.map((item) => <Item key={item.id} id={item.id} name={item.name} price={item.price} />)} */}
      {items.map((item) => <Item key={item.id} {...item} />)}
    </div>
  )
}

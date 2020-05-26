import { writable, derived } from 'svelte/store';
import localCart from '../localCart';

// store
const cart = writable([...localCart]);

// cart total
export const cartTotal = derived(cart, ($cart) => {
  console.log({ $cart });

  let total = $cart.reduce((acc, item) => {
    return (acc += item.price * item.amount);
  }, 0);
  return total.toFixed(2);
});

// local functions
const remove = (items, id) => items.filter((item) => item.id !== id);

function increase(items, id) {
  return items.map((item) => {
    if (item.id == id) item.amount++;
    return item;
  });
}
function decrease(items, id) {
  return items.filter((item) => {
    if (item.id === id) {
      return item.amount === 1 ? null : item.amount-- && item;
    }
    return item;
  });
}

// global functions
export const removeItem = (id) =>
  cart.update((state) => remove(state, id));

export const changeAmount = (id, action) => {
  cart.update((state) => {
    if (action === 'increase') return increase(state, id);
    if (action === 'decrease') return decrease(state, id);
  });
};

// local storage

export default cart;

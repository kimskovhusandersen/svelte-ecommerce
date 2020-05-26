import { writable, derived } from 'svelte/store';

// store
const cart = writable(getStorageCart());

// cart total
export const cartTotal = derived(cart, ($cart) => {
  let total = $cart.reduce((acc, item) => {
    return (acc += item.price * item.amount);
  }, 0);
  return total.toFixed(2);
});

// local functions
function remove(items, id) {
  return items.filter((item) => item.id !== id);
}

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
export function removeItem(id) {
  return cart.update((state) => remove(state, id));
}

export function changeAmount(id, action) {
  return cart.update((state) => {
    return action === 'increase'
      ? increase(state, id)
      : decrease(state, id);
  });
}

export function addToCart(product) {
  return cart.update((state) => {
    const { id } = product;
    const existing = state.find((item) => item.id === id);
    if (existing) {
      existing.amount++;
      return state;
    } else {
      return [...state, { ...product, amount: 1 }];
    }
  });
}

// local storage
function getStorageCart() {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
}

export function setStorageCart(cartState) {
  localStorage.setItem('cart', JSON.stringify(cartState));
}

export default cart;

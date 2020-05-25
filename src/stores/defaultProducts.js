import { writable, derived } from 'svelte/store';
import localProducts from '../localProducts';
const store = writable(flattenProducts([...localProducts])); // setup initial value

function flattenProducts(data) {
  return data.map((item) => {
    let image = item.image.url;
    return { ...item, image };
  });
}

// feature store
export const featuredStore = derived(store, ($featured) => {
  return $featured.filter((item) => item.featured === true);
});
export default store;

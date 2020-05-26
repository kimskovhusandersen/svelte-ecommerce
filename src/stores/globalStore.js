import { writable } from 'svelte/store';

const store = writable({
  showSidebar: false,
  showCart: false,
  showAlert: false,
});

// custom store
const customStore = {
  subscribe: store.subscribe,
  toggleItem(item, value) {
    store.update((state) => {
      return { ...state, [item]: value };
    });
  },
};

export default customStore;

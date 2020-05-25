<script>
  // import { onMount, onDestroy } from 'svelte';
  import Product from './Product.svelte';
  import Loading from '../Loading.svelte';
  // store
  import store from '../../stores/defaultProducts';

  // importing a store in the following way, gives you access to it's methods (set, update, subscribe):
  //   let products = [];
  //   let unsubscribe;

  //   onMount(() => {
  //     // set products equal to the store value
  //     unsubscribe = store.subscribe(value => {
  //       products = value;
  //     });
  //   });
  //   onDestroy(() => {
  //     // remember to unsubscribe from the store
  //     unsubscribe();
  //   });

  // variables
  export let title = 'title';
</script>

<style>
  /* your styles go here */
</style>

<section class="section">
  <h2 class="section-title">{title}</h2>
  <div class="products-center">
    <!-- you can also import a store with a "$", which will lead to automatic subscription and unsubscription -->
    {#each $store as product (product.id)}
      <Product {product} />
    {:else}
      <Loading />
    {/each}
  </div>
</section>

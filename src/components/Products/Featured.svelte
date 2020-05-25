<script>
  //store
  import products, {
    featuredStore,
  } from '../../stores/defaultProducts';
  // components
  import Product from './Product.svelte';
  import Loading from '../Loading.svelte';

  // variables
  export let title = 'title';
</script>

<style>
  /* your styles go here */
</style>

{#if $featuredStore.length === 0}
  <Loading />
{:else}
  <section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
      <!-- you can also import a store with a "$", which will lead to automatic subscription and unsubscription -->
      {#each $featuredStore as product (product.id)}
        <Product {product} />
      {/each}
    </div>
  </section>
{/if}

<script>
  import Loading from '../components/Loading.svelte';
  import { link } from 'svelte-routing';
  import globalStore from '../stores/globalStore';
  // store
  import products from '../stores/defaultProducts';
  // variables
  export let location;
  export let id;

  // reactive variables
  $: product = $products.find(item => item.id === Number(id));

  //global store
</script>

<style>
  /* your styles go here */
</style>

<svelte:head>
  <title>
    Svelte e-commerce | {!product ? 'single product' : product.title}
  </title>
</svelte:head>
{#if !product}
  <Loading />
{:else}
  <section class="single-product">
    <a href="/products" class="btn btn-primary" use:link>
      back to products
    </a>
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => globalStore.toggleItem('showCart', true)}>
          add to cart
        </button>
      </article>
    </div>
  </section>
{/if}

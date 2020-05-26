<script>
  import { fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { afterUpdate } from 'svelte';
  // store
  import cart, { cartTotal, setStorageCart } from '../../stores/cart';

  // components
  import Item from './Item.svelte';

  afterUpdate(() => {
    setStorageCart($cart);
  });
</script>

<style>
  /* your styles go here */
</style>

<section class="cart-items">
  <article>
    {#each $cart as item, index (item.id)}
      <div
        in:fly={{ delay: (index + 1) * 150, x: 100 }}
        out:fly={{ x: -100 }}
        animate:flip>
        <Item {...item} />
      </div>
    {:else}
      <h2 class="empty-cart">is currently empty...</h2>
    {/each}
  </article>
  <h3 class="cart-total">total : ${$cartTotal}</h3>

</section>

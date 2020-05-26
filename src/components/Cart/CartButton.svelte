<script>
  import globalStore from '../../stores/globalStore';
  import cart from '../../stores/cart.js';
  $: total = $cart.reduce((acc, item) => {
    return (acc += item.amount);
  }, 0);
</script>

<style>
  /* your styles go here */
</style>

<div class="btn-cart-container">
  <button
    class="btn-cart-toggle"
    on:click={() => globalStore.toggleItem('showCart', true)}>
    <i class="fas fa-cart-plus" />
  </button>
  <span class="btn-cart-items">{total}</span>
</div>

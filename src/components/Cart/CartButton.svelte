<script>
  // your script goes here
</script>

<style>
  /* your styles go here */
</style>

<div class="btn-cart-container">
  <button
    class="btn-cart-toggle"
    on:click={() => {
      console.log('cart items');
    }}>
    <i class="fas fa-cart-plus" />
  </button>
  <span class="btn-cart-items">10</span>
</div>

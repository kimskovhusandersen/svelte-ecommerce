<script>
  import globalStore from '../../stores/globalStore';
  import { fly, fade, blur } from 'svelte/transition';
  import { link } from 'svelte-routing';
  // components
  import ItemsList from './ItemsList.svelte';
  //store

  // itemlist
  import user from '../../stores/user';
</script>

<style>
  /* your styles go here */
</style>

<div class="cart-overlay" transition:blur>
  <div class="cart-container" transition:fly={{ x: 100 }}>
    <div class="cart" transition:fade={{ delay: 400 }}>
      <!-- cart header -->
      <div class="cart-header">
        <button
          class="btn-close"
          on:click={() => globalStore.toggleItem('showCart', false)}>
          <i class="fas fa-window-close" />
        </button>
        <h2 class="cart-title">your bag</h2>
        <span />
      </div>
      <!-- cart items -->
      <ItemsList />
      <!-- cart footer -->
      <div class="cart-footer">
        {#if $user.token}
          <a
            href="/checkout"
            class="btn btn-primary btn-block"
            use:link
            on:click={() => globalStore.toggleItem('showCart', false)}>
            checkout
          </a>
        {:else}
          <p class="cart-login">
            in order to checkout please
            <a
              href="/login"
              use:link
              on:click={() => globalStore.toggleItem('showCart', false)}>
              login
            </a>
          </p>
        {/if}
      </div>
    </div>
  </div>
</div>

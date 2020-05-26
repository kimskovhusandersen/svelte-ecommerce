<script>
  import { link } from 'svelte-routing';
  // components
  import CartButton from '../Cart/CartButton.svelte';

  // global store
  import globalStore from '../../stores/globalStore.js';
  let openSidebar = globalStore.toggleItem;
</script>

<style>
  /* your styles go here */
</style>

<nav class="navbar">

  <div class="nav-center">
    <button
      class="btn-sidebar-toggle"
      on:click={() => openSidebar('showSidebar', true)}>
      <i class="fas fa-bars" />
    </button>
    <a href="/" class="nav-logo" use:link>
      <img
        src="/assets/images/logo.svg"
        alt="razors logo"
        class="logo" />
    </a>
    <CartButton />

  </div>

</nav>

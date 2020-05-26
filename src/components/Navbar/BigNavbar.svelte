<script>
  import { link } from 'svelte-routing';
  import routes from '../../constants/routes';
  // components
  import CartButton from '../Cart/CartButton.svelte';
</script>

<style>
  /* your styles go here */
</style>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <!-- nav links -->
      <ul class="nav-links">
        {#each routes as route}
          <li>
            <a href={route.url} use:link>{route.text}</a>
          </li>
        {/each}
      </ul>
      <!-- nav logo -->
      <a href="/" class="nav-logo big-logo" use:link>
        <img
          src="/assets/images/logo.svg"
          alt="razors logo"
          class="logo" />
      </a>
      <div class="nav-aside">
        <!-- cart button -->
        <CartButton />
        <!-- login button -->
      </div>
    </div>
  </div>

</nav>

<script>
  import { link } from 'svelte-routing';
  import routes from '../../constants/routes';
  // global store
  import globalStore from '../../stores/globalStore.js';
  import { fly, fade } from 'svelte/transition';
</script>

<style>
  /* your styles go here */
</style>

<div class="sidebar-container" transition:fly={{ x: -1000 }}>
  <div class="sidebar" transition:fade={{ delay: 400 }}>
    <!-- header -->
    <div class="sidebar-header">
      <button
        class="btn-close"
        on:click={() => {
          globalStore.toggleItem('showSidebar', false);
        }}>
        <i class="fas fa-window-close" />
      </button>
    </div>
    <!-- site logo -->
    <img
      src="/assets/images/logo.svg"
      alt="razors logo"
      class="sidebar-logo logo" />
    <!-- routes -->
    <ul class="sidebar-links">
      {#each routes as route}
        <li>
          <a
            href={route.url}
            use:link
            on:click={() => {
              globalStore.toggleItem('showSidebar', false);
            }}>
            {route.text}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

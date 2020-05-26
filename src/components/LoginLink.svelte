<script>
  import { link } from 'svelte-routing';
  // stores
  import user from '../stores/user';
  import globalStore from '../stores/globalStore';
  // Logout func
</script>

<style>
  /* your styles go here */
</style>

{#if $user.token}
  <a
    href="/"
    class="logout-btn"
    use:link
    on:click={() => {
      console.log('logout');
      globalStore.toggleItem('showSidebar', false);
    }}>
    logout
  </a>
{:else}
  <a
    href="/login"
    use:link
    on:click={() => globalStore.toggleItem('showSidebar', false)}>
    login
  </a>
{/if}

<script>
  import SmallNavbar from './SmallNavbar.svelte';
  import BigNavbar from './BigNavbar.svelte';
  // global store
  import globalStore from '../../stores/globalStore.js';

  // variables
  let screenWidth;
  // reactive variables
  $: if (screenWidth > 992) {
    globalStore.toggleItem('showSidebar', false);
  }
</script>

<style>
  /* your styles go here */
</style>

<svelte:window bind:innerWidth={screenWidth} />
{#if screenWidth > 992}
  <BigNavbar />
{:else}
  <SmallNavbar />
{/if}

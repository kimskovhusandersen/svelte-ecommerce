<script>
  import { link } from 'svelte-routing';
  import Hero from '../components/Hero.svelte';
  import Featured from '../components/Products/Featured.svelte';

  export let location;
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<h1>Home</h1>
<Hero>
  <a href="/products" class="btn btn-primary btn-hero" use:link>
    Shop now
  </a>
</Hero>
<Featured title="featured products" />

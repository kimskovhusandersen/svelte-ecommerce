<script>
  // router
  import { Router, Route, Link } from 'svelte-routing';
  // pages
  import About from './pages/About.svelte';
  import Checkout from './pages/Checkout.svelte';
  import Home from './pages/Home.svelte';
  import Login from './pages/Login.svelte';
  import Products from './pages/Products.svelte';
  import ProductTemplate from './pages/ProductTemplate.svelte';

  // components
  import Navbar from './components/Navbar/Navbar.svelte';
  import Sidebar from './components/Navbar/Sidebar.svelte';

  // store
  import globalStore from './stores/globalStore.js';
</script>

<style>
  /* your styles go here */
  h1 {
    color: purple;
  }
</style>

<Router>
  <Navbar />
  {#if $globalStore.showSidebar}
    <Sidebar />
  {/if}
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/products" component={Products} />
  <Route path="/products/:id" component={ProductTemplate} />
  <Route path="/login" component={Login} />

</Router>

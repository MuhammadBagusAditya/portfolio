<script lang="ts">
  import "./../app.css";

  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="flex flex-col min-h-screen bg-gray-100">
  <Navbar />

  <main class="flex-1">
    <slot />
  </main>
</div>

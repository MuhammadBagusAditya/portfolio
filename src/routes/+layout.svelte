<script lang="ts">
  import "./../app.css";
  import Icon from "@iconify/svelte";

  import Navbar from "$lib/components/Navbar.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let isScrolled = $state(false);
  let isLoading = $state(true);

  onMount(() => {
    window.addEventListener("scroll", () => {
      isScrolled = window.scrollY > 0;
    });

    isLoading = false;
  });
</script>

<div class="flex flex-col min-h-screen bg-gray-100">
  <Navbar />

  <main class="flex-1">
    {@render children?.()}
  </main>

  {#if isScrolled}
    <a
      href="/"
      class="p-3 rounded-full bg-primary/90 fixed bottom-8 right-8 transition-all"
      transition:fade={{ duration: 200 }}
    >
      <Icon icon="mdi:chevron-up" class="text-primary-foreground text-2xl" />
    </a>
  {/if}

  {#if isLoading}
    <div
      class="w-screen h-screen bg-slate-100 fixed top-0 left-0 z-[100] flex justify-center items-center flex-col"
    >
      <div class="flex items-center gap-3 h-[3rem]">
        <span
          class="rounded-full bg-blue-800 h-[0.75rem] w-[8px] block animate-loading"
        ></span>
        <span
          class="rounded-full bg-blue-800 h-[0.75rem] w-[8px] block animate-loading [animation-delay:100ms]"
        ></span>
        <span
          class="rounded-full bg-blue-800 h-[0.75rem] w-[8px] block animate-loading [animation-delay:300ms]"
        ></span>
        <span
          class="rounded-full bg-blue-800 h-[0.75rem] w-[8px] block animate-loading [animation-delay:500ms]"
        ></span>
      </div>

      <span class="text-lg mt-4 font-semibold"> Tunggu Sebentar... </span>
    </div>
  {/if}
</div>

<script lang="ts">
  import Icon from "@iconify/svelte";
  import { Button } from "$lib/components/ui/button";
  import { contacts } from "$lib/data/data.json";
  import { fade } from "svelte/transition";

  let nameText = "Muhammad Bagus Aditya";
  let name = $state("");

  $effect(() => {
    let intervalId: number = 0;
    intervalId = setInterval(() => {
      if (name.length === nameText.length) {
        clearInterval(intervalId);
        return;
      }

      name = nameText.slice(0, name.length + 1);
    }, 150);
  });
</script>

<section class="bg-white dark:bg-gray-900" id="jumbotron">
  <div
    class="container flex flex-col justify-center items-center py-6 md:py-8 min-h-[60vh]"
  >
    <h1
      class="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white grid grid-cols-[1fr,_max-content] grid-rows-1 gap-2"
    >
      {name}

      {#if name.length !== nameText.length}
        <div
          class="w-[2px] h-full bg-primary/80 hidden md:block"
          transition:fade
        >
          {nameText.slice(name.length - 1, 0)}
        </div>
      {/if}
    </h1>

    <p
      class="text-center mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      Seorang Laravel Dan Node js FullStack Web Developer
    </p>

    <div
      class="flex flex-col md:flex-row gap-3 justify-center items-stretch w-full"
    >
      <Button
        href={contacts.whatsapp}
        size="lg"
        class="bg-emerald-600 hover:bg-emerald-700"
        target="_blank"
        data-aos="fade-right"
      >
        <Icon icon="mdi:whatsapp" class="text-xl mr-1" />
        Hubungi saya
      </Button>

      <Button href="#about" size="lg" data-aos="fade-left">
        Lebih lanjut
        <Icon icon="mdi:arrow-right" class="text-xl ml-1" />
      </Button>
    </div>
  </div>
</section>

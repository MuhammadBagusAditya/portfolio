<script lang="ts">
  import Icon from "@iconify/svelte";
  import { Button } from "$lib/components/ui/button";
</script>

<section class="bg-white dark:bg-gray-900" id="jumbotron">
  <div class="container flex flex-col items-center py-6 md:py-8">
    <h1
      class="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      data-aos="fade-down"
    >
      Muhammad Bagus Aditya
    </h1>

    <p
      class="text-center mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      Seorang fullstack web developer yang dapat bekerja dengan tim maupun
      individu
    </p>

    <div
      class="flex flex-col md:flex-row gap-3 justify-center items-stretch w-full"
    >
      <Button
        href="https://wa.me/895362099777"
        size="lg"
        class="bg-emerald-600 hover:bg-emerald-700"
        target="_blank"
        data-aos="fade-right"
      >
        <Icon icon="mdi:whatsapp" class="text-xl" />
        Hubungi saya
      </Button>

      <Button href="#about" size="lg" data-aos="fade-left">
        Lebih lanjut
        <Icon icon="mdi:arrow-right" class="text-xl" />
      </Button>
    </div>
  </div>
</section>

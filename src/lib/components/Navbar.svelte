<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Collapse from "$lib/components/ui/collapsible";
  import Icon from "@iconify/svelte";
</script>

<nav class="w-full bg-primary sticky top-0 z-10">
  <Collapse.Root>
    <div class="container py-2 flex justify-between items-center">
      <a href="/" class="text-primary-foreground text-lg font-bold">
        Muhammad Bagus Aditya
      </a>

      <div class="hidden md:flex">
        <Button href="#home">Beranda</Button>
        <Button href="#about">Tentang</Button>
        <Button href="#skills">Keahlian</Button>
        <Button href="#projects">Projek</Button>
        <Button href="#contact">Kontak</Button>
      </div>

      <Collapse.Trigger class="block md:hidden">
        <Button>
          <Icon icon="mdi:menu" class="text-xl" />
        </Button>
      </Collapse.Trigger>
    </div>

    <Collapse.Content>
      <div class="flex flex-col">
        <Button href="#home">Beranda</Button>
        <Button href="#about">Tentang</Button>
        <Button href="#skills">Keahlian</Button>
        <Button href="#projects">Projek</Button>
        <Button href="#contact">Kontak</Button>
      </div>
    </Collapse.Content>
  </Collapse.Root>
</nav>

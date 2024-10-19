<script lang="ts">
  import Icon from "@iconify/svelte";
  import { contacts } from "$lib/data/data.json";
</script>

<section class="bg-white dark:bg-gray-900" id="contact">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2
        class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Hubungi saya
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto">
      <a
        href={contacts.whatsapp}
        class="inline-flex flex-col justify-center items-center w-fit mx-auto group"
      >
        <Icon
          icon="mdi:whatsapp"
          class="text-[4rem] sm:text-[6rem] text-emerald-600"
        />
        <span
          class="text-lg text-emerald-800 sm:-translate-y-10 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all"
          >Whatsapp</span
        >
      </a>

      <a
        href={contacts.facebook}
        class="inline-flex flex-col justify-center items-center w-fit mx-auto group"
      >
        <Icon
          icon="mdi:facebook"
          class="text-[4rem] sm:text-[6rem] text-cyan-600"
        />
        <span
          class="text-lg text-cyan-800 sm:-translate-y-10 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all"
          >Facebook</span
        >
      </a>

      <a
        href={contacts.linkedin}
        class="inline-flex flex-col justify-center items-center w-fit mx-auto group"
      >
        <Icon
          icon="mdi:linkedin"
          class="text-[4rem] sm:text-[6rem] text-blue-600"
        />
        <span
          class="text-lg text-blue-800 sm:-translate-y-10 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all"
          >Linkedin</span
        >
      </a>
    </div>
  </div>
</section>

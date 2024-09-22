<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<section class="bg-white dark:bg-gray-900" id="contact">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2
        class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Kontak saya
      </h2>
    </div>

    <div class="flex flex-col gap-3">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <a
          href="https://wa.me/895362099777"
          target="_blank"
          role="button"
          class="bg-emerald-600 hover:bg-emerald-700 text-gray-100 py-2 px-4 rounded-lg inline-flex items-center gap-2 justify-center"
        >
          <Icon icon="mdi:whatsapp" class="text-3xl" />
          Chat on Whatsapp
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-bagus-aditya-213868290/"
          target="_blank"
          role="button"
          class="bg-blue-600 hover:bg-blue-700 text-gray-100 py-2 px-4 rounded-lg inline-flex items-center gap-2 justify-center"
        >
          <Icon icon="mdi:linkedin" class="text-3xl" />
          My Linkedin profile
        </a>

        <a
          href="/"
          target="_blank"
          role="button"
          class="bg-cyan-600 hover:bg-cyan-700 text-gray-100 py-2 px-4 rounded-lg inline-flex items-center gap-2 justify-center"
        >
          <Icon icon="mdi:facebook" class="text-3xl" />
          My Facebook page
        </a>

        <a
          href="/"
          target="_blank"
          role="button"
          class="bg-orange-600 hover:bg-orange-700 text-gray-100 py-2 px-4 rounded-lg inline-flex items-center gap-2 justify-center"
        >
          <Icon icon="mdi:instagram" class="text-3xl" />
          My Instagram
        </a>
      </div>
    </div>
  </div>
</section>

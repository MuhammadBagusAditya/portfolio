<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<section class="bg-gray-100 dark:bg-gray-900" id="projects">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2
        class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Projek saya
      </h2>
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        Daftar projek website dimana saya ikut berkonstribusi
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      <article
        class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex justify-start items-center gap-3 mb-5 text-gray-500">
          <span
            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
          >
            <Icon icon="mdi:xml" class="mr-1 w-3 h-3" />
            Website
          </span>

          <span
            class="bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800"
          >
            <Icon icon="mdi:cancel" class="mr-1 w-3 h-3" />
            Tidak Aktif
          </span>
        </div>
        <h2
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <a href="https://merbabu360.com" target="_blank">Website Merbabu360</a
          >
        </h2>
        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
          Website untuk layanan booking villa dan camping. Dalam pembuatan
          website ini, saya berkonstribusi di bagian backend, dashboard, dan
          pemesanan villa.
        </p>
        <div class="flex justify-between items-center">
          <a
            href="https://merbabu360.com"
            class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
            target="_blank"
          >
            Cek website
            <Icon icon="mdi:arrow-right" class="ml-2 w-4 h-4" />
          </a>
        </div>
      </article>

      <article
        class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-5 text-gray-500">
          <span
            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
          >
            <Icon icon="mdi:xml" class="mr-1 w-3 h-3" />
            Website
          </span>
        </div>
        <h2
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <a href="https://terminaltidar.id" target="_blank"
            >Website Terminal Tidar Magelang</a
          >
        </h2>
        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
          Website layanan publik dari Terminal Tipe A Tidar Magelang. Berisikan
          berita-berita seputar kegiatan di dalam terminal dan data dari PO bus
          di terminal.
        </p>
        <div class="flex justify-between items-center">
          <a
            href="https://terminaltidar.id"
            class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
            target="_blank"
          >
            Cek website
            <Icon icon="mdi:arrow-right" class="ml-2 w-4 h-4" />
          </a>
        </div>
      </article>
    </div>
  </div>
</section>

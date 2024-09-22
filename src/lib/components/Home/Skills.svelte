<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<section class="bg-white dark:bg-gray-900" id="skills">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2
        class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Keahlian saya
      </h2>
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        Daftar keahlian saya yang dapat membantu anda
      </p>
    </div>

    <div
      class="space-y-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 md:space-y-0"
    >
      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <Icon
            icon="mdi:xml"
            class="text-xl md:text-2xl text-primary-600 dark:text-primary-300"
          />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">Web development</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Saya menguasai dasar-dasar web development seperti HTML, CSS, dan
          Javascript. Saya juga dapat menggunakan library js dan Javascript
          Bundler seperti vite dan webpack.
        </p>
      </div>

      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <Icon
            icon="mdi:drawing"
            class="text-xl md:text-2xl text-primary-600 dark:text-primary-300"
          />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">Web design</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Saya dapat mendesain sebuah website menggunakan figma. Dapat bekerja
          sama secara realtime dengan tim design.
        </p>
      </div>

      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <Icon
            icon="mdi:laravel"
            class="text-xl md:text-2xl text-primary-600 dark:text-primary-300"
          />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">Laravel</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Saya menguasai framework php Laravel, mulai dari routing,
          relationships, authentication, authorization, hingga deployment. Saya
          juga dapat menggunakan stack populer seperti TALL dan VILT.
        </p>
      </div>

      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <Icon
            icon="mdi:nodejs"
            class="text-xl md:text-2xl text-primary-600 dark:text-primary-300"
          />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">Node js</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Selain laravel, saya juga mampu menggunakan library node js seperti
          express js untuk membangun REST API.
        </p>
      </div>

      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <Icon
            icon="mdi:api"
            class="text-xl md:text-2xl text-primary-600 dark:text-primary-300"
          />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">Rest API</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Saya dapat membuat sebuah aplikasi berbasis Rest API menggunakan
          Laravel dan express js. Disertai dengan authentication dan
          authorization serta assets handling.
        </p>
      </div>

      <div>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <Icon
            icon="mdi:git"
            class="text-xl md:text-2xl text-primary-600 dark:text-primary-300"
          />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">Git dan Github</h3>
        <p class="text-gray-500 dark:text-gray-400">
          saya mampu menggunakan Git dan Github dengan baik untuk berkolaborasi
          dengan tim.
        </p>
      </div>
    </div>
  </div>
</section>

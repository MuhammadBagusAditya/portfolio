<script lang="ts">
  import { base } from "$app/paths";
  import { about, profileImg } from "$lib/data/data.json";
</script>

<section class="bg-gray-100 dark:bg-gray-900" id="about">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2
        class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Tentang saya
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[300px,_1fr] gap-x-12">
      <div class="flex justify-center">
        <img
          src={base + profileImg}
          alt="my profile"
          class="w-full max-w-[16rem] rounded-lg mb-4"
        />
      </div>

      <p class="lg:text-lg text-gray-700 text-justify">
        {about}
      </p>
    </div>
  </div>
</section>

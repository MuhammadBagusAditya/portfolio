<script lang="ts">
  import { base } from "$app/paths";
  import { about, profileImg } from "$lib/data/data.json";
</script>

<section class="bg-gray-100 dark:bg-gray-900" id="about">
  <div class="container py-6 md:py-8">
    <div class="flex flex-col items-center gap-3 mb-4">
      <h2
        class="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        data-aos="fade-down"
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
          data-aos="flip-up"
        />
      </div>

      <p class="lg:text-lg text-gray-700 text-justify" data-aos="flip-up">
        {about}
      </p>
    </div>
  </div>
</section>

<script lang="ts">
  import Icon from "@iconify/svelte";
  import { skills } from "$lib/data/data.json";
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
      {#each skills as skill}
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <Icon
              icon={skill.icon}
              class="text-xl md:text-2xl text-primary-600 dark:text-primary-300"
            />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {skill.header}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {skill.desc}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<script lang="ts">
  import Icon from "@iconify/svelte";
  import { skills } from "$lib/data/data.json";
  import * as Card from "$lib/components/ui/card";
</script>

<section class="bg-white dark:bg-gray-900" id="skills">
  <div class="container py-6 md:py-8">
    <div class="flex flex-col items-center gap-3 mb-4">
      <h2
        class="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        data-aos="fade-down"
      >
        Keahlian saya
      </h2>

      <p
        class="font-light text-gray-500 sm:text-xl dark:text-gray-400"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Daftar keahlian yang saya pelajari dan kuasai
      </p>
    </div>

    <div
      class="space-y-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 md:space-y-0"
    >
      {#each skills as skill, i}
        <Card.Root data-aos="flip-left" data-aos-delay={i * 100}>
          <Card.Header>
            <div
              class="mb-2 p-3 w-fit rounded-full bg-primary/20 inline-flex justify-center items-center"
            >
              <Icon icon={skill.icon} class="text-xl text-primary" />
            </div>

            <Card.Title>
              {skill.header}
            </Card.Title>
          </Card.Header>

          <Card.Content>
            <p>{skill.desc}</p>
          </Card.Content>
        </Card.Root>
      {/each}
    </div>
  </div>
</section>

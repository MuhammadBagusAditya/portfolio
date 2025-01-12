<script lang="ts">
  import Icon from "@iconify/svelte";
  import data from "$lib/data/data.json";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";

  type Project = (typeof data.projects)[0];
</script>

<section class="bg-gray-100 dark:bg-gray-900" id="projects">
  <div class="container py-6 md:py-8">
    <div class="flex flex-col items-center gap-3 mb-4">
      <h2
        class="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        data-aos="fade-down"
      >
        Projek saya
      </h2>

      <p
        class="font-light text-gray-500 sm:text-xl dark:text-gray-400"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Daftar projek yang pernah saya kerjakan
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      {#snippet card(project: Project, i: number)}
        <Card.Root data-aos="flip-left" data-aos-delay={i * 100}>
          <Card.Header>
            <img
              src={project.imgSrc}
              alt={project.title}
              class="w-full aspect-video rounded-lg mb-3"
            />

            <div
              class="flex justify-start items-center gap-3 mb-6 text-gray-500"
            >
              <span
                class="bg-primary/20 text-primary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
              >
                {#if project.status.type === "website"}
                  <Icon icon="mdi:xml" class="mr-1 w-3 h-3" />
                  Website
                {/if}
              </span>

              {#if project.status.isActive}
                <span
                  class="bg-emerald-100 text-emerald-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-emerald-200 dark:text-emerald-800"
                >
                  <Icon icon="mdi:check" class="mr-1 w-3 h-3" />
                  Aktif
                </span>
              {:else}
                <span
                  class="bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800"
                >
                  <Icon icon="mdi:cancel" class="mr-1 w-3 h-3" />
                  Tidak Aktif
                </span>
              {/if}
            </div>

            <Card.Title class="pt-2">
              {project.title}
            </Card.Title>
          </Card.Header>

          <Card.Content class="pt-2 pb-6">
            <p class="mb-3">{project.desc}</p>
          </Card.Content>
        </Card.Root>
      {/snippet}

      {#each data.projects as project, i}
        {#if project.href !== "#"}
          <a href={project.href}>
            {@render card(project, i)}
          </a>
        {:else}
          <span>
            {@render card(project, i)}
          </span>
        {/if}
      {/each}
    </div>
  </div>
</section>

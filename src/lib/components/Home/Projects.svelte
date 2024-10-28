<script lang="ts">
  import Icon from "@iconify/svelte";
  import data from "$lib/data/data.json";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
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
      {#each data.projects as project, i}
        <Card.Root data-aos="flip-left" data-aos-delay={i * 100}>
          <Card.Header>
            <img
              src={project.imgSrc}
              alt={project.title}
              class="w-full aspect-video rounded-lg mb-3"
            />

            <div
              class="flex justify-start items-center gap-3 mb-5 text-gray-500"
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

            <Card.Title>
              {project.title}
            </Card.Title>
          </Card.Header>

          <Card.Content>
            <p class="mb-3">{project.desc}</p>

            <div class="flex justify-end">
              <Button href={project.href} target="_blank">
                Cek website
                <Icon icon="mdi:arrow-right" class="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card.Content>
        </Card.Root>
        <!-- <article
          class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="flex justify-start items-center gap-3 mb-5 text-gray-500">
            <span
              class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
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
          <h2
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href={project.href} target="_blank" class="capitalize">
              {project.title}
            </a>
          </h2>
          <p
            class="mb-5 font-light text-gray-500 dark:text-gray-400 first-letter:capitalize"
          >
            {project.desc}
          </p>
          <div class="flex justify-between items-center">
            <a
              href={project.href}
              class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
              target="_blank"
            >
              Cek website
              <Icon icon="mdi:arrow-right" class="ml-2 w-4 h-4" />
            </a>
          </div>
        </article> -->
      {/each}
    </div>
  </div>
</section>

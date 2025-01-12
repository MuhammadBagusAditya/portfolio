<script lang="ts">
  import Jumbotron from "$lib/components/Home/Jumbotron.svelte";
  import About from "$lib/components/Home/About.svelte";
  import Skills from "$lib/components/Home/Skills.svelte";
  import Projects from "$lib/components/Home/Projects.svelte";
  import Contact from "$lib/components/Home/Contact.svelte";
  import Footer from "$lib/components/Home/Footer.svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";

  $effect(() => {
    AOS.init({
      once: true,
    });
  });
</script>

<svelte:head>
  <title>My Portfolio - Muhammad Bagus Aditya</title>
</svelte:head>

<div>
  <Jumbotron />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
</div>

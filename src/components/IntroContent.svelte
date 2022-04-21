<script>
  import Icon from "./Icons.svelte";
</script>

<main class="intro-content">
  <p class="intro-content__overline--small">Clean Resilient States Initiative</p>
  <p class="intro-content__overline--regular">by the Energy Security and Climate Change Program</p>
  <h1 class="intro-content__title">U.S. State Actions on Climate, Energy, and Economy</h1>
  <p class="intro-content__introduction">A curated database of state-level activities facilitating emissions reductions, 
    positive economic outcomes, and climate resilience—from the <span>Clean Resilient States Initiative</span>, 
    created by the CSIS Energy Security & Climate Change Program.</p>
  <p class="intro-content__more"><a href="https://www.csis.org/programs/energy-security-and-climate-change-program/projects/clean-resilient-states-initiative" target="_blank"><span><Icon class="icon__info" name="Icon-info" /></span> <span>More on this database</span></a></p>
  <div class="intro-content__graphs">
    <img src="/assets/static/Authorities-graph.svg" alt="Most referenced authorities" >
    <img src="/assets/static/Tags-graph.svg" alt="Top tags" >
  </div>
</main>

<style lang="scss">
  @use "../scss/components/intro-content";
</style>

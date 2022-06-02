<script>
  import SocialShare from './SocialShare.svelte';

</script>
<header class="header">
  <a href="#intro" class="skip-nav-link btn">Skip Navigation</a>
  <div class="header__inner">
    <a href="https://www.csis.org" alt="CSIS website">
      <span class="header__logo"></span>
    </a>
    <SocialShare />
  </div>
</header>

<style lang="scss">
  @use "../scss/layout/header";
  @use "../scss/components/button";
</style>

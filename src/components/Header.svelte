<script>
  import Icon from './Icons.svelte';
  import SocialShare from './SocialShare.svelte';

</script>
<header class="header">
  <a href="https://www.csis.org" alt="CSIS website">
    <!-- <Icon class="site-header__logo" /> -->
    <div class="site-header__logo"></div>
  </a>
  <SocialShare />
</header>

<style lang="scss">
  @use "../scss/components/header";
</style>

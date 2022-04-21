<script>
  import Logo from './Logo.svelte';
  import SocialShare from './SocialShare.svelte';

</script>
<header class="header">
  <div class="header__inner">
    <a href="https://www.csis.org" alt="CSIS website">
      <Logo className="__site-header"/>
    </a>
    <SocialShare />
  </div>
</header>

<style lang="scss">
  @use "../scss/layout/header";
</style>

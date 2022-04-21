<script>
  import Logo from '../components/Logo.svelte';
  const currentYear = new Date().getFullYear()
</script>

<footer class="site-footer container">
  <div class="site-footer__content">
    <div class="site-footer__logo">
      <a href="https://www.csis.org" alt="CSIS website">
        <!-- <Icon class="site-header__logo" /> -->
        <div class="site-header__logo"></div>
        <Logo />
      </a>
    </div>
    <p class="site-footer__copyright">
      All content © {currentYear}. All rights reserved.&nbsp;
        <a href="https://www.csis.org/privacy-policy" alt="Privacy Policy" class="site-footer__privacy-pol">
        Privacy Policy
        </a>
    </p>
  </div>
  <div class="site-footer__desc">
    <p>
      This is a product of the&nbsp;
        <a
        href="https://www.csis.org/programs/dracopoulos-ideas-lab"
        alt="iDeas Lab"
      >
        Andreas C. Dracopoulos iDeas Lab
        </a>
      , the in-house digital, multimedia, and design agency at the Center
      for Strategic and International Studies.
      </p>
  </div>
  <div class="site-footer__contact">
    <a
      class="site-footer__website"
      href="https://www.csis.org"
      alt="CSIS website"
    >
      www.csis.org
      </a>
    <address class="site-footer__address">
      1616 Rhode Island Avenue, NW <br />Washington, DC 20036
      </address>
  </div>
</footer>

<style lang="scss">
  @use "../scss/layout/footer";
</style>
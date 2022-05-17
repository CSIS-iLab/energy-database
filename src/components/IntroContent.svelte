<script>
  import Icon from "./Icons.svelte";
</script>

<div class="wrapper">
  <main class="container intro-content">
    <p class="intro-content__overline--small">Clean Resilient States Initiative</p>
    <p class="intro-content__overline--regular">by the Energy Security and Climate Change Program</p>
    <h1 class="intro-content__title">U.S. State Actions on Climate, Energy, and Economy</h1>
    <p class="intro-content__introduction">A curated database of state-level activities facilitating emissions
      reductions,
      positive economic outcomes, and climate resilience—from the <a class="intro-content__link"
        href="https://www.csis.org/programs/energy-security-and-climate-change-program/projects/clean-resilient-states-initiative"
        target="_blank">Clean Resilient States Initiative</a>,
      created by the CSIS Energy Security & Climate Change Program.</p>
    <p class="intro-content__more"><a class="intro-content__link intro-content__link--more" href="#about"><span
          class="intro-content__more__icon-container">
          <Icon class="icon__info" name="Icon-info" />
        </span><span>More on this database</span></a></p>
  </main>
  <div class="container">
    <div class="intro-content__graphs ">

      <div class="intro-bar">
        <div class="intro-bar__title">Most Referenced Authorities</div>
        <div class="intro-bar__content">
          <div class="intro-bar__column--labels">
            <div><span>State Energy Office</span></div>
            <div><span>Utility Commission</span></div>
            <div><span>Executive Branch</span></div>
          </div>
          <div class="intro-bar__column--bars">
            <div class="bar">
              <span style="width: 25%"></span>14
            </div>
            <div class="bar">
              <span style="width: 18%"></span>10
            </div>
            <div class="bar">
              <span style="width: 18%"></span>10
            </div>

          </div>
        </div>
      </div>

      <div class="intro-bar">
        <div class="intro-bar__title">Top Tags</div>
        <div class="intro-bar__content">
          <div class="intro-bar__column--labels">
            <div><span>Anticipating Climate Impacts</span></div>
            <div><span>Technology or System Standards</span></div>
            <div><span>Energy Storage</span></div>
          </div>
          <div class="intro-bar__column--bars">
            <div class="bar">
              <span style="width: 27%"></span>15
            </div>
            <div class="bar">
              <span style="width: 23%"></span>14
            </div>
            <div class="bar">
              <span style="width: 15%"></span>13
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<style lang="scss">
  @use "../scss/components/intro-content";
</style>
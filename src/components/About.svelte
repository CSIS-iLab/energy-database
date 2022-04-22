<script>
  import Icon from "./Icons.svelte";
</script>
<section class="about" id="about">
  <h2 class="about__subtitle">About</h2>
  <div class="about__description">
    <p>
      This database details a curated selection of activities in the areas of emissions reduction,
      economic development, and climate resilience from 16 diverse and representative states.
      The activities included are derived from research conducted for the Clean Resilient State Initiative
      and are deemed novel, impactful, or otherwise significant by the researchers. 
    </p>
    <p>
      The 16 states highlighted in this database were selected to reflect the diversity in state
      approaches to energy and emissions. Half of the states were selected due to their roles as the top U.S.
      energy consumers (TX, CA, LA, FL, NY, PA, OH, IL), representing each census region of the country
      (Northeast, Midwest, West, and South).  The other half (MA, MN, OR, NM, GA, SD, VA, WY) were selected to
      ensure a diversity of regulatory and political environments for climate and energy issues. For more
      details, see the appendices of the associated reports, below. 
    </p>
  </div>
  <div class="about__reports">
    <p class="about__reports__title">Associated Reports</p>
    <ul>
      <li><a href="https://www.csis.org/analysis/insights-emissions-reduction-among-us-states" target="_blank">Insights on Emissions Reduction among U.S. States <Icon class="icon__report" name="Icon-open-blank"/></a></li>
      <li><a href="https://www.csis.org/analysis/state-strategies-expanding-economic-opportunity-clean-energy" target="_blank">State Strategies for Expanding Economic Opportunity in Clean Energy <Icon class="icon__report" name="Icon-open-blank"/></a></li>
      <li><a href="https://www.csis.org/programs/energy-security-and-climate-change-program/projects/clean-resilient-states-initiative" target="_blank">TBD Third Report <Icon class="icon__report" name="Icon-open-blank"/></a></li>
    </ul>
  </div>
  <div class="about__initiative">
    <p>The <a href="https://www.csis.org/programs/energy-security-and-climate-change-program/projects/clean-resilient-states-initiative" target="_blank">Clean Resilient States Initiative</a> is a project developed by the
      CSIS Energy Security & Climate Change Program to assess the extent to which
      state policies facilitate greenhouse gas emissions reductions, positive economic
      outcomes, and resilience to climate-related impacts. This database and its respective
      papers are meant to provide guidance to policymakers, identify priorities for future
      research, and promote knowledge sharing among key stakeholders.
    </p>
  </div>
</section>

<style lang="scss">
  @use "../scss/components/about";
</style>
<script>
  import Icon from './Icons.svelte';
</script>

<!-- TODO: Get the links from the program to update them -->
<ul class="social">
  <li class="social__item">
    <a href="https://www.facebook.com/sharer.php?u={window.location.href}" class="social__link" target="_blank" aria-label="Visit the State Energy Facebook page">
      <Icon class="icon__social" name="Icon-Facebook" />
    </a>
  </li>
  <li class="social__item">
    <a href="https://twitter.com/CSISEnergy" class="social__link" target="_blank" aria-label="Visit the State Energy Twitter page">
      <Icon class="icon__social" name="Icon-twitter" />
    </a>
  </li>
  <li class="social__item">
    <a href="https://www.linkedin.com/shareArticle?mini=true&url={window.location.href}&source=CSIS" class="social__link" target="_blank" aria-label="Visit the State Energy Linkedin page">
      <Icon class="icon__social" name="Icon-linkedin" />
    </a>
  </li>
  <li class="social__item">
    <a href="https://www.linkedin.com/shareArticle?mini=true&url={window.location.href}&source=CSIS" class="social__link" target="_blank" aria-label="Visit the State Energy Instagram page">
      <Icon class="icon__social" name="Icon-instagram" />
    </a>
  </li>
  <li class="social__item">
    <a href="https://www.youtube.com/channel/UCr5jq6MC_VCe1c5ciIZtk_w" class="social__link" target="_blank" aria-label="Visit the State Energy Youtube page">
      <Icon class="icon__social" name="Icon-youtube" />
    </a>
  </li>
</ul>

<style lang="scss">
  @use "../scss/components/social-share";
</style>

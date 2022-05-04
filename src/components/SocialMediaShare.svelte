<script>
  import Icon from './Icons.svelte';
</script>

<!-- TODO: Get the links from the program to update them -->
<ul class="social">
  <li class="social__item">
    <a href="https://www.facebook.com/sharer.php?u=https://energydatabase.csis.org/" class="social__link" target="_blank">
      <Icon class="icon__social" name="Icon-Facebook" />
    </a>
  </li>
  <li class="social__item">
    <a href="https://twitter.com/intent/tweet?url=https://energydatabase.csis.org/&amp;via=CSIS&amp;related=CSIS" class="social__link" target="_blank">
      <Icon class="icon__social" name="Icon-twitter" />
    </a>
  </li>
  <li class="social__item">
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://energydatabase.csis.org/&source=CSIS" class="social__link" target="_blank">
      <Icon class="icon__social" name="Icon-linkedin" />
    </a>
  </li>
  <li class="social__item">
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://energydatabase.csis.org/&source=CSIS" class="social__link" target="_blank">
      <Icon class="icon__social" name="Icon-instagram" />
    </a>
  </li>
  <li class="social__item">
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://energydatabase.csis.org/&source=CSIS" class="social__link" target="_blank">
      <Icon class="icon__social" name="Icon-youtube" />
    </a>
  </li>
</ul>

<style lang="scss">
  @use "../scss/components/social-share";
</style>

<script>
  import Icon from './Icons.svelte';
</script>

<!-- TODO: Get the links from the program to update them -->
<ul class="social">
  <li class="share__item">
    <a href="https://www.facebook.com/sharer.php?u=https://energydatabase.csis.org/" class="share__link" target="_blank">
      <Icon class="icon__share" name="Icon-Facebook" />
    </a>
  </li>
  <li class="share__item">
    <a href="https://twitter.com/intent/tweet?url=https://energydatabase.csis.org/&amp;via=CSIS&amp;related=CSIS" class="share__link" target="_blank">
      <Icon class="icon__share" name="Icon-twitter" />
    </a>
  </li>
  <li class="share__item">
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://energydatabase.csis.org/&source=CSIS" class="share__link" target="_blank">
      <Icon class="icon__share" name="Icon-linkedin" />
    </a>
  </li>
  <li class="share__item">
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://energydatabase.csis.org/&source=CSIS" class="share__link" target="_blank">
      <Icon class="icon__share" name="Icon-instagram" />
    </a>
  </li>
  <li class="share__item">
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://energydatabase.csis.org/&source=CSIS" class="share__link" target="_blank">
      <Icon class="icon__share" name="Icon-youtube" />
    </a>
  </li>
</ul>

<style lang="scss">
  @use "../scss/components/social-share";
</style>

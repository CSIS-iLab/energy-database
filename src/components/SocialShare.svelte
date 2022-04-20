<script>
  import Icon from './Icons.svelte';

  function copyURL(e) {
    e.preventDefault()
    const url = window.location.href
    //Use the clipboard's writeText method to pass the inputs text to the clipboard
    navigator.clipboard.writeText(url).then(res=>{
        console.log("Input data copied to clipboard successfully");
        console.log(url)
    })
  }
</script>

<ul class="share">
  <li class="share__item">
    <a href="https://www.facebook.com/sharer.php?u=https://energydatabase.csis.org/" class="share__link" target="_blank">
      <Icon class="share__icon" name="Icon-Facebook" />
    </a>
  </li>
  <li class="share__item">
    <a href="https://twitter.com/intent/tweet?url=https://energydatabase.csis.org/&amp;via=CSIS&amp;related=CSIS" class="share__link" target="_blank">
      <Icon class="share__icon" name="Icon-twitter" />
    </a>
  </li>
  <li class="share__item">
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://energydatabase.csis.org/&source=CSIS" class="share__link" target="_blank">
      <Icon class="share__icon" name="Icon-linkedin" />
    </a>
  </li>
  <li class="share__item">
    <a href="mailto:energy@csis.org?subject=Data Governance | CSIS Technology Policy Program" class="share__link">
      <Icon class="share__icon" name="Icon-email" />
    </a>
  </li>
  <li class="share__item">
    <button class="share__link" on:click={copyURL}>
      <Icon class="share__icon" name="Icon-link-chain" />

    </button>
  </li>
</ul>

<style lang="scss">
  @use "../scss/components/social-share";
</style>

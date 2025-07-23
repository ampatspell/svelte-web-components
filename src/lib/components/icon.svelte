<script lang="ts">
  import Fa6SolidCloudBolt from '$lib/icons/fa6-solid--cloud-bolt.svelte';

  let { onClick }: { onClick: () => void } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="icon" style:--size="32px" style:--padding="10px" onclick={onClick}>
  <Fa6SolidCloudBolt />
</div>

<style lang="scss">
  .icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: var(--size);
    height: var(--size);
    border: 1px solid #eee;
    :global(> svg) {
      width: calc(var(--size) - var(--padding));
      height: calc(var(--size) - var(--padding));
    }
  }
</style>

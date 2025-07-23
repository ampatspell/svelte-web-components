<svelte:options customElement="next-hello" />

<script lang="ts">
  import { bridge } from './bridge.svelte';

  let { name }: { name: string } = $props();

  let onclick = () => {
    name = name.split('').reverse().join('');
  };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="hello" {onclick}>
  {name} : {bridge.name}
</div>

<style lang="scss">
  .hello {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(255, 0, 0, 0.1);
  }
</style>

<svelte:options customElement="next-modal" />

<script lang="ts">
  import Icon from '$lib/components/icon.svelte';
  import Modal from '$lib/components/modal.svelte';
  import { bridge } from './bridge.svelte';

  let open = $state(false);
  let onClick = () => (open = !open);
  let onDone = () => (open = false);
</script>

<Icon {onClick} />
{#if open}
  <Modal message={bridge.name} {onDone} />
{/if}

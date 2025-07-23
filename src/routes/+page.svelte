<script lang="ts">
  import Hello from '$lib/published/hello.svelte';
  import Modal from '$lib/published/modal.svelte';
</script>

<div class="page">
  <Hello name="route" />
  <Modal />
</div>

<style lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>

<script lang="ts">
  let { message, onDone }: { message: string; onDone: () => void } = $props();

  let el = $state<HTMLElement>();
  let onclick = (e: MouseEvent) => {
    if (e.target === el) {
      onDone();
    }
  };
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="modal" bind:this={el} {onclick}>
  <div class="content">
    <div class="message">{message}</div>
  </div>
</div>

<style lang="scss">
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > .content {
      width: 50%;
      height: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      box-shadow: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>

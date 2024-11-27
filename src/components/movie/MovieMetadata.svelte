<script lang="ts">
  import Icon from '../ui/Icon.svelte';
  
  export let year: number;
  export let duration?: string;
  export let rating?: number;
</script>

<div class="flex flex-wrap gap-4 text-gray-600">
  <span class="flex items-center">
    <Icon name="calendar" class="mr-1" />
    {year}
  </span>
  
  {#if duration}
    <span class="flex items-center">
      <Icon name="clock" class="mr-1" />
      {duration}
    </span>
  {/if}
  
  {#if rating}
    <span class="text-yellow-500 flex items-center">
      <Icon name="star" class="mr-1" />
      {rating}
    </span>
  {/if}
</div>
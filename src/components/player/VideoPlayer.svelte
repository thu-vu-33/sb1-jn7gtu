<script lang="ts">
  import Button from '../ui/Button.svelte';
  import Icon from '../ui/Icon.svelte';
  
  export let title: string;
  export let videoUrl: string;
  export let onStop: () => void;
</script>

<div class="w-full h-[450px] bg-black relative">
  <div class="absolute inset-0">
    <video
      src={videoUrl}
      controls
      autoplay
      class="w-full h-full object-contain"
    >
      Your browser does not support the video element.
    </video>
  </div>
  
  <div class="absolute top-4 left-4 right-4 flex justify-between items-center z-10 bg-black bg-opacity-50 p-4 rounded">
    <p class="text-white text-xl">Now Playing: {title}</p>
    <Button variant="danger" onClick={onStop}>
      <Icon name="stop" />
      Stop Playing
    </Button>
  </div>
</div>
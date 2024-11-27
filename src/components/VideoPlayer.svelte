<script lang="ts">
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
    <button
      on:click={onStop}
      class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors flex items-center gap-2"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      Stop Playing
    </button>
  </div>
</div>
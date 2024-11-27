<script lang="ts">
  export let message: string;
</script>

<div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
  <div class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
    <div class="flex items-center text-red-600 mb-4">
      <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 class="text-lg font-semibold">Error</h3>
    </div>
    <p class="text-gray-600 mb-6">{message}</p>
    <div class="text-right">
      <button 
        class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        on:click={() => window.location.href = '/'}
      >
        Go Home
      </button>
    </div>
  </div>
</div>
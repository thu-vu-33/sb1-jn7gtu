<script lang="ts">
  export let currentPage: number;
  export let totalPages: number;
  export let onPageChange: (page: number) => void;

  const maxVisiblePages = 5;
  
  $: pages = getPageNumbers(currentPage, totalPages, maxVisiblePages);

  function getPageNumbers(current: number, total: number, maxVisible: number) {
    if (total <= maxVisible) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    let start = Math.max(1, current - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > total) {
      end = total;
      start = Math.max(1, end - maxVisible + 1);
    }

    const numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    if (start > 1) {
      numbers.unshift(1);
      if (start > 2) numbers.splice(1, 0, -1);
    }

    if (end < total) {
      if (end < total - 1) numbers.push(-1);
      numbers.push(total);
    }

    return numbers;
  }
</script>

<div class="flex justify-center items-center gap-2">
  <button
    class="px-3 py-2 rounded {currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}"
    on:click={() => currentPage > 1 && onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  {#each pages as page}
    {#if page === -1}
      <span class="px-3 py-2">...</span>
    {:else}
      <button
        class="px-3 py-2 rounded {currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}"
        on:click={() => onPageChange(page)}
      >
        {page}
      </button>
    {/if}
  {/each}

  <button
    class="px-3 py-2 rounded {currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}"
    on:click={() => currentPage < totalPages && onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>
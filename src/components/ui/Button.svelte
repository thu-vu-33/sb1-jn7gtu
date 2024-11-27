<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'danger' = 'primary';
  export let onClick: () => void;
  
  const baseStyles = "px-4 py-2 rounded transition-colors duration-200 flex items-center gap-2";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
</script>

<button
  class="{baseStyles} {variantStyles[variant]}"
  on:click={onClick}
>
  <slot />
</button>
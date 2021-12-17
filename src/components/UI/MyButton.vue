<template>
  <button class="btn">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style>
    .btn {
        background-color: rgb(165, 248, 227);
        font-size: 1.1rem;
        border-radius: 5px;
        padding: 5px 15px;
        box-shadow: 5px 5px 5px -2px cadetblue;
    }
</style>
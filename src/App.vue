<template>
    <menubar></menubar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Menubar from '@/components/Menubar.vue'
export default {
  components: { Menubar },

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}
</style>
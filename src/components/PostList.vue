<template>
    <div class="flex flex-column">
        <h3 class="align-self-center">Список постов</h3>
        <post-item 
            v-for="post in posts"
            :key="post.id"
            :post="post"/>
    </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
    props: {
        posts: {
            type: Array,
            requared: true
        }
    },
    components: {
        PostItem
    }
}
</script>

<style scoped>

</style>
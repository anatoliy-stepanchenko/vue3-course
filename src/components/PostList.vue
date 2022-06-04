<template>
    <div 
        v-if="posts.length > 0"
        class="flex flex-column">
        <h3 class="align-self-center">Список постов</h3>
        <post-item
            @remove="$emit('remove', post)"
            v-for="post in posts"
            :key="post.id"
            :post="post"/>
    </div>
    <h3 
        v-else 
        style="color: red" 
        class="flex justify-content-center">Список постов пуст!</h3>
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
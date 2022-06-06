<template>
    <div 
        v-if="posts.length > 0"
        class="flex flex-column">
        <h3 class="align-self-center">Список постов</h3>
        <transition-group name="post-list">
            <post-item
                @remove="$emit('remove', post)"
                v-for="post in posts"
                :key="post.id"
                :post="post"/>
        </transition-group>
    </div>
    <h3 
        v-else 
        style="color: red" 
        class="flex justify-content-center">Список постов пуст!</h3>
</template>

<script>
import PostItem from './PostItem.vue';

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
    .post-list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .post-list-enter-active,
    .post-list-leave-active {
        transition: all .4s ease;
    }

    .post-list-enter-from,
    .post-list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }

    .post-list-move {
        transition: transform 0.5s ease;
    }
</style>
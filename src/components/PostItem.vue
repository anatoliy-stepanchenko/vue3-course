<template>
    <div class="posts">
        <div><p>Название: <strong>{{ post.title }}</strong></p></div>
        <div><p>Описание: <strong>{{ post.body }}</strong></p></div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>
    
<style>
    .posts {
        border: 2px darkcyan solid;
        margin-bottom: 15px;
        padding: 5px 15px;
    }
</style>
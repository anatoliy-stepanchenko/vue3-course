<template>
    <div class="posts">
        <div>
            <div><p>Название: <strong>{{ post.title }}</strong></p></div>
            <div><p>Описание: <strong>{{ post.body }}</strong></p></div> 
        </div>
        <div class="post__buttons">
            <my-button 
                class="btn__delete"
                @click="$emit('remove', post)">Удалить
            </my-button>
        </div>

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
    
<style scoped>
    .posts {
        border: 2px darkcyan solid;
        margin-bottom: 15px;
        padding: 5px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .btn__delete {
       background-color: rgb(243, 101, 76);
       box-shadow: 5px 5px 5px -2px rgb(179, 82, 65);
       color: azure;
    }
</style>
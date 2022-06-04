<template>
    <div class="post_item">
        <div>
            <div><strong>Название: </strong>{{post.title}}</div>
            <div><strong>Описание: </strong>{{post.body}}</div>
        </div>

        <div class="flex align-items-center">
            <Button 
                @click="$emit('remove', post)"
                label="Удалить" 
                class="p-button-danger p-button-raised p-button-rounded p-button-sm ml-1"
            />
        </div>
    </div>
  
</template>

<script>
import Panel from 'primevue/panel';
import Button from 'primevue/button';

export default {
    components: {
        Panel,
        Button
    },
    props: {
        post: {
            type: Object,
            requared: true
        }
    }
}
</script>

<style scoped>
    .post_item {
        display: flex;
        margin-top: 10px;
        padding: 10px;
        border: solid CadetBlue 2px;
        border-radius: 5px;
        justify-content: space-between;
    }
</style>
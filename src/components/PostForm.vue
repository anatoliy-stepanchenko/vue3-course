<template>
    <form 
        @submit.prevent
        class="flex flex-column">

        <h3 class="align-self-center">Создание поста</h3>
        <InputText
            v-model="post.title"
            class="mb-3"
            style="width: 100%"
            type="text" 
            placeholder="Название" />
        <InputText 
            v-model="post.body"
            class="mb-3"
            style="width: 100%"
            type="text" 
            placeholder="Описание" />
        <Button 
            @click="createPost"
            class="align-self-end" 
            label="Создать пост" />
    </form>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

export default {
    components: {
        Button,
        InputText
    },
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style>

</style>
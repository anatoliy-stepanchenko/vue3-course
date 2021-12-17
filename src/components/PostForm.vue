<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <my-input 
            v-model="post.title"
            type="text" 
            placeholder="Название" />
        <my-input 
            v-model="post.body" 
            type="text" 
            placeholder="Описание" />
        <my-button 
            @click="createPost" 
            class="btn_for_form">Создать
        </my-button>
    </form>
</template>

<script>
export default {
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
      };
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }

  h4 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 10px;
    color: tomato;
  }

  .btn_for_form {
    align-self: flex-end;
  }
</style>
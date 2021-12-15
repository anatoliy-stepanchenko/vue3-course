<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <input 
            v-model="post.title"
            class="input" 
            type="text" placeholder="Название">
        <input 
            v-model="post.body" 
            class="input" 
            type="text" placeholder="Описание">
        <button @click="createPost" class="btn">Создать</button>
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

  .input {
    margin-bottom: 15px;
    padding: 10px 15px;
    border: 2px solid springgreen ;
  }

  h4 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 10px;
    color: tomato;
  }
</style>
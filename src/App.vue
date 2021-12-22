<template>

  <div class="app">
    <h1>Страница с постами</h1>
     <my-button
      @click="showDialog">
      Создать пост
    </my-button>

    <my-dialog v-model:show='dialogVisible'>
      <post-form 
      @create='createPost'/>
    </my-dialog>
    
    <post-list 
      :posts='posts'
      @remove='removePost'
      v-if="!isPostsLoading"/>
    <h3 v-else>Идет загрузка...</h3>
  </div>
  
</template>


<script>

  import PostList from "@/components/PostList";
  import PostForm from "@/components/PostForm";
  import MyButton from '@/components/UI/MyButton.vue';
  import axios from 'axios'
  
  export default {

    components: {
      PostList, PostForm, MyButton
    },

    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostsLoading: false
      }
    },

    methods: {
      createPost(post) {
        if (post.title !== '') {
          this.posts.push(post);
          this.dialogVisible = false;
        }  
      },  

      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id);
      },

      showDialog() {
        this.dialogVisible = true;
      },

      async fetchPosts() {
        try {
          this.isPostsLoading = true;
          setTimeout(async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            this.posts = response.data;
            this.isPostsLoading = false;
          }, 1000);

        } catch (error) {
          alert('Error!!!');
        } 
      }
    },

    mounted() {
        this.fetchPosts();
      }
  }

</script>

<style>

  * {
    margin: 0;
    padding: 0;
  }

  .app {
    padding: 20px;
  }

  h1 {
    margin-bottom: 15px;
  }

  h3 {
        text-align: center;
        margin: 20px 0 10px;
    }

</style>
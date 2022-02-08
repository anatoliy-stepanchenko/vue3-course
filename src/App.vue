<template>

  <div class="app">
    <h1>Страница с постами</h1>
    <my-input 
      v-model="searchQuery"
      placeholder="Поиск..."/>
    <div class="app__btns">
      <my-button
        @click="showDialog">
        Создать пост
      </my-button>
      <my-select 
        v-model="selectedSort"
        :options="sortOptions" />
    </div>


    <my-dialog v-model:show='dialogVisible'>
      <post-form 
      @create='createPost'/>
    </my-dialog>
    
    <post-list 
      :posts='sortedAndSerchedPosts'
      @remove='removePost'
      v-if="!isPostsLoading"/>
    <h3 v-else>Идет загрузка...</h3>
  </div>
  
</template>


<script>

  import PostList from "@/components/PostList";
  import PostForm from "@/components/PostForm";
  import MyButton from '@/components/UI/MyButton.vue';
  import MySelect from '@/components/UI/MySelect.vue';
  import axios from 'axios'
  
  export default {

    components: {
      PostList, PostForm, MyButton, MySelect
    },

    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'},
        ]
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
          }, 600);

        } catch (error) {
          alert('Error!!!');
        } 
      }
    },

    mounted() {
        this.fetchPosts();
    },

    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) => {
          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        })
      },
      sortedAndSerchedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },

    watch: {

    }
  }

</script>

<style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    padding: 20px;
  }

  .app__btns {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    margin-bottom: 15px;
  }

  h3 {
        text-align: center;
        margin: 20px 0 10px;
    }

</style>
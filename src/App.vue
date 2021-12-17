<template>

  <div class="app">
    <post-form 
      @create='createPost'/>
    <post-list 
      :posts='posts'
      @remove='removePost'/>
  </div>
  
</template>


<script>
  import PostList from "@/components/PostList";
  import PostForm from "@/components/PostForm";
  
  export default {

    components: {
      PostList, PostForm
    },

    data() {
      return {
        posts: [
          {id: 1, title: 'JS', body: 'discription'},
          {id: 2, title: 'JS 2', body: 'discription 2'},
          {id: 3, title: 'JS 3', body: 'discription 3'},
        ]
      }
    },

    methods: {
      createPost(post) {
        if (post.title !== '') {
          this.posts.push(post);
        }  
      },  

      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id);
      }
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

  p {
    color: rgb(2, 39, 28);
  }

  strong {
    font-size: 1.3rem;
    color: rgb(0, 88, 88);
  }


</style>

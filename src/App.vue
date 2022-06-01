<template>
  <h1>Hello!</h1>
  <br>
  <div>
      <Button 
        @click="addLike"
        label="Like" 
        class="p-button-success p-button-raised p-button-rounded p-button-sm mr-3" />
      <Button 
        @click="addDislike"
        label="Dislike" 
        class="p-button-danger p-button-raised p-button-rounded p-button-sm" />
  </div>
  <div>
      <h3>Кол-во лайков: {{likes}} </h3>
  </div>

  <hr>
  <br>

  <post-form @create="createPost"/>

  <post-list :posts="posts" />

</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import Button from 'primevue/button';


export default {
    data() {
        return {
            likes: 5,
            posts: [
                {id: 1, title: 'JavaScript', body: 'Discription'},
                {id: 2, title: 'JavaScript 2', body: 'Discription 2'},
                {id: 3, title: 'JavaScript 3', body: 'Discription 3'},
                {id: 4, title: 'JavaScript 4', body: 'Discription 4'},
            ],
        }
    },
    methods: {
        addLike() {
            this.likes += 1;
        },
        addDislike() {
            this.likes -= 1;
        },
        createPost(post) {
            if (post.title !== '') {
                this.posts.push(post);
            }
        }
    },
    components: {
        PostForm,
        PostList,
        Button,
    }
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>
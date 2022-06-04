<template>
  <div class="app">
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

    <h2>Страница с постами</h2>
    <div class="app__btns">
        <Button class="mt-2" @click="showModal">Создать пост</Button>
        <my-select/>
    </div>


    <my-modal v-model:isShow="modalVisible"> 
        <post-form @create="createPost"/>
    </my-modal>

    <post-list 
        @remove="removePost"
        :posts="posts" 
        v-if="!isPostLoading"/>
    <div v-else><ProgressSpinner class="flex justify-content-center" /></div>
  </div>

</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
// import MyModal from './components/UI/MyModal.vue';
import axios from 'axios'


export default {
    data() {
        return {
            likes: 5,
            posts: [],
            modalVisible: false,
            isPostLoading: false
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
                this.modalVisible = false
            }
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showModal() {
            this.modalVisible = true;
        },
        async fetchPost() {
            try {
                this.isPostLoading = true;
                setTimeout(async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.posts = response.data;  
                    this.isPostLoading = false;
                }, 1000);

            } catch (error) {
                alert(error);
            }
        }
    },
    components: {
        PostForm,
        PostList,
        Button,
        ProgressSpinner
    }, 
    mounted() {
        this.fetchPost();
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

</style>
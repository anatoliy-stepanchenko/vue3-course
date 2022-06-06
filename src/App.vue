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
        <h3 class="mt-3">Кол-во лайков: {{likes}} </h3>
    </div>

    <hr>
    <br>

    <h2>Страница с постами</h2>
    
    <span class="p-input-icon-left mt-3" style="width: 100%">
        <i class="pi pi-search" />
        <InputText 
            style="width: 100%"
            type="text" 
            v-model="searchQuery" 
            placeholder="Поиск..." />
    </span>

    <div class="flex justify-content-between mt-3">
        <Button class="" @click="showModal">Создать пост</Button>
        <my-select 
            v-model="selectedSort"
            :options="sortOptions"/>
    </div>


    <my-modal v-model:isShow="modalVisible"> 
        <post-form @create="createPost"/>
    </my-modal>

    <post-list 
        @remove="removePost"
        :posts="sortedAndSearchedPost" 
        v-if="!isPostLoading"/>
    <div v-else><ProgressSpinner class="flex justify-content-center" /></div>
  </div>

</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
import InputText from 'primevue/inputtext';
// import MyModal from './components/UI/MyModal.vue';
import axios from 'axios'


export default {
    data() {
        return {
            likes: 5,
            posts: [],
            modalVisible: false,
            isPostLoading: false,
            selectedSort: '',
            searchQuery: '',
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ]
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
        ProgressSpinner,
        InputText
    }, 
    mounted() {
        this.fetchPost();
    },
    watch: {
        
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            });
        },
        sortedAndSearchedPost() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
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

</style>
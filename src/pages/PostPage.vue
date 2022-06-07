<template>
  <div>

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

    <div class="flex justify-content-center mt-3">
        <div 
            v-for="pageNumber in totalPage" 
            :key="pageNumber"
            @click="changePage(pageNumber)"
            class="page"
            :class="{
                'current__page': page === pageNumber
            }"
            >{{pageNumber}}</div>
    </div>
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
            posts: [],
            modalVisible: false,
            isPostLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPage: 0,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ]
        }
    },
    methods: {
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
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPage = Math.ceil(response.headers['x-total-count']/this.limit);
                    this.posts = response.data;  
                    this.isPostLoading = false;
                }, 500);

            } catch (error) {
                alert(error);
            }
        },
        changePage(pageNumber) {
            this.page = pageNumber;
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
        page() {
            this.fetchPost();
        }
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



.page {
    border: solid black 1px;
    padding: 15px;
    margin: 1px;
}

.current__page {
    border: solid lightseagreen 2px;
}

</style>
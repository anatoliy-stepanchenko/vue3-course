import Main from "@/pages/Main";
import PostPage from '@/pages/PostPage';
import LikeCounter from '@/pages/LikeCounter';
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/likes',
        component: LikeCounter
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
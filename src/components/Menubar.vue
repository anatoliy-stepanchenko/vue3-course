<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <Button @click="$router.push('/posts')">Посты</Button>
      <Button @click="$router.push('/likes')" class="ml-4">Лайки</Button>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  components: {
    Button
  },
  data() {
    return {
      items: [
        {
          label:'Posts',
          icon:'pi pi-fw pi-list',
        },
        {
          label:'Likes',
          icon:'pi pi-fw pi-heart',
        },
      ]
    }
  },
}
</script>

<style>
 .navbar{
   display: flex;
   height: 50px;
   background-color: #aaa;
   align-items: center;
   justify-content: space-between;
   padding: 5px 20px;
 }
</style>
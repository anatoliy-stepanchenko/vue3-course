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
</template>

<script>
import Button from 'primevue/button';
export default {
    data() {
        return {
            likes: 5,
        }
    },
    methods: {
        addLike() {
            this.likes += 1;
        },
        addDislike() {
            this.likes -= 1;
        }
    },
    components: {
        Button
    }
}
</script>

<style>

</style>
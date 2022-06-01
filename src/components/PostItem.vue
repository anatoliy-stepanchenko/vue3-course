<template>
    <Panel
        :header="post.title" 
        class="mt-3 border blue-100"
        >
        {{post.body}}
    </Panel>
</template>

<script>
import Panel from 'primevue/panel';

export default {
    components: {
        Panel
    },
    props: {
        post: {
            type: Object,
            requared: true
        }
    }
}
</script>

<style scoped>
    .border {
        border: solid CadetBlue 2px;
        border-radius: 5px;
    }
</style>
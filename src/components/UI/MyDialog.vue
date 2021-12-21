<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false);
        }
    }
}

</script>

<style scoped>
    .dialog {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: fixed;
        background: rgba(0, 0, 0, .5);
        display: flex;
    }

        .dialog__content {
            margin: auto;
            background: #fff;
            border-radius: 10px;
            min-width: 400px;
            min-height: 100px;
            padding: 20px;
        }
</style>
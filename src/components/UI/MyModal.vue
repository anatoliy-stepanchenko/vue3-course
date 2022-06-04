<template>
    <div class="dialog" v-if="isShow" @click="hideModal">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-modal',
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideModal() {
            this.$emit('update:isShow', false);
        }
    }
}
</script>

<style scopod>
    .dialog {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, .5);
        position: fixed;
        display: flex;
    }

    .dialog__content {
        margin: auto;
        padding: 20px;
        background: white;
        border-radius: 15px;
        min-width: 500px;
        min-height: 200px;
    }

</style>
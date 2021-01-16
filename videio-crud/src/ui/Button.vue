<template>
    <button :type="typeButton" @[event]="callback" :class="classTypeButton">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:'Button',
    props: {
        typeButton: {
            type: String,
            default: "button",
        },
        type: {
            type: String,
        },
        event: {
            type: String,
            default: "click"
        },
        callback: {
            type: Function,
            default: () => {},
        },
    },
    computed: {
        classTypeButton() {
            return this.type == "primary" ? "btn btn-primary" : "btn btn-secondary";
        }
    }
};
</script>
<style lang="scss">
</style>
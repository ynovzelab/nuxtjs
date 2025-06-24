<template>
    <div class="wrapper" :class="{ reverse: props.reverse }">
        <div class="left__part">
            <img :src="`http://localhost:1337${image.url}`" alt="Image" />
        </div>
        <div class="right_part">
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        reverse: {
            type: Boolean,
            default: false
        },
        image: {
            type: Object,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    });
</script>

<style>
.wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.wrapper.reverse {
    flex-direction: row-reverse;
}
.left__part, right__part {
    width: 50%;
    padding: 20px;
}
.left__part img {
    max-width: 100%;
    height: auto;
}
</style>
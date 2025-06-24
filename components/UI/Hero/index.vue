<template>
    <div class="wrapper">
            <h2>{{ props.title }}</h2>
            <img :src="`http://localhost:1337${props.image.url}`" alt="Hero Image" />
    </div>
</template>
<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        image: {
            type: Object,
            required: true
        }
    });
</script>
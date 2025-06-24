<template>
    <div class="page-builder">
        <div v-for="(component, index) in props.builder" :key="index">
            <div v-if="component.__typename === 'ComponentUiTextAlignedWithImage'">
                <p>{{ component.__typename }}</p>
               <TextAlignedWithImage
                    :reverse="component.reverse"
                    :image="component.image"
                    :description="component.description"
                />
            </div>
            <div v-else-if="component.__typename === 'ComponentUiHero'">
                <p>{{ component.__typename }}</p>
                <Hero
                    :title="component.title"
                    :image="component.image"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import TextAlignedWithImage from '~/components/UI/TextAlignedWithImage';
import Hero from '~/components/UI/Hero';
    const props = defineProps({
        builder: {
            type: Array,
            required: true
        }
    });
    console.log("PageBuilder component loaded", props.builder);
</script>
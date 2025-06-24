<template>
    <div v-if="data && data.data && data.data.pages && data.data.pages.length">
      <PageBuilder :builder="data.data.pages[0].pageBuilder" />
    </div>
  </template>
  
  <script setup>
    import PageBuilder from '~/components/PageBuilder'; 
    import { GET_PAGE_BY_SLUG } from "~/graphql/queries";
    import { useRoute } from "vue-router";

    const route = useRoute();
    const slug = route.params.slug;

const { data, pending, error } = await useFetch("http://localhost:1337/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: {
    query: GET_PAGE_BY_SLUG,
    variables: {
      filters: {
        slug: { eq: slug }
      }
    }
  }
});

useHead({
  meta: [
        { name: 'title', content: data.value?.data?.pages[0]?.metadata?.metatitle || 'Default Title' },
        { name: 'description', content: data.value?.data?.pages[0]?.metadata?.metadescription || 'Default Description' },
  ],
})
</script>

  
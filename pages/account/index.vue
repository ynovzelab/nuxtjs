<template>
    <div class="account">
        <h1>Account</h1>
    </div>
</template>

<script setup>

    definePageMeta({
        middleware: 'auth'
    });

</script>
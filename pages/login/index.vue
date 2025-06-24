<template>
    <form @submit.prevent="submitLogin">
        <div class="form__group">
            <label for="email">Email</label>
            <input 
                v-model="email"
                type="email" 
                id="email" 
                name="email" required 
                />
        </div>
        <div class="form__group">
            <label for="password">Password</label>
            <input 
            v-model="password"
            type="password" 
            id="password" 
            name="password" 
            required />
        </div>
        <button type="submit">Login</button>
    </form>
</template>

<script setup>
import { useAuth } from '~/composables/useAuth';
import { ref } from 'vue';
const email = ref('');
const password = ref('');

const { login } = useAuth();

const submitLogin = () => {
    login(email.value, password.value);
    const result = login(email.value, password.value);
    console.log(result);
}

</script>
<script setup lang="ts">
import { ref } from 'vue';
  import axios from 'axios';

  interface UserData {
    email: string;
    password: string;
  }
  // Reactive form data
  const email = ref<string>('email');
  const password = ref<string>('password');

// Function to handle signup
const signup = async () => {
  try
  {
    var data: UserData = {
      email: email.value,
      password: password.value
    };

    // Send API request
    const response = await axios.post('http://localhost:3000/api/auth/signup', data);
    console.log('Signup success:', response.data);
  }catch {
    console.log('Signup failed');
  }
}
</script>

<template>
  <h3>Sign up</h3>

  <form class="max-w-sm mx-auto" name="signup">

    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
      <input type="email" id="email" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@flowbite.com" required />
    </div>

    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
      <input type="password" id="password" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
    </div>

    <div class="flex items-start mb-5">
      <div class="flex items-center h-5">
        <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
      </div>
      <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500">terms and conditions</a></label>
    </div>
    <button onclick="signup" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
  </form>

</template>

<style scoped>

</style>
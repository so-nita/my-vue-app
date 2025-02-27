<script setup lang="ts">
import { ref } from "vue";

const confirmPassword = ref("");
const showConfirmPassword = ref(false);

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};
</script>

<template>
  <div class="relative">
    <input
      v-model="confirmPassword"
      :type="showConfirmPassword ? 'text' : 'password'"
      class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      placeholder="Re-enter your password"
      required
    />
    <!-- Eye Button -->
    <button
      type="button"
      @click="toggleConfirmPasswordVisibility"
      class="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
    >
      <svg
        v-if="showConfirmPassword"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.98 8.98a10.752 10.752 0 0116.04 0m-1.41 1.41a7.5 7.5 0 00-13.22 0m2.83 2.83a4.5 4.5 0 016.36 0M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3C7.454 3 3.623 6.034 2 10.375m0 0a10.958 10.958 0 0020 0m-20 0a10.959 10.959 0 0020 0m-10 3a3 3 0 100-6 3 3 0 000 6z"
        />
      </svg>
    </button>
  </div>
</template>

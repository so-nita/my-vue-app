<script setup lang="ts">
  import { ref } from 'vue';

  // define user data interface
  interface UserData {
    username: string;
    password: string;
  }

  const isShowAlertMessage = ref(false);
  const alertMessage = ref('');

  const username = ref('');
  const password = ref('');
  const confirmPassword = ref('');

  const confirmPasswordValid = ref(false);
  const passwordValid = ref(false);


  const validatePassword = () => {
    const hasLength = password.value.length >= 5 && password.value.length <= 18;
    const hasLetter = /[a-zA-Z]/.test(password.value);
    const hasNumber = /\d/.test(password.value);
    passwordValid.value = hasLength && hasLetter && hasNumber;
    confirmPasswordValid.value = password.value === confirmPassword.value;
  };

  const signin = async () => {
    try{
      isShowAlertMessage.value = true;
      alertMessage.value = 'Signin success';
    }catch (error) {
      console.error('Signin failed:', error);
      isShowAlertMessage.value = true;
    }
  }

</script>

<template>
  <section class="flex h-screen">
    <!-- Left Section: Illustration -->
    <div class="hidden md:flex flex-col justify-center items-center w-1/2 bg-gray-100 p-10">
      <img src="../../assets/aba_qr_api.webp" alt="Illustration" class="w-80 mb-6">
      <h2 class="text-3xl font-bold text-gray-800">Become an <span class="text-blue-600">ABA Merchant</span></h2>
      <p class="text-gray-600 text-center mt-2">Start accepting cashless payments online & in-store and boost your sales.</p>
    </div>

    <!-- Right Section: Form -->
    <div class="flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-16">
      <div class="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 class="text-2xl font-semibold text-gray-800 mb-6">Setup your credential</h1>

        <form class="space-y-4" @click.prevent="signin()">
          <!-- Username -->
          <div>
            <label class="block text-gray-700 font-medium mb-1">Username <span class="text-red-600">*</span></label>
            <input
              v-model="username"
              type="text"
              class="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              v-text="username"
              required
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-gray-700 font-medium mb-1">Password <span class="text-red-600">*</span></label>
            <input
              v-model="password"
              @input="validatePassword"
              type="password"
              class="w-full p-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"

              required
            />
            <ul class="text-sm mt-1">
              <li :class="password.length >= 5 && password.length <= 18 ? 'text-green-500' : 'text-gray-400'">✔ Must have 5-18 characters</li>
              <li :class="/[a-zA-Z]/.test(password) && /\d/.test(password) ? 'text-green-500' : 'text-gray-400'">✔ Must have at least 1 number & 1 letter</li>
              <li class="text-green-500">✔ Must not have spaces</li>
            </ul>
          </div>

          <!-- Confirm Password -->
          <div>
            <label class="block text-gray-700 font-medium mb-1">Confirm Password <span class="text-red-600">*</span></label>
            <input
              v-model="confirmPassword"
              @input="validatePassword"
              type="password"
              class="w-full p-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Re-enter your password"
              required
            />
            <p v-if="confirmPassword && !confirmPasswordValid" class="text-red-500 text-sm mt-1">Passwords do not match</p>
          </div>

          <!-- Next Button -->
          <button
            @click="signin()"
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  </section>

<!-- Alert message on error -->
<!--    <section class="bg-gray-2 py-[60px] dark:bg-dark hidden" >-->
  <section class="bg-gray-2 py-[60px] dark:bg-dark " :class="{ hidden: !isShowAlertMessage }" >
    <div class="mx-auto px-4 sm:container">
        <div class="flex justify-end">
          <div
            class="relative flex w-full max-w-[460px] items-center rounded-lg border border-primary bg-primary/5 px-5 py-[18px]"
          >
          <span
            class="mr-4 flex h-[30px] w-full max-w-[30px] items-center justify-center rounded-full bg-primary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.15 3.34999C14.925 3.12499 14.575 3.12499 14.35 3.34999L5.85 11.6L1.65 7.47499C1.425 7.24999 1.075 7.27499 0.850003 7.47499C0.625003 7.69999 0.650003 8.04999 0.850003 8.27499L5.275 12.575C5.425 12.725 5.625 12.8 5.85 12.8C6.075 12.8 6.25 12.725 6.425 12.575L15.15 4.09999C15.375 3.92499 15.375 3.57499 15.15 3.34999Z"
                fill="white"
              />
            </svg>
          </span>
<!--            <p class="text-base font-semibold text-primary sm:text-lg">Message sent successfully</p>-->
            <p class="text-base font-semibold text-primary sm:text-lg" > {{alertMessage}} </p>

            <button
              class="absolute right-5 top-1/2 -translate-y-1/2 text-dark-5 hover:text-primary dark:text-dark-6"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current"
              >
                <g clip-path="url(#clip0_1088_26057)">
                  <path
                    d="M8.79999 7.99999L14.9 1.89999C15.125 1.67499 15.125 1.32499 14.9 1.09999C14.675 0.874994 14.325 0.874994 14.1 1.09999L7.99999 7.19999L1.89999 1.09999C1.67499 0.874994 1.32499 0.874994 1.09999 1.09999C0.874994 1.32499 0.874994 1.67499 1.09999 1.89999L7.19999 7.99999L1.09999 14.1C0.874994 14.325 0.874994 14.675 1.09999 14.9C1.19999 15 1.34999 15.075 1.49999 15.075C1.64999 15.075 1.79999 15.025 1.89999 14.9L7.99999 8.79999L14.1 14.9C14.2 15 14.35 15.075 14.5 15.075C14.65 15.075 14.8 15.025 14.9 14.9C15.125 14.675 15.125 14.325 14.9 14.1L8.79999 7.99999Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1088_26057">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

  <!-- End Alter message -->
</template>



<style scoped>

</style>
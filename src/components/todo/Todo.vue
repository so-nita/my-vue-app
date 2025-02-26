<template>
  <div class=" overflow-x-auto w-full " >
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th>User ID</th>
        <th>ID</th>
        <th>Title</th>
        <th>Completed</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="todo in todos" :key="todo.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <td class="w-20">{{ todo.userId }}</td>
        <td class="w-20">{{ todo.id }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.completed ? 'Yes' : 'No' }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default defineComponent({
  setup() {
    const todos = ref<Todo[]>([]);

    onMounted(async () => {
      try {
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
        todos.value = response.data;
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    });

    return {
      todos,
    };
  },
});
</script>
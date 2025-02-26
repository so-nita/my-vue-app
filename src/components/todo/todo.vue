<script setup lang="ts">
  import { ref } from 'vue';

  const tasks = ref(["Write my posts", "Go for a walk", "Meet my friends", "Buy fruit"]);
  const newItemText = ref("");

  function addNewItem() {
    return tasks.value.push(newItemText.value);
  }


</script>

<template>
  <h3> My To Do List </h3>
  <div>
    <input v-model="newItemText" v-on:keyup.enter="addNewTodo" />
    <button v-on:click="addNewTodo">Add</button>
    <button v-on:click="removeTodo">Remove</button>
    <button v-on:click="removeAllTodos">Remove All</button>
    <transition-group name="list" tag="ul">
      <li v-for="task in tasks" v-bind:key="task" >{{ task }}</li>
    </transition-group>
  </div>
</template>

<style scoped>

</style>
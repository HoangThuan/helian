<template>
    <div class="toggle-switch">
      <input
        type="checkbox"
        id="switch"
        v-model="isToggled"
      />
      <label for="switch" class="toggle-label"></label>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const isToggled = ref(false);
  
      return { isToggled };
    }
  };
  </script>
  
  <style scoped>
  .toggle-switch {
    position: relative;
  }
  
  .toggle-label {
    display: block;
    width: 52px;
    height: 20px;
    background-color: #ccc;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .toggle-label:after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    top: 1px;
    left: 1px;
    background-color: white;
    border-radius: 50%;
    transition: left 0.3s;
  }
  
  input[type="checkbox"] {
    visibility: hidden;
    display: none;
  }
  
  input[type="checkbox"]:checked + .toggle-label {
    background-color: #4caf50;
  }
  
  input[type="checkbox"]:checked + .toggle-label:after {
    left: 32px;
  }
  </style>
  
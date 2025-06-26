<template>
    <div class="go-home-container">
      <a href="/" class="go-home-button">Home</a>
    </div>
  </template>
  
  <script setup>
  // No script logic is needed for a simple link, but the block is required by Vue.
  </script>
  
  <style scoped>
  .go-home-container {
    margin-top: 30px; /* Adds some space above the button */
    text-align: left; /* Centers the button */
  }
  
  .go-home-button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: var(--vp-c-brand-1);
    color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none; /* Removes underline for link */
    transition: background-color 0.3s ease; /* Smooth hover effect */
  }
  
  .go-home-button:hover {
    background-color: var(--vp-c-brand-1-darker);
    color: #000;
  }
  </style>
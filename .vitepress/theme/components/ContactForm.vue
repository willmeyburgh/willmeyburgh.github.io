<template>
  <form action="https://formsubmit.co/annekinmeyburgh@gmail.com" method="POST" class="contact-form">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" v-model="form.name" required>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" v-model="form.email" required>
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name = "message" v-model="form.message" rows="5" required></textarea>
    </div>
    <input type="hidden" name="_captcha" value="false">
    <input type="text" name="_honey" style="display:none">
    <input type="hidden" name="_next" value="awmeyburgh.github.io/thanks.html">
    <button type="submit" class="submit-button">Send Message</button>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const successMessage = ref('');
const errorMessage = ref('');

const handleSubmit = async () => {
  successMessage.value = '';
  errorMessage.value = '';

  // In a real application, you would send this data to a backend server.
  // For this example, we'll just simulate a successful submission.
  console.log('Form submitted:', form.value);

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    successMessage.value = 'Your message has been sent successfully!';
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
  } catch (error) {
    errorMessage.value = 'There was an error sending your message. Please try again later.';
  }
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 2rem 0;
  padding: 20px;
  border: 1px solid var(--vp-c-brand-1-darker);
  border-radius: 8px;
  
  background-color: rgba(0, 0, 0, 0.5);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--vp-c-brand-1-darker-2x);
  border-radius: 4px;
  box-sizing: border-box;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.form-group input[type="text"]:focus,
.form-group input[type="email"]:focus,
.form-group textarea:focus {
  border-color: var(--vp-c-brand-1);
  outline: none;
  box-shadow: 0 0 2px var(--vp-c-brand-soft);

}

.submit-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: var(--vp-c-brand-1);
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: var(--vp-c-brand-1-darker);
}

.success-message {
  color: var(--vp-c-green-1);
  margin-top: 1rem;
  font-weight: bold;
}

.error-message {
  color: var(--vp-c-red-1);
  margin-top: 1rem;
  font-weight: bold;
}
</style>

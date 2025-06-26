<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

onMounted(() => {
  const starfield = document.createElement('div');
  starfield.id = 'starfield';
  document.body.appendChild(starfield);

  // Generate static stars
  const numStars = 500; // Number of static stars
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('span');
    star.className = 'static-star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 10}s`; // Add subtle twinkling delay
    starfield.appendChild(star);
  }

  // Generate shooting stars
  const numShootingStars = 30; // Number of shooting stars
  for (let i = 0; i < numShootingStars; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    // Randomize starting position and delay
    shootingStar.style.left = `${Math.random() * 150}%`;
    shootingStar.style.top = `-15%`; // Start at the top
    shootingStar.style.animationDelay = `${Math.random() * 10}s`; // Vary delay
    starfield.appendChild(shootingStar);
  }
});
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-footer-before>
      <div class="custom-footer">
        <p>Built with <span style="color: var(--vp-c-brand-1);">Vue</span> and <span style="color: var(--vp-c-brand-2);">VitePress</span>.</p>
      </div>
    </template>
  </DefaultTheme.Layout>
  <!-- Stars and shooting stars will be added by the script -->
</template>

<style scoped>
.custom-footer {
  text-align: center;
  padding: 2rem;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 2rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>

<style>
/* Styles for dynamically created stars */
#starfield {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.static-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: #fff;
  opacity: 0.7;
  animation: twinkle 5s infinite ease-in-out alternate;
}

@keyframes twinkle {
  0% { opacity: 0.7; }
  50% { opacity: 0.2; }
  100% { opacity: 0.7; }
}

/* Shooting star styles */
.shooting-star {
  position: fixed;
  top: -100px; /* Start above the viewport */
  left: 50%;
  width: 0px; /* Size of the star head */
  height: 0px;
  background-color: #fff; /* White color for the star head */
  border-radius: 50%;
  filter: drop-shadow(0 0 6px #ffffff); /* Glow effect */
  z-index: 9999;
  pointer-events: none;
  animation: animateShootingStar 10s linear infinite; /* Animation duration */
}

/* Shooting star tail effect using a pseudo-element */
.shooting-star::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px; /* Length of the tail */
  height: 1px; /* Thickness of the tail */
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff); /* Gradient for the tail */
  transform: translate(-50%, -50%) rotate(135deg); /* Position and rotate the tail */
  transform-origin: 50% 0%;
}


/* Animation for shooting stars (streaking effect) */
@keyframes animateShootingStar {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(-1500px, 1500px); /* Move diagonally */
    opacity: 0;
  }
}
</style>

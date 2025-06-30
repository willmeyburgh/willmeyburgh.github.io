<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, onBeforeUnmount } from 'vue' // Import onBeforeUnmount for cleanup

onMounted(() => {
  const starfield = document.createElement('div');
  starfield.id = 'starfield';
  document.body.appendChild(starfield);

  let numStars;
  let numShootingStars;
  let shootingStartsRange;

  // Determine number of stars based on screen width
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) { // Mobile devices (e.g., up to ~767px)
    numStars = 150;
    numShootingStars = 20;
    shootingStartsRange = 500;
  } else if (screenWidth < 1024) { // Small tablets / large phones (e.g., 768px to ~1023px)
    numStars = 250;
    numShootingStars = 25;
    shootingStartsRange = 400;
  } else if (screenWidth < 1280) { // Larger tablets / small laptops (e.g., 1024px to ~1279px)
    numStars = 350;
    numShootingStars = 30;
    shootingStartsRange = 250;
  } else { // Desktop and larger screens (e.g., 1280px and above)
    numStars = 500;
    numShootingStars = 30;
    shootingStartsRange = 150;
  }

  // Generate static stars
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('span');
    star.className = 'static-star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 10}s`; // Add subtle twinkling delay
    starfield.appendChild(star);
  }

  // Generate shooting stars
  for (let i = 0; i < numShootingStars; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    // Randomize starting position and delay
    shootingStar.style.left = `${Math.random() * shootingStartsRange}%`;
    shootingStar.style.top = `-15%`; // Start at the top
    shootingStar.style.animationDelay = `${Math.random() * 10}s`; // Vary delay
    starfield.appendChild(shootingStar);
  }

  // Cleanup the starfield element when the component is unmounted
  onBeforeUnmount(() => {
    if (starfield.parentNode) {
      starfield.parentNode.removeChild(starfield);
    }
  });
});
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <div class="custom-footer">
        <p>Hosted on <span style="color: var(--vp-c-brand-3);">Github Pages</span>.</p>
      </div>
    </template>
  </DefaultTheme.Layout>
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
  position: fixed; /* Keep position fixed for desktop and attempt to fix mobile */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;

  /* ** IMPORTANT: Mobile Safari/iOS position:fixed bug fix ** */
  /* This often forces the browser to render fixed elements on the GPU,
     reducing or eliminating the "jolt" when scrolling stops. */
  -webkit-transform: translateZ(0); /* For older WebKit browsers (iOS Safari) */
  transform: translateZ(0); /* Modern browsers */
  -webkit-backface-visibility: hidden; /* Another GPU acceleration hint */
  will-change: transform; /* Inform browser of expected changes */
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
  position: fixed; /* Keep position fixed for shooting stars too */
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

  /* ** IMPORTANT: Apply the same fix to shooting stars ** */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  will-change: transform;
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
    /* Use translate3d for the animation to keep it on GPU */
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    /* Use translate3d for the animation to keep it on GPU */
    transform: translate3d(-1500px, 1500px, 0); /* Move diagonally */
    opacity: 0;
  }
}
</style>

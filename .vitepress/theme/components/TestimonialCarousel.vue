<template>
  <div class="testimonial-carousel" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
    <div v-if="realSlidesCount > 0"
      class="testimonial-container"
      ref="testimonialContainer"
      :style="{
        transform: 'translateX(' + (-currentIndex * 100) + '%)',
      }"
    >
      <div
        class="testimonial-card"
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <div class="testimonial-content">
          <div class="quote-icon">“</div>
          <p class="quote-text">{{ testimonial.quote }}</p>
          <div class="author-details">
            <img :src="withBase(testimonial.image)" alt="Author" class="author-image" />
            <div class="author-info">
              <p class="author-name">{{ testimonial.name }}</p>
              <p class="author-title">{{ testimonial.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-testimonials">
      <p>No testimonials available.</p>
    </div>

    <template v-if="realSlidesCount > 1">
      <div class="carousel-controls">
        <button class="carousel-button prev" @click="prevSlide">&#10094;</button>
        <button class="carousel-button next" @click="nextSlide">&#10095;</button>
      </div>
      <div class="carousel-dots">
        <span
          v-for="(testimonial, index) in originalTestimonials"
          :key="index"
          :class="{ 'active': index === activeDotIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { withBase } from 'vitepress';

const originalTestimonials = ref([
  {
    quote: "During Annekin’s tenure with our organisation, they consistently demonstrated exceptional professionalism, dedication, and a strong work ethic. Their job performance was consistently of a high standard, and they continually exceeded our expectations. I was particularly impressed with Annekin’s ability to deliver consistently and at times with strict deadlines.",
    image: '/testimonial/ivan.jpg',
    name: "Ivan Schultz",
    title: "Integration Development Lead",
  },
  {
    quote: "During the Months that I have worked with Annekin, I have had the opportunity to observe his interpersonal style – he is a pleasant individual who believes in positive motivation and his colleagues are never dissatisfied with his recommendations. I would describe him as a dedicated and enthusiastic individual who has a great penchant for meeting deadlines. Annekin is an accomplished multitasker who has ensured the efficacy of many projects.",
    image: '/testimonial/yonela.jpg',
    name: "Yonela",
    title: "Former Colleague",
  },
]);

const realSlidesCount = computed(() => originalTestimonials.value.length);

const testimonials = computed(() => {
  if (realSlidesCount.value === 0) {
    return [];
  }

  const extended = [];
  extended.push(originalTestimonials.value[realSlidesCount.value - 1]);
  extended.push(...originalTestimonials.value);
  extended.push(originalTestimonials.value[0]);
  return extended;
});

const extendedTestimonialsLength = computed(() => testimonials.value.length);


const currentIndex = ref(realSlidesCount.value > 0 ? 1 : 0);

const testimonialContainer = ref(null);

const isSliding = ref(false);

const TRANSITION_DURATION = 500; // milliseconds, matching CSS transition duration

// Touch variables
const touchStartX = ref(0);
const touchEndX = ref(0);
const minSwipeDistance = 50; // Minimum pixels for a swipe to register

onMounted(() => {
  if (testimonialContainer.value && realSlidesCount.value > 0) {
    testimonialContainer.value.style.transition = `transform ${TRANSITION_DURATION / 1000}s ease`;
  }
  // Add resize listener to potentially re-evaluate carousel behavior on orientation change
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const handleResize = () => {
  // If you had more complex responsive logic, it would go here.
  // For now, this just ensures the component re-evaluates its state if needed.
};

const handleLoopSnap = (targetIndex) => {
  if (!testimonialContainer.value) return;

  const containerElement = testimonialContainer.value;

  containerElement.style.transition = 'none';

  currentIndex.value = targetIndex;

  containerElement.offsetWidth; // Force reflow

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (containerElement) {
        containerElement.style.transition = `transform ${TRANSITION_DURATION / 1000}s ease`;
      }
      isSliding.value = false;
    });
  });
};

const nextSlide = () => {
  if (isSliding.value || realSlidesCount.value <= 1) {
    return;
  }

  isSliding.value = true;
  currentIndex.value++;

  if (currentIndex.value === extendedTestimonialsLength.value - 1) {
    setTimeout(() => {
      handleLoopSnap(1);
    }, TRANSITION_DURATION);
  } else {
    setTimeout(() => {
      isSliding.value = false;
    }, TRANSITION_DURATION);
  }
};

const prevSlide = () => {
  if (isSliding.value || realSlidesCount.value <= 1) {
    return;
  }

  isSliding.value = true;
  currentIndex.value--;

  if (currentIndex.value === 0) {
    setTimeout(() => {
      handleLoopSnap(extendedTestimonialsLength.value - 2);
    }, TRANSITION_DURATION);
  } else {
    setTimeout(() => {
      isSliding.value = false;
    }, TRANSITION_DURATION);
  }
};

const goToSlide = (index) => {
  if (isSliding.value || realSlidesCount.value === 0) {
    return;
  }

  isSliding.value = true;
  currentIndex.value = index + 1;

  setTimeout(() => {
    isSliding.value = false;
  }, TRANSITION_DURATION);
};

const activeDotIndex = computed(() => {
  if (realSlidesCount.value === 0) return -1;

  if (currentIndex.value === 0) {
    return realSlidesCount.value - 1;
  } else if (currentIndex.value === extendedTestimonialsLength.value - 1) {
    return 0;
  } else {
    return currentIndex.value - 1;
  }
});

// Touch event handlers
const handleTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
  touchEndX.value = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (touchStartX.value === 0 && touchEndX.value === 0) return; // No swipe detected

  const distance = touchEndX.value - touchStartX.value;

  if (distance > minSwipeDistance) {
    // Swiped right
    prevSlide();
  } else if (distance < -minSwipeDistance) {
    // Swiped left
    nextSlide();
  }

  // Reset touch values
  touchStartX.value = 0;
  touchEndX.value = 0;
};
</script>

<style scoped>
.testimonial-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--vp-c-brand-1-darker);
  border-radius: 8px;
}

.testimonial-container {
  display: flex;
  width: 100%;
  transition: transform 0.5s ease;
  /* Disable pointer events on the container during transition for smoother swiping */
  pointer-events: auto;
}

.testimonial-card {
  flex-shrink: 0;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.testimonial-card.active {
  /* No specific styles needed here for the sliding effect */
}

.testimonial-content {
  padding: 20px;
}

.quote-icon {
  font-size: 4em;
  color: var(--vp-c-brand-1);
  margin-bottom: 10px;
}

.quote-text {
  word-wrap: break-word;
}

.author-details {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.author-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
}

.author-info {
  font-size: 0.8em;
  color: var(--vp-c-text-2);
}

.author-name {
  font-weight: bold;
  color: var(--vp-c-brand-1);
  margin-bottom: -20px;
  font-size: 1.4em;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 10px;
  z-index: 10;
}

.carousel-button {
  background: none;
  border: none;
  font-size: 1.5em;
  color: var(--vp-c-brand-1-darker-2x);
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.carousel-button:hover {
  color: var(--vp-c-brand);
}

.carousel-dots {
  text-align: center;
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.carousel-dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-dots span.active {
  background-color: var(--vp-c-brand-1-darker-2x);
}

.no-testimonials {
  text-align: center;
  padding: 50px;
  color: var(--vp-c-text-2);
}

/* Media query for mobile */
@media (max-width: 768px) {
  .carousel-controls {
    display: none; /* Hide arrows on mobile */
  }
}
</style>
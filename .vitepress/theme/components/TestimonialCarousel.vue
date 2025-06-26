<template>
  <div class="testimonial-carousel">
    <div class="testimonial-container">
      <div
        class="testimonial-card"
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :class="{
          'active': index === currentIndex,
        }"
      >
        <div class="testimonial-content">
          <div class="quote-icon">“</div>
          <p class="quote-text">{{ testimonial.quote }}</p>
          <div class="author-details">
            <img :src="testimonial.image" alt="Author" class="author-image" />
            <div class="author-info">
              <p class="author-name">{{ testimonial.name }}</p>
              <p class="author-title">{{ testimonial.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <button class="carousel-button prev" @click="prevSlide">&#10094;</button>
      <button class="carousel-button next" @click="nextSlide">&#10095;</button>
    </div>
    <div class="carousel-dots">
      <span v-for="(testimonial, index) in testimonials" :key="index" :class="{ 'active': index === currentIndex }" @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          quote: "During Annekin’s tenure with our organisation, they consistently demonstrated exceptional professionalism, dedication, and a strong work ethic. Their job performance was consistently of a high standard, and they continually exceeded our expectations. I was particularly impressed with Annekin’s ability to deliver consistently and at times with strict deadlines.",
          image: '/static/testimonal/yonela.jpg', // Replace with actual image path
          name: "Ivan Schultz",
          title: "Integration Development Lead",
        },
        {
          quote: "During the Months that I have worked with Annekin, I have had the opportunity to observe his interpersonal style – he is a pleasant individual who believes in positive motivation and his colleagues are never dissatisfied with his recommendations. I would describe him as a dedicated and enthusiastic individual who has a great penchant for meeting deadlines. Annekin is an accomplished multitasker who has ensured the efficacy of many projects.",
          image: '/static/testimonal/yonela.jpg', // Replace with actual image path
          name: "Yonela",
          title: "Former Colleague",
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.testimonial-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
}

.testimonial-container {
  display: block;
  transition: transform 0.5s ease;
  width: 100%;
}

.testimonial-card {
  flex: 0 0 500px; /* Adjust width as needed */
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5); /* 0.5 transparent background */
  border: 2px solid var(--vp-c-brand-1-darker); 
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 100%;
  flex-shrink: 0;
  transition: transform 0.5s ease, opacity 0.5s ease, width 0.5s ease;
  opacity: 0.5;
  transform: scale(0.8);
}

.testimonial-card.active {
  opacity: 1;
  transform: scale(1);
  z-index: 1;
}

.testimonial-card.prev,
.testimonial-card.next {
  opacity: 0.7;
  transform: scale(0.9);
}

.testimonial-content {
  padding: 20px;
}

.quote-icon {
  font-size: 2em;
  color: var(--vp-c-brand-1);
  margin-bottom: 10px;
}

.quote-text {
  word-wrap: break-word; /* For text wrapping */
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
  font-size: 0.9em;
  color: var(--vp-c-text-2)
}

.author-name {
  font-weight: bold;
  color: var(--vp-c-brand-1)
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 10px;
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
  background-color: var(--vp-c-brand-1);
}
</style>

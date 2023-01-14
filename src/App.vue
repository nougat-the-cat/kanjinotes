<template>
  <body>
    <img :src="randomImage" class="bg-image"/>
    <div class="content">
      <div class="input-area">
        <div class="card-area"><RomajiInput/></div>
      </div>
      <div class="output-area"><CardDisplayer/></div>
    </div>
  </body>
</template>

<script>
import RomajiInput from './components/RomajiInput.vue'
import CardDisplayer from './components/CardDisplayer.vue'
const context = require.context('./assets/bg/', true, /^\.\/.*\.(png|jpe?g|svg)$/)
const images = context.keys().map(context)
export default {
  name: 'App',
  components: {
    RomajiInput,
    CardDisplayer
  },
  data() {
    return {
      images
    }
  },
  computed: {
    randomImage() {
      return images[Math.floor(Math.random() * images.length)];
    }
  }
}
</script>

<style scoped>
.bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  object-fit: cover;
  z-index: -1;
}

.content {
  display: grid;
  grid-template-columns: 310px auto;
  font-size: 16px;
  position: relative;
  z-index: 1;
  padding: 0;
  margin: 0;
  height: 100vh;
}

.input-area {
  display: flex;
  align-items: center;
}

.output-area {
  height: 100vh;
}
</style>




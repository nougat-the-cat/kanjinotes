<template>
  <div class="card-container">
    <div class="writing">hola</div>
    <div class="romaji">hola</div>
    <div class="kana">hola</div>
    <div class="meaning">hola</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: require('../store.js').default
    }
  },
  mounted() {
    console.log(this.store.state.filteredData)
  }
}
</script>

<style>
.card-container {
  display: grid;
  background-color: rgba(255, 255, 255, 0.65);
  grid-template-columns: auto;
  width: 637px;
}

.writing {
  grid-column-start: 1;
}
.romaji {
  grid-column-start: 2;
}
.kana {
  grid-column-start: 3;
}
.meaning {
  grid-column-start: 4;
}
</style>

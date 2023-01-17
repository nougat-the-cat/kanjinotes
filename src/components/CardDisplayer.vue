<template>
  <div class="card-container" v-for="(row, index) in store.state.filteredData" :key="index">
    <div class="writing">{{row.writing}}</div>
    <div class="romaji">{{row.romaji}}</div>
    <div class="kana">{{row.kana}}</div>
    <div class="meaning">{{row.meaning}}</div>
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

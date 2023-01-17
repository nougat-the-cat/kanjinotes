<template>
  <div class="card-container" v-for="(row, index) in store.state.filteredData" :key="index">
    <div class="reading-writing">
        <div class="kana">{{row.kana}}</div>
        <div class="writing">{{row.writing}}</div>
        <div class="romaji">{{row.romaji}}</div>
    </div>
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
  grid-template-columns: 1fr 1fr;
  width: 637px;
  height: 100px;
  border-radius: 7px;
}

.reading-writing {
  display: grid;
  grid-template-rows: 20px 50px 30px;
  grid-template-columns: 1fr;
  padding: none;
  margin: none;
}

.kana {
 font-size: smaller;
}

.writing {
  font-size: 36px;
  width: auto;
  min-width: 55px;
  font-family: 'Noto Serif JP', serif;
  justify-self: start;
}

.meaning {
  grid-column-start: 2;
  grid-row-start: 1;
}
</style>

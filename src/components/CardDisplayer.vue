<template>
  <div class="card-container" v-for="(row, index) in store.state.filteredData" :key="index">
      <div>
        <div class="reading-writing">
          <ruby>
            <rb>{{row.writing}}</rb>
            <rt>{{row.kana}}</rt>
          </ruby>
        </div>
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
  background-color: hsla(0, 0%, 100%, 0.65);
  display: grid;
  width: 637px;
  height: 100px;
  border-radius: 7px;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  margin-top: 10px;
}

.reading-writing {
  padding-top: 17.5px;
  height: 57.5%;
}

rt {
  font-family: 'Noto Serif JP', serif;
  text-align: center;
  font-size: 14px;
}
rb {
  font-family: 'Noto Serif JP', serif;
  font-size: 36px;
}

.romaji {
  text-align: center;
}
</style>

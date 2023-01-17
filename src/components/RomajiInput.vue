<template>
  <div class="card-body">
    <span ref="typingArea" class="input typing-area" type="text" contenteditable="true" name="input-romaji" @keypress.enter="searchTerm()"></span>
      <button class="submit-area" type="submit" v-on:click="searchTerm()">🔎︎</button>
  </div>
</template>


<script>
import Papa from 'papaparse'

export default {
  data() {
    return {
      csvData: [],
      filteredData: [],
      inputValue: ""
    }
  },
  
  methods: {
    searchTerm() {
        let searchTerm = this.$refs.typingArea.innerText;
        if (searchTerm.trim().length === 0) {
            return;
        } else {
          this.filteredData = this.csvData.filter(row => {
            return (row.romaji.trim().toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.meaning.trim().toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.kana.trim().toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.writing.trim().toLowerCase().includes(searchTerm.toLowerCase()));
          });
            if (this.filteredData.length === 0) {
                console.log("No matches found.");
            } else {
                console.log("Matched rows: ", this.filteredData);
                this.$store.dispatch('updateFilteredData', this.filteredData)
            }
        }
    },
  },
  
  mounted() {
    Papa.parse('/vocabulary_test_set.csv', {
        download: true,
        header: true,
        complete: (results) => {
            this.csvData = results.data
            this.csvData.forEach(row => {
              if(typeof row.romaji !== "string") {
                  console.log(`Value in row ${row} is not a string`)
              }
          })
        }
      });
            this.$refs.typingArea.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.searchTerm();
          }
          }); 
      }
 }
</script>



<style>
.card-body {
  width: 300px;
  display: grid;
  grid-template-columns: 91% 9%;
  background-color: white;
  padding: 2px 2px 2px 2px;
  border-radius: 7px;
}
input {
  width: 100%;
}
.typing-area {
  border-radius: 7px;
  border-style: inset;
  outline: none;
}
.submit-area {
  background: #d1095e;
  color: #fff;
  border-radius: 5px;
  height: 75%;
  height: 27.75px;
  align-self: center;
  border: none;
}
.submit-area:hover {
    background-color: hsl(335, 92%, 55%); 
    background-color: hsl(335, 92%, 50%); 
}
</style>

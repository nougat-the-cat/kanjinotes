<template>
  <div class="input-body">
    <span ref="typingArea" class="input typing-area" type="text" contenteditable="true" name="input-romaji" @keypress.enter="searchTerm()"></span>
      <button class="search" @click="searchTerm()">🔎︎</button>
      <button class="add-old" @click="myNewMethod1">🔎︎ Add to new list</button>
      <button class="add-new" @click="myNewMethod2">🔎︎ Add to existing list</button>
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
        let filteredData = this.csvData.filter(row => {
          return (row.romaji && row.romaji.trim().toLowerCase() === searchTerm.toLowerCase());
        });
        filteredData = filteredData.concat(this.csvData.filter(row => {
          return (row.romaji && row.romaji.trim().toLowerCase().includes(searchTerm.toLowerCase())) &&
                 (row.romaji && row.romaji.trim().toLowerCase() !== searchTerm.toLowerCase()) ||
                 (row.kana && row.kana.trim().toLowerCase().includes(searchTerm.toLowerCase())) ||
                 (row.writing && row.writing.trim().toLowerCase().includes(searchTerm.toLowerCase())) ||
                 (row.meaning && row.meaning.trim().toLowerCase().includes(searchTerm.toLowerCase()))
        }));
        this.filteredData = filteredData;
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
              if(typeof row.kana !== "string") {
                  console.log(`Value in row ${row} is not a string`)
              }
              if(typeof row.writing !== "string") {
                  console.log(`Value in row ${row} is not a string`)
              }
              if(typeof row.meaning !== "string") {
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
.input-body {
  width: 600px;
  display: grid;
  grid-template-columns: 53% auto auto auto;
  background-color: white;
  padding: 2px 2px 2px 2px;
  border-radius: 7px;
  gap: 1px;
}
input {
  width: 100%;
}
.typing-area {
  border-radius: 7px;
  border-style: inset;
  outline: none;
}
.search {
  background: #d1095e;
  color: #fff;
  border-radius: 5px;
  height: 27.75px;
  width: 27.75px;
  align-self: center;
  border: none;
}
.add-old {
  background: #d1095e;
  color: #fff;
  border-radius: 5px;
  height: 27.75px;
  align-self: center;
  border: none;
}
.add-new {
  background: #d1095e;
  color: #fff;
  border-radius: 5px;
  height: 27.75px;
  align-self: center;
  border: none;
}
.search:hover {
  background-color: hsl(335, 92%, 55%); 
}
.add-old:hover {
  background-color: hsl(335, 92%, 55%); 
}
.add-new:hover {
  background-color: hsl(335, 92%, 55%); 
}
</style>
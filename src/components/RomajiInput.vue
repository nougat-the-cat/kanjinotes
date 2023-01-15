<template>
  <div class="card-body">
    <input class="typing-area" v-model="inputValue" type="text" ref="searchInput" name="input-romaji" @keypress.enter="searchTerm()" placeholder="Enter Japanese or Rо̄maji Term or Text">
    <button class="submit-area" type="submit" v-on:click="searchTerm()">🔎︎</button>
    <div class="display-value" v-if="inputValue">{{inputValue}}</div>
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
        let searchTerm = this.$refs.searchInput.value;
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
        })
      }
    }
</script>


<style>
.card-body {
  width:300px;
  display: grid;
  grid-template-columns: 91% 9%;
  background-color: white;
  padding: 2px 6px 2px 2px;
  border-radius: 7px;
}

input {
  width: 97%;
}

.typing-area {
  border-radius: 7px;
  padding-right: 33.5px;
  padding-top: 10px;
  padding-bottom: 8px;
  border-style: inset;
  outline: none;
}

.submit-area {
  background: #d1095e;
  color: #fff;
  border-radius: 5px;
  height: 27.75px;
  align-self: center;
  border: none;
}

.submit-area:hover {
    background-color: hsl(335, 92%, 50%); 
}

.display-value{
  margin-left: 3px;
  font-size: 14px;
  width: 109.25%;
  border-radius: 7px;
  margin-top: 5px;
  word-wrap: break-word;
}
</style>

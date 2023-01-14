<template>
    <div class="card-body">    
        <input class="typing-area" type="text" ref="searchInput" name="input-romaji" @keypress.enter="searchTerm()" placeholder="Enter Japanese or Rо̄maji Term or Text">
        <button class="submit-area" type="submit" v-on:click="searchTerm()">🔎︎</button>
    </div>
</template>


<script>
import Papa from 'papaparse'

export default {
  data() {
    return {
      csvData: [],
      filteredData: []
    }
  },
  
  methods: {
    searchTerm() {
        let searchTerm = this.$refs.searchInput.value;
        if (searchTerm.trim().length === 0) {
            return;
        } else {
            this.filteredData = this.csvData.filter(row => {
            return row.romaji.trim().toLowerCase().includes(searchTerm.toLowerCase());
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
  height: 75%;
  align-self: center;
  border: none;
}

.submit-area:hover {
    background-color: hsl(335, 92%, 55%); 
}
</style>

<template>
    <div class="card-body">
      <div><p>Enter your romaji:</p></div>
      <div class="introduce-input">     
        <form>
          <div class="typing-area"><input type="text" name="input-romaji"></div>
        </form>
        <div class="submit"><input type="button" id="button" value="Ok!"></div>
      </div>
    </div>
</template>


<style>
.card-body {
  background-color: white;
  border-radius: 3px;
  align-self: center;
  padding: 5px;
  width:100%;
  gap: 0;
}

.introduce-input {
  display: grid;
  grid-template-columns: 85% 15%;
  grid-gap:1px;
}

p {
  margin: 0;
}

input{
  width:100%;
}

.typing-area {
  margin-right:10px;
}

</style>

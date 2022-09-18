<script>
export default {
  methods: {
    convert(word) {
      console.log(this.result);
      let model = "";
      for (let i in word) {
        if (
          (word[i] >= "a" && word[i] <= "z") ||
          (word[i] >= "A" && word[i] >= "Z")
        ) {
          let newChar = String.fromCharCode(word[i].charCodeAt(0) + 3);
          if (newChar > "z")
            newChar = String.fromCharCode(newChar.charCodeAt(0) - 26);
          model += newChar;
        } else {
          model += word[i];
        }
      }
      return model;
    },
  },
  data() {
    return {
      result: "",
      text: "",
    };
  },
  watch: {
    text(val) {
      this.result = this.convert(val);
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <div>Hello, here you can encrypt any text with a cesar's cipher.</div>
    // how this cipher works...
    <div class="d-flex flex-row justify-between">
      <input
        type="text"
        class="input-group mt-3 me-2"
        placeholder="type your sentence..."
        v-model="text"
      />
      <input
        type="text"
        class="input-group mt-3 ms-2"
        placeholder="the result is..."
        v-model="result"
      />
    </div>
  </div>
  <button class="btn btn-sm"></button>
</template>

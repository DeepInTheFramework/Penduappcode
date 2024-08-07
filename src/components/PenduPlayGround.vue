
<template>
    <div class="hello">
      <h1>{{ wordHided.join(' ') }}</h1>
    </div>
  </template>

<script>
import { getRandomWord } from '../ai'; // Importer la fonction getRandomWord depuis ai.js

export default {
  name: 'PenduPlayGround',
  data() {
      return {
      wordHided : [],
      originalWord : ''    
    };
  },

  created () {
      this.originalWord = getRandomWord();
      this.hideWord();
    },

  methods: {
    hideWord() {
        this.wordHided = [];
        for(let i=0; i< this.originalWord.length; i++)
        {
          this.wordHided.push("_")
        }
    }
  }
}
</script>
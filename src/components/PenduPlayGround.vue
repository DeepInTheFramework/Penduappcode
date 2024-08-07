
<template>
    <div v-if="!gameEnded" class="game">
    <h1>{{ wordHided.join(' ') }}</h1>
    <h2>Appuyez sur une lettre</h2>
    </div>
    <div v-else class="gameEnd">
      <h2>Félicitations pour votre victoire. </h2>
      <button @click="resetGame()">Recommencer</button>
    </div>
  </template>

<script>
import { getRandomWord } from '../ai';
import { ref, reactive, watch, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'PenduPlayGround',
  setup() {
    const wordHided = ref([]);
    const originalWord = ref('');
    const lettersFound = reactive([]);
    let gameEnded = ref(false);

    
    const hideWord = () => {
      wordHided.value = [];
      for (let i = 0; i < originalWord.value.length; i++) {
        wordHided.value.push('_');
      }
    };

    const unhideLetter = () => {
      console.log('Unhide letter à été lancé');
      for (let i = 0; i < originalWord.value.length; i++) {
        const letter = originalWord.value[i];
        if (lettersFound.includes(letter)) {
          wordHided.value[i] = letter;
        }
      }
    };

    const handleButtonPressed = (event) => {
      const letter = event.key.toLowerCase();
      console.log('La lettre : ', letter, 'a été frappée');
      if (/^[a-z]$/.test(letter) && !lettersFound.includes(letter) && originalWord.value.includes(letter)) {
        console.log('La lettre : ', letter, 'va être ajoutée');
        lettersFound.push(letter);
      }
    };

    const checkGameStatus = () => {
      console.log("On check gamestatus")
      console.log("Wordhided est :", wordHided)
        if (!wordHided.value. includes('_'))
        {
          console.log("Wordhided ne contient plus _ ")
          gameEnded.value=true;
        }
        else {
          console.log("Wordhided contient toujours _ ")
          gameEnded.value=false;
        }
    };

    const resetGame = () => {
      originalWord.value = getRandomWord();
      lettersFound.splice(0, lettersFound.length);
      hideWord();
      gameEnded.value = false;
    };


  onMounted(() => {
      originalWord.value = getRandomWord();
      hideWord();
      window.addEventListener('keyup', handleButtonPressed);
    });
  
    onBeforeUnmount(() => {
      window.removeEventListener('keyup', handleButtonPressed);
    });

  watch(
      lettersFound,
      () => {
        console.log('Watcher lettersFound déclenché');
        unhideLetter(),
        checkGameStatus(),
        gameEnded;
      },
      { deep: true }
    );

    return {
      wordHided,
      lettersFound,
      gameEnded,
      resetGame
    };

  }
}
</script>
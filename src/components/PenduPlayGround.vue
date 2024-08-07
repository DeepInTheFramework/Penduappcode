
<template>
    <div v-if="!gameEnded" class="game">
    <h1>{{ wordHided.join(' ') }}</h1>
    <h2>Appuyez sur une lettre</h2>
    <div class="life">
      <h3 v-if="lifeNumbers > 0">Vous avez encore {{ lifeNumbers }} coups à jouer.</h3>
    </div>
    </div>
    <div v-else class="gameEnd">
      <h2 v-if="winner">Félicitations pour votre victoire ! </h2>
      <h2 v-else>Dommage pour cette défaite ! </h2>
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
    let lifeNumbers = ref(0)
    let gameEnded = ref(false);
    let winner=ref(false);

    
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
      if(lifeNumbers.value>0)
    {
      const letter = event.key.toLowerCase();
      console.log('La lettre : ', letter, 'a été frappée');
      if (/^[a-z]$/.test(letter) && !lettersFound.includes(letter) && originalWord.value.includes(letter)) {
        console.log('La lettre : ', letter, 'va être ajoutée');
        lettersFound.push(letter);
      }
      decrementLifesNumbers()
    }
    };

    const checkGameStatus = () => {
      console.log("On check gamestatus")
      console.log("Wordhided est :", wordHided)
        if (!wordHided.value. includes('_'))
        {
          console.log("Wordhided ne contient plus _ ")
          winner.value=true
          gameEnded.value=true;
        }
        else {
          console.log("Wordhided contient toujours _ ")
          winner.value=false;
          gameEnded.value=false;
        }
    };

    const resetGame = () => {
      originalWord.value = getRandomWord();
      lettersFound.splice(0, lettersFound.length);
      hideWord();
      gameEnded.value = false;
      giveLifesNumbers()
    };

    const giveLifesNumbers = () => {
      console.log('On initialize lifesNumber')
      lifeNumbers.value =  4 + (Math.ceil(originalWord.value.length/3))
      console.log('Life number est :', lifeNumbers.value)
    }

    const decrementLifesNumbers = () => {
      lifeNumbers.value -=1;

      if(lifeNumbers.value<=0) {
        gameEnded.value=true;
      }
    }


  onMounted(() => {
      originalWord.value = getRandomWord();
      hideWord();
      giveLifesNumbers()
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
      resetGame,
      giveLifesNumbers,
      lifeNumbers,
      decrementLifesNumbers,
      winner
    };

  }
}
</script>
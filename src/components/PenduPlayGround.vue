
<template>
    <div v-if="!gameEnded" class="game">
    <h1>{{ wordHided.join(' ') }}</h1>
    <h2>Appuyez sur une lettre</h2>
    <div class="life">
      <h3 v-if="lifeNumbers > 0">Vous avez encore {{ lifeNumbers }} coups à jouer.</h3>
      <h3 v-if="timer" :class="timer > 15 ? 'timer' : 'timer red'"> 
        {{ timer }} </h3>
    </div>

    <div v-if="isMobile" class="mobileContainer">
      <div v-for="letter in alphabet" :key=letter class='mobileKeyboard'>
        <button class="mobileButton" @click="handleMobileButtonClick(letter)">{{letter}}</button>
      </div>
    </div>

    </div>
    <div v-else class="gameEnd">
      <h2 v-if="winner">Félicitations pour votre victoire ! </h2>
      <h2 v-else>Dommage pour cette défaite ! </h2>
      <button class="buttonReset" @click="resetGame()">Recommencer</button>
    </div>


  </template>

<script>
import { getRandomWord } from '../ai';
import { ref, reactive, watch, onMounted, onBeforeUnmount, computed } from 'vue';

export default {
  name: 'PenduPlayGround',
  setup() {
    const wordHided = ref([]);
    const originalWord = ref('');
    const lettersFound = reactive([]);
    let lifeNumbers = ref(0)
    let gameEnded = ref(false);
    let winner=ref(false);
    let timer = ref(30)
    const alphabet = 'azertyuiopqsdfghjklmwxcvbn'.split('');
    const successSound = new Audio(require('@/assets/Success.mp3'));


    
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
        successSound.play()
        lettersFound.push(letter);
      }
      else {decrementLifesNumbers()
      }
    }
    };

    const handleMobileButtonClick = (letter) => {
      {
      console.log('La lettre : ', letter, 'a été frappée');
      if (/^[a-z]$/.test(letter) && !lettersFound.includes(letter) && originalWord.value.includes(letter)) {
        console.log('La lettre : ', letter, 'va être ajoutée');
        successSound.play()
        lettersFound.push(letter);
      }
      else {decrementLifesNumbers()}
    }
    }


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
      timer.value=30;
    };

    const giveLifesNumbers = () => {
      console.log('On initialize lifesNumber')
      lifeNumbers.value =  4 + (Math.ceil(originalWord.value.length/3))
      console.log('Life number est :', lifeNumbers.value)
    };

    const decrementLifesNumbers = () => {
      lifeNumbers.value -=1;

      if(lifeNumbers.value<=0) {
        gameEnded.value=true;
      }
    };

    const isMobile = computed(() => {
      return /Mobi|Android/i.test(navigator.userAgent);
    });

    const decrementTimer = () => {
      setInterval(() => {
        timer.value-=1;
      },1000)
    }


  onMounted(() => {
      originalWord.value = getRandomWord();
      hideWord();
      giveLifesNumbers()
      decrementTimer()
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

    watch (
      timer,
      () => {
        if (timer.value <1)
      {
        timer.value=30;
        decrementLifesNumbers()
      }
    }
    )

    return {
      wordHided,
      lettersFound,
      gameEnded,
      resetGame,
      giveLifesNumbers,
      lifeNumbers,
      decrementLifesNumbers,
      winner,
      isMobile,
      alphabet,
      handleMobileButtonClick,
      timer,
      decrementTimer
    };

  }
}
</script>

<style>
.mobileContainer {
  border-top: 1px solid bisque;
  margin-top: 10vh;
  padding-top: 20px;
  min-height: 150px;
  width: 100vw;
  padding-left: 2vw;
  padding-right: 2vw;      
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3px;
  background-color: aliceblue;
}

.mobileButton {
  width: 10vw;
  height: 8vw;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timer {
  font-size: 30px;
}

.red {
  color: brown;
}

  @media screen and (max-width:1080px) {
    .buttonReset {
    font-size: 16px;
    width: 50vw;
    height: 50px;
  }
}

</style>
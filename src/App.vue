<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-if="onDifficultyScreen">
    <DifficultyScreen :setDifficulty="setDifficulty" />
  </div>

  <div v-if="onCategoryScreen">
    <CategoryChoice :setCategory="setCategory" />
  </div>

  <div v-if="onPenduPlayGround">
    <PenduPlayGround :difficulty="difficulty" :category="category"/>
  </div>

</template>

<script>
import PenduPlayGround from './components/PenduPlayGround.vue'
import DifficultyScreen from './components/DifficultyScreen.vue';
import { ref} from 'vue';
import CategoryChoice from './components/CategoryChoice.vue';

export default {
  name: 'App',

  components: {
    DifficultyScreen,
    CategoryChoice,
    PenduPlayGround,
  },

  setup() {
    const onDifficultyScreen = ref(true)
    const onCategoryScreen = ref(false)
    const onPenduPlayGround = ref(false)
    const difficulty = ref('')
    const category = ref('')

    const setDifficulty = (newDifficulty) => {
        difficulty.value = newDifficulty;
        onDifficultyScreen.value=false;
        onCategoryScreen.value=true;
    }

    const setCategory = (newCategory) => {
        category.value = newCategory;
        onPenduPlayGround.value=true;
        onCategoryScreen.value=false;
    }

    return {
       onDifficultyScreen,
     onCategoryScreen,
     onPenduPlayGround, 
     difficulty,
     category,
     setDifficulty,
     setCategory
    }
  }



}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

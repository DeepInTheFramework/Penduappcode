<template>
    <h1>Veuillez sélectionner votre niveau de difficulté : </h1>
    <div class="difficultyContainer">
    <button @click="handleButtonClicked('easy')">Facile</button>
    <button @click="handleButtonClicked('medium')">Moyen</button>
    <button @click="handleButtonClicked('hard')">Difficile</button>
    </div>
</template>

<script>
export default {
       name : 'DifficultyScreen',
       props :{
                setDifficulty: {
            type: Function,
            required: true
            }
       },

        setup(props) {
            const handleButtonClicked = (difficulty) => {
            props.setDifficulty(difficulty)
            return difficulty;
            }

            return {
                handleButtonClicked
            }
        }
    
    }

</script>

<style>

.difficultyContainer {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

</style>
<template>
    <h1>Veuillez sélectionner votre niveau de difficulté : </h1>
    <div class="difficultyContainer">
    <button @click="handleButtonClicked('Easy')">Facile</button>
    <button >Moyen</button>
    <button>Difficile</button>
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

.categoryContainer {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

</style>
<template>
    <h1>Veuillez sélectionner votre catégorie de jeu : </h1>
    <div class="difficultyContainer">
    <button @click="handleButtonClicked('easy')">Facile</button>
    <button @click="handleButtonClicked('medium')">Moyen</button>
    <button @click="handleButtonClicked('hard')">Difficile</button>
    </div>
</template>

<script>
export default {
       name : 'CategoryChoice',
       setup() {
        const handleButtonClicked = (category) => {
         return category;
        }

        return handleButtonClicked
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
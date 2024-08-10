<template>
    <h1>Veuillez sélectionner votre de mots : </h1>
    <div class="categoryContainer">
    <button @click="handleButtonClicked('Litterature')">Littérature</button>
    <button @click="handleButtonClicked('medium')">Manga</button>
    <button @click="handleButtonClicked('hard')">Jeux-Vidéos</button>
    </div>
</template>

<script>
export default {
       name : 'CategoryChoice',
       props :{
            setCategory: {
            type: Function,
            required: true
            }
       },

        setup(props) {
            const handleButtonClicked = (category) => {
            props.setCategory(category)
            return category;
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
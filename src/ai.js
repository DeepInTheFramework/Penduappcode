const words = [
    'vuejs',
    'react',
    'angular',
    'svelte',
    'javascript',
    'typescript',
  ];
  
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  export { getRandomWord };
  
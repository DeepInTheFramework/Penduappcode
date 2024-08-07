const words = [
  'alchimie',
  'arcadie',
  'barde',
  'bestiaire',
  'chevalerie',
  'codex',
  'elegie',
  'ephemere',
  'epopee',
  'feerie',
  'fable',
  'fresque',
  'gargouille',
  'gothique',
  'lugubre',
  'heroïsme',
  'illusion',
  'intrigue',
  'labyrinthe',
  'legende',
  'lyrique',
  'manuscrit',
  'meandre',
  'memoire',
  'mystere',
  'narrateur',
  'ode',
  'oracle',
  'parchemin',
  'poesie',
  'prophetie',
  'quête',
  'reverence',
  'rhapsodie',
  'romance',
  'saga',
  'songe',
  'sortilege',
  'tragedie',
  'troubadour',
  'utopie',
  'valkyrie',
  'velin',
  'volupte',
  'chronique',
  'conte',
  'mythologie',
  'parabole',
  'recit'
];

  
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  export { getRandomWord };
  
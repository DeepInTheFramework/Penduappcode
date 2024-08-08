const words = [
  'alchimie', 'arcadie', 'barde', 'bestiaire', 'chevalerie',
  'codex', 'elegie', 'ephemere', 'epopee', 'feerie',
  'fable', 'fresque', 'gargouille', 'gothique', 'lugubre',
  'heroisme', 'illusion', 'intrigue', 'labyrinthe', 'legende',
  'lyrique', 'manuscrit', 'meandre', 'memoire', 'mystere',
  'narrateur', 'ode', 'oracle', 'parchemin', 'poesie',
  'prophetie', 'quete', 'reverence', 'rhapsodie', 'romance',
  'saga', 'songe', 'sortilege', 'tragedie', 'troubadour',
  'utopie', 'valkyrie', 'velin', 'volupte', 'chronique',
  'conte', 'mythologie', 'parabole', 'recit', 'aventure',
  'magicien', 'sorcellerie', 'enchantement', 'druide', 'chimere',
  'dragon', 'elfe', 'nymphe', 'licorne', 'sortilege',
  'cavalier', 'tourmente', 'cavalerie', 'royaume', 'sorcier',
  'trone', 'magie', 'empereur', 'emeraude', 'royaume',
  'guerrier', 'epique', 'prelude', 'chanson', 'hymne',
  'prophete', 'incantation', 'griot', 'serenade', 'manuscrit',
  'chateau', 'palais', 'forteresse', 'immortel', 'malediction',
  'sortilege', 'oracle', 'potion', 'elixir', 'metamorphose',
  'arcanes', 'runes', 'conteur', 'heros', 'heroine',
  'destin', 'epopee', 'equinoxe', 'solstice', 'neant',
  'abime', 'tempete', 'etoile', 'comete', 'nebuleuse',
  'cosmique', 'elementaire', 'sorcellerie', 'metamorphose', 'hydromel',
  'eloge', 'passion', 'catharsis', 'folie', 'complot',
  'enchanteresse', 'ombre', 'lueur', 'sepulcre', 'mausolee',
  'voyage', 'legat', 'relicat', 'carrousel', 'zodiaque',
  'pelerin', 'cavalcade', 'caravane', 'orbite', 'galaxie',
  'univers', 'destinee', 'nuit', 'diurne', 'crepuscule',
  'aube', 'aventure', 'expedition', 'croisade', 'mystique',
  'enigme', 'illusion', 'reverie', 'chimere', 'quete',
  'destin', 'sorcellerie', 'fantasmagorie', 'mythique'
];


  
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  export { getRandomWord };
  
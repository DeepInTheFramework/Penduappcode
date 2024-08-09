const wordsFantasy = [
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

const wordsVideoGame = [
  'aventure', 'bataille', 'boss', 'console', 'coop',
  'donjon', 'ecran', 'epee', 'exploration', 'fantasy',
  'force', 'gain', 'gamer', 'guerrier', 'heros',
  'immersion', 'interface', 'jeu', 'joystick', 'magie',
  'mission', 'mode', 'monde', 'monstre', 'niveau',
  'online', 'partie', 'personnage', 'plateforme', 'pouvoir',
  'quete', 'realite', 'recompense', 'role', 'RPG',
  'scenario', 'score', 'sortilege', 'strategie',
  'survie', 'team', 'univers', 'update', 'victoire',
  'vie', 'virtuel', 'wifi', 'avatar', 'combat', 
  'controleur', 'costume', 'creature', 'defi',
  'emote', 'ennemi', 'escouade', 'experience', 'franchise',
  'guilde', 'instance', 'inventaire', 'joueur', 'ligue',
  'multijoueur', 'niveau', 'nuit', 'pouvoir',
  'quete', 'realite', 'reflexe', 'registre', 'run',
  'secret', 'serveur', 'skin', 'spawn', 'speedrun',
  'tactique', 'terrain', 'tournoi', 'trophée', 'usine',
  'valeur', 'vehicule', 'vie', 'virus', 'vitesse', 'zone'
];



  function getWordList (listType) {
      if (listType==='roman')
      {
        return wordsFantasy
      }
      else {
        return wordsVideoGame
      }
  }
  
  function getRandomWord(wordLibrary) {
    const randomIndex = Math.floor(Math.random() * wordLibrary.length);
    return wordLibrary[randomIndex];
  }
  
  export { getRandomWord, getWordList };
  
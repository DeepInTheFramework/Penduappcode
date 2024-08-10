const wordsLitteratureEasy = [
  'alchimie', 'bestiaire', 'chevalerie',
  'codex', 'epopee', 'feerie',
  'fable', 'fresque', 'gargouille', 'gothique', 'lugubre',
  'heroisme', 'illusion', 'labyrinthe', 'legende',
  'manuscrit', 'memoire', 'mystere',
  'oracle', 'parchemin', 'poesie',
  'prophetie', 'quete', 'romance',
  'songe', 'sortilege', 'tragedie',
  'utopie','chronique',
  'conte', 'mythologie', 'recit', 'aventure',
  'magicien', 'sorcellerie', 'enchantement', 'druide', 
  'dragon', 'elfe', 'nymphe', 'licorne', 'sortilege',
  'cavalier', 'tourmente', 'royaume', 'sorcier',
  'trone', 'magie', 'empereur', 'emeraude', 'royaume',
  'guerrier', 'epique', 'prelude', 'chanson', 'hymne',
  'prophete', 'incantation', 'serenade', 'manuscrit',
  'chateau', 'palais',  'immortel', 'malediction',
  'sortilege', 'potion', 'elixir', 'metamorphose',
  'runes', 'conteur', 'heros', 
  'destin', 'epopee', 'neant',
  'tempete', 'etoile', 'comete', 
  'cosmique', 'elementaire', 'sorcellerie', 'metamorphose', 
  'eloge', 'passion', 'catharsis', 'folie', 'complot',
  'ombre', 'lueur','voyage',
  'pelerin', 'orbite', 'galaxie',
  'univers', 'destinee', 'nuit', 'crepuscule',
  'aube', 'aventure', 'expedition', 'croisade', 'mystique',
  'enigme', 'illusion', 'quete',
  'destin', 'sorcellerie','mythique'
];

const wordsLiterratureMedium = [
  'arcadie', 'barde', 'elegie', 'ephemere', 'intrigue',
  'lyrique', 'meandre', 'narrateur', 'ode', 'reverence',
  'rhapsodie', 'saga', 'troubadour', 'valkyrie', 'velin',
  'volupte', 'parabole', 'chimere', 'cavalerie', 'forteresse',
  'arcanes', 'heroine', 'equinoxe', 'solstice', 'abime',
  'nebuleuse', 'hydromel', 'enchanteresse', 'sepulcre', 'mausolee',
  'legat', 'relicat', 'carrousel', 'zodiaque', 'cavalcade',
  'caravane', 'diurne', 'reverie', 'fantasmagorie'
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

function getRandomWord(category, difficulty) {
  let wordLibrary;
  console.log(category, difficulty)
  if (category == 'Litterature' && difficulty == 'Easy') {
    console.log("Litterature Easy")
    wordLibrary = wordsLitteratureEasy;
  } else if (category === 'Litterature' && difficulty === 'Medium') {
    wordLibrary = wordsLiterratureMedium;
  } else if (category === 'VideoGame') {
    wordLibrary = wordsVideoGame;
  } 
  
  const randomIndex = Math.floor(Math.random() * wordLibrary.length);
  return wordLibrary[randomIndex];
}

export { getRandomWord };

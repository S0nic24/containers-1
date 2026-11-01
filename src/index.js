import Character from './js/character.js';
import Team from './js/team.js';

const team = new Team();
const hero = new Character('Hero');

team.add(hero);

console.log(team.toArray());
import Team from '../src/js/team.js';
import Character from '../src/js/character.js';

describe('Team', () => {
  let team;
  let char1;
  let char2;
  let char3;

  beforeEach(() => {
    team = new Team();
    char1 = new Character('Demo');
    char2 = new Character('Demo2');
    char3 = new Character('Demo3');
  });

  test('конструктор создаёт пустой Set', () => {
    expect(team.members).toBeInstanceOf(Set);
    expect(team.members.size).toBe(0);
  });

  test('add добавляет нового персонажа', () => {
    team.add(char1);
    expect(team.members).toEqual(new Set([char1]));
  });

  test('add выбрасывает ошибку при добавлении дубликата', () => {
    team.add(char1);
    expect(() => team.add(char1)).toThrow(`Member ${char1.name} is already in the team`);
  });

  test('addAll добавляет несколько новых персонажей', () => {
    team.addAll(char1, char2, char3);
    expect(team.members).toEqual(new Set([char1, char2, char3]));
  });

  test('addAll не добавляет дубликаты и не выбрасывает ошибку', () => {
    team.addAll(char1, char1, char2);
    expect(team.members).toEqual(new Set([char1, char2]));
    expect(() => team.addAll(char1)).not.toThrow();
  });

  test('toArray возвращает массив персонажей', () => {
    team.addAll(char1, char2);
    expect(team.toArray()).toEqual([char1, char2]);
  });

  test('toArray возвращает пустой массив для пустой команды', () => {
    expect(team.toArray()).toEqual([]);
  });
});
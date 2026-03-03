// У тебе є масив об'єктів heroes. Тобі потрібно написати один ланцюжок методів, який зробить наступне:

// filter: Залишити тільки тих, хто має рівень досвіду (experience) більше 5 років.

// map: Перетворити їхні імена на ВЕЛИКІ ЛІТЕРИ (toUpperCase) та додати до об'єкта поле status: "Ready".

// find: Серед відібраних кандидатів знайти того, чий псевдонім (alias) — "Shadow".
const candidates = [
  { alias: "Shadow", experience: 8, power: "Invisibility" },
  { alias: "Thunder", experience: 3, power: "Lightning" },
  { alias: "Hunter", experience: 10, power: "Archery" },
  { alias: "Shadow", experience: 2, power: "Telepathy" },
  { alias: "Nova", experience: 6, power: "Light" },
];
const exp = candidates
  .filter((candidate) => candidate.experience > 5)
  .map((candidate) => {
    candidate.alias.toUpperCase();
    candidate.status = "Ready";
    return candidate;
  })
  .find((candidate) => candidate.alias == "Shadow");

console.log(exp);

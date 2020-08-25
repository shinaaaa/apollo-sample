export const people = [
  { id: "0", name: "흥부", age: 67, gender: "male" },
  { id: "1", name: "심봉사", age: 67, gender: "male" },
  { id: "2", name: "심청이", age: 20, gender: "female" },
  { id: "3", name: "홍길동", age: 23, gender: "male" },
  { id: "4", name: "콩쥐", age: 21, gender: "female" },
];

export const getbyId = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
 
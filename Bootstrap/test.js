let result = [];
for (let i in emp) {
  if (!result[i.dep]) {
    result[i.dep] = i.salary;
  }
  if (!i.salary) {
    i.salary = 0;
  }
  result[i.dep] += i.salary;
}

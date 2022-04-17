// const { add, subtract } = require("../math");
import { add } from "../math";
console.log(typeOf(add));

test("should get correct sum of two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

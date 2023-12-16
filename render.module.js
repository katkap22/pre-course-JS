import { a } from "./data.module.js";

console.log('render, start');
export function render(value) {
    console.log(value + a);
}
console.log('render, finish');
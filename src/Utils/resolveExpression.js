import schema from "../schema.json";
function  ResolveExpression(expression, currentItem) {
const cleaned=expression.slice(2,-2);
const split=cleaned.split('.');
const key= split[split.length-1];

console.log(cleaned);
console.log(split);
console.log(key);
console.log(currentItem[key]);
return currentItem[key];
}
export default ResolveExpression;
const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryTitle = item.querySelector(`h2`).textContent;
  const categotyCount = item.querySelectorAll(`li`).length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categotyCount}`);
});
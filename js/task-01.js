const listRef = document.querySelector('ul#categories');
const categoriesEl = listRef.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}`);
categoriesEl.forEach(item => {console.log(`Category: ${item.firstElementChild.textContent}
 Elements: ${item.querySelectorAll("li").length}`)})

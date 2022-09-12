const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector("ul.gallery");
list.style.listStyle = 'none';
list.style.marginTop = '20Px';
list.style.display = 'grid';
list.style.justifyItems = 'end';
list.style.justifyContent = 'center';
console.log(list);  

const listItem = images.map(({url, alt}) => {
 return `<li><img src="${url}" alt="${alt}"></li>`;
});
const markup = listItem.join('')
console.log(markup);
list.insertAdjacentHTML("afterbegin", markup);

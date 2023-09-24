list = document.getElementsByTagName('ul')[0];

newElement = document.createElement('li');
newElement.textContent = 'Page manipulation from console is easy';

list.appendChild(newElement);

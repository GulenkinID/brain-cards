import { createElement } from "../helper/createElement.js"
import { declOfNum } from "../helper/declOfNum.js";

export const createCategory = (app) => {
	const category = createElement('section', {
		className: 'category section-offset',
	});

	const container = createElement('div', {
		className: 'container',
	});
	category.append(container);

	const categoryList = createElement('ul', {
		className: 'category__list',
	});
	container.append(categoryList);


	const createCategoryCard = (data) => {
		const elementLi = createElement('li', {
			className: 'category__item',
		});
		elementLi.dataset.id = data.id;

		const elementBtn = createElement('button', {
			className: 'category__card',
		});
		const elementSpanTitle = createElement('span', {
			className: 'category__title',
			textContent: data.title,
		});
		const elementSpanPairs = createElement('span', {
			className: 'category__pairs',
			textContent: declOfNum(data.length, ['пара', 'пары', 'пар']),
		});
		elementBtn.append(elementSpanTitle, elementSpanPairs);

		const btnEdit = createElement('button', {
			className: 'category__btn category__edit',
			ariaLabel: 'редактировать',
		});
		const btnDel = createElement('button', {
			className: 'category__btn category__del',
			ariaLabel: 'удалить',
		});
		elementLi.append(elementBtn, btnEdit, btnDel);
		

		return elementLi;
	}


	const mount = (data) => {
		categoryList.textContent = '';
		app.append(category);
		const cards = data.map(createCategoryCard);
		categoryList.append(...cards);
	}

	const unmount = () => {
		category.remove();
	}

	return {
		mount,
		unmount,
		categoryList,
	}
}
import { createElement } from "../helper/createElement.js"

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
			textContent: `${data.length} пар`,
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

/*
<section class="category section-offset">
      <div class="container">
        <categoryList class="category__list">
          <li class="category__item" data-id="bc2iv1cwi6ht">
            <button class="category__card">
              <span class="category__title">Косвенные местоимения</span>
              <span class="category__pairs">7 пар</span>
            </button>
            <button class="category__btn category__edit" aria-label="редактировать"></button>
            <button class="category__btn category__del" aria-label="удалить"></button>
          </li>

          <li class="category__item" data-id="bcbop5qmm9sy">
            <button class="category__card">
              <span class="category__title">Описание внешности</span>
              <span class="category__pairs">26 пар</span>
            </button>
            <button class="category__btn category__edit" aria-label="редактировать"></button>
            <button class="category__btn category__del" aria-label="удалить"></button>
          </li>

          <li class="category__item" data-id="bc93pfmb4nhw">
            <button class="category__card">
              <span class="category__title">Притяжательные местоимения</span>
              <span class="category__pairs">6 пар</span>
            </button>
            <button class="category__btn category__edit" aria-label="редактировать"></button>
            <button class="category__btn category__del" aria-label="удалить"></button>
          </li>

          <li class="category__item" data-id="bczp358gktzy">
            <button class="category__card">
              <span class="category__title">Семья</span>
              <span class="category__pairs">20 пар</span>
            </button>
            <button class="category__btn category__edit" aria-label="редактировать"></button>
            <button class="category__btn category__del" aria-label="удалить"></button>
          </li>
        </categoryList>
      </div>
    </section>
*/
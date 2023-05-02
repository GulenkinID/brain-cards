import { createCategory } from './components/createCategory.js';
import { createEditCategory } from './components/createEditCategory.js';
import { createHeader } from './components/createHeader.js';
import { createPairs } from './components/createPairs.js';
import { createElement } from './helper/createElement.js';
import { fetchCards, fetchCategories } from './service/api.service.js';

const initApp = async () => {
	const headerParent = document.querySelector('.header');
	const appEl = document.querySelector('#app');

	const headerObj = createHeader(headerParent);
	const categoryObj = createCategory(appEl);
	const editCategoryObj = createEditCategory(appEl);
	const pairsObj = createPairs(appEl);

	const allSectionUnmount = () => {
		[categoryObj, editCategoryObj, pairsObj].forEach(obj => obj.unmount());
	}
	

	const renderIndex = async event => {
		event?.preventDefault();
		allSectionUnmount();
		const categories = await fetchCategories();
		headerObj.updateHeaderTitle('Категории');
		if (categories.error) {
			appEl.append(createElement('p', {
				className: 'server-error',
				textContent: 'Ошибка сервера, попробуйте зайти позже.',
			}));
			appEl.append(errorText);
			return;
	}

	categoryObj.mount(categories);
	}

	renderIndex();

	headerObj.headerLogoLink.addEventListener('click', renderIndex);

	headerObj.headerBtn.addEventListener('click', () => {
		allSectionUnmount();
		headerObj.updateHeaderTitle('Новая категория');
		editCategoryObj.mount();
	});

	categoryObj.categoryList.addEventListener('click', async ( { target } ) => {
		const categoryItem = target.closest('.category__item');

		if (target.closest('.category__edit')) {
			const dataCards = await fetchCards(categoryItem.dataset.id);
			allSectionUnmount();
			headerObj.updateHeaderTitle('Редактирование');
			editCategoryObj.mount(dataCards);
			return;
		}

		if (target.closest('.category__del')) {
			console.log('delete');
			return;
		}

		if (categoryItem) {
			const dataCards = await fetchCards(categoryItem.dataset.id);
			allSectionUnmount();
			headerObj.updateHeaderTitle(dataCards.title);
			pairsObj.mount(dataCards);
			// return;
		}

	});

	pairsObj.btnReturn.addEventListener('click', renderIndex);
}

initApp();
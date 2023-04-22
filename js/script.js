import { createCategory } from './components/createCategory.js';
import { createHeader } from './components/createHeader.js';
import { createElement } from './helper/createElement.js';
import { fetchCategories } from './service/api.service.js';

const initApp = async () => {
	const headerParent = document.querySelector('.header');
	const appEl = document.querySelector('#app');

	const headerObj = createHeader(headerParent);
	const categoryObj = createCategory(appEl);
	console.log('categoryObj: ', categoryObj);

	

	const renderIndex = async event => {
		event?.preventDefault();
		const categories = await fetchCategories();
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
		categoryObj.unmount();
		headerObj.updateHeaderTitle('Новая категория');
	})
}

initApp();
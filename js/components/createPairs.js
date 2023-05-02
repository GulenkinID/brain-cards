import { createElement } from "../helper/createElement.js"

export const createPairs = (app) => {
	const pairs = createElement('section', {
		className: 'card section-offset',
	});

	const container = createElement('div', {
		className: 'container card__container',
	});

	const btnReturn = createElement('button', {
		className: 'card__return',
		ariaLabel: 'Возврат к категориям',
	});

	const btnCard = createElement('button', {
		className: 'card__item',
	});

	const cardFront = createElement('span', {
		className: 'card__front',
		textContent: 'улыбка'
	})

	const cardBack = createElement('span', {
		className: 'card__back',
		textContent: 'smile',
	});

	btnCard.append(cardFront, cardBack);
	container.append(btnReturn, btnCard);
	pairs.append(container);

	const mount = (data) => {
		app.append(pairs)
	};

	const unmount = () => {
		pairs.remove();
	};

	return {
		btnReturn,
		mount,
		unmount,
	}
}
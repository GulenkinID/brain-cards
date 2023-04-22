const API_URL = 'https://little-plain-colony.glitch.me';

export const fetchCategories = async () => {
	try {
		const response = await fetch(`${API_URL}/api/category`);

		if (!(response.status === 200 || response.status === 201)) {
			const error = response.json();
			throw error;
		}

		const categories = await response.json();
			return categories;
			
	} catch (error) {
		return { error };
	}
}
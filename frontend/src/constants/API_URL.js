const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api` || "http://localhost:4000/api";

const API_URL = {
	AUTH: {
		LOGIN: `${BASE_URL}/user/login`,
		REGISTER: `${BASE_URL}/user/register`,
	},
	PRODUCTS: {
		GET_PRODUCTS: `${BASE_URL}/products`,
	},
};

export default API_URL;

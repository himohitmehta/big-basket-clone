const categoriesList = [
	{
		title: "Fruits & Vegetables",
		key: "fruits-vegetables",
		subMenu: [
			{
				title: "Cuts & Sprouts",
				key: "fruits",
				subMenu: [
					{
						title: "Cut & Peeled Veggies",
					},
					{
						title: "Cut Fruit, Tender Coconut",
					},
					{
						title: "Fresh Salads & Sprouts",
					},
					{
						title: "Recipe Packs",
					},
				],
			},
			{
				title: "Exotic Fruits & Veggies",
				key: "exotic-fruits-veggies",
				subMenu: [
					{
						title: "Exotic Fruits",
					},
					{
						title: "Exotic Vegetables",
					},
				],
			},
			{
				title: "Flower Bouquets, Bunches",
				key: "flower-bouquets-bunches",
				subMenu: [
					{
						title: "Marigold",
					},
					{
						title: "Other Flowers",
					},
					{
						title: "Roses",
					},
				],
			},
			{
				title: "Fresh Fruits",
				key: "fresh-fruits",
				subMenu: [
					{
						title: "Apples & Pomegranate",
					},
					{
						title: "Banana, Sapota & Papaya",
					},
					{
						title: "Fruit Baskets",
					},
					{
						title: "Kiwi, Melon, Citrus Fruit",
					},
					{
						title: "Mangoes",
					},
					{
						title: "Seasonal Fruits",
					},
				],
			},
			{
				title: "Fresh Vegetables",
			},
			{
				title: "Herbs & Seasonings",
			},
			{
				title: "Organic Fruits & Vegetables",
			},
		],
	},
	{
		title: "Foodgrains, Oil & Masala",
		key: "foodgrains-oil-masala",
		subMenu: [
			{
				title: "Atta, Flours & Sooji",
				key: "atta-flours-sooji",
				subMenu: [
					{
						title: "Atta Whole Wheat",
					},
					{
						title: "Rice & Other Flours",
					},
					{
						title: "Sooji, Maida & Besan",
					},
				],
			},
			{
				title: "Dals & Pulses",
				key: "dals-pulses",
				subMenu: [
					{
						title: "Cereals & Millets",
					},
					{
						title: "Toor, Channa & Moong Dal",
					},
					{
						title: "Urad & Other Dals",
					},
				],
			},
			{
				title: "Dry Fruits",
				key: "dry-fruits",
				subMenu: [
					{
						title: "Almonds",
					},
					{
						title: "Cashews",
					},
					{
						title: "Mukhwas",
					},
					{
						title: "Other Dry Fruits",
					},
					{
						title: "Raisins",
					},
				],
			},
			{
				title: "Edible Oils & Ghee",
				key: "edible-oils-ghee",
				subMenu: [
					{
						title: "Blended Cooking Oils",
					},
					{ title: "Cold Pressed Oil" },
					{
						title: "Cooking Coconut Oil",
					},
					{
						title: "Cotton Seed Oil",
					},
					{
						title: "Ghee & Vanaspati",
					},
					{
						title: "Gingelly Oil",
					},
					{
						title: "Groundnut Oil",
					},
					{
						title: "Olive & Canola Oils",
					},
					{
						title: "Other Edible Oils",
					},
					{
						title: "Soya & Mustard Oils",
					},
					{
						title: "Sunflower, Rice Bran Oil",
					},
				],
			},
			{
				title: "Masalas & Spices",
				key: "masalas-spices",
				subMenu: [
					{
						title: "Blended Masalas",
					},
					{
						title: "Cooking Pastes",
					},
					{
						title: "Herbs & Seasoning",
					},
					{
						title: "Powdered Spices",
					},
					{
						title: "Whole Spices",
					},
				],
			},
			{
				title: "Organic Staples",
			},
			{
				title: "Rice & Rice Products",
			},
			{
				title: "Salt, Sugar & Jaggery",
			},
		],
	},

	{
		title: "Bakery, Cakes & Dairy",
		key: "bakery-cakes-dairy",
		subMenu: [
			{
				title: "Bakery Snacks",
			},
			{
				title: "Breads & Buns",
			},
			{
				title: "Cakes & Pastries",
			},
			{
				title: "Cookies, Rusk & Khari",
			},
			{
				title: "Dairy",
			},
			{
				title: "Gourmet Breads",
			},
			{
				title: "Ice Creams & Desserts",
			},
			{
				title: "Non Dairy",
			},
		],
	},
	{
		title: "Beverages",
		key: "beverages",
		subMenu: [
			{
				title: "Health Drink, Supplement",
			}, // write all the items in object as title: "item name"
			{
				title: "Energy & Soft Drinks",
			},
			{
				title: "Fruit Juices & Drinks",
			},
			{
				title: "Coffee",
			},
			{
				title: "Tea",
			},
			{ title: "Water" },
		],
	},
	{
		title: "Snacks & Branded Foods",
		key: "snacks-branded-foods",
		subMenu: [
			{
				title: "Biscuits & Cookies",
			},
			{
				title: "Breakfast Cereals",
			},
			{
				title: "Chocolates & Candies",
			},
			{
				title: "Frozen Veggies & Snacks",
			},
			{
				title: "Indian Mithai",
			},
			{
				title: "Noodle, Pasta, Vermicelli",
			},
			{
				title: "Pickles & Chutney",
			},
			{
				title: "Ready To Cook & Eat",
			},
			{
				title: "Snacks & Namkeen",
			},
			{
				title: "Spreads, Sauces, Ketchup",
			},
		],
	},
	{
		title: "Beauty & Hygiene",
		key: "beauty-hygiene",
		subMenu: [
			{ title: "Bath & Hand Wash" },
			{ title: "Feminine Hygiene" },
			{ title: "Fragrances & Deos" },
			{ title: "Hair Care" },
			{ title: "Health & Medicine" },
			{ title: "Makeup" },
			{ title: "Men's Grooming" },
			{ title: "Oral Care" },
			{ title: "Skin Care" },
		],
	},
	{
		title: "Cleaning & Household",
		key: "cleaning-household",
		subMenu: [
			{
				title: "All Purpose Cleaners",
			},
			{
				title: "Bins & Bathroom Ware",
			},
			{
				title: "Car & Shoe Care",
			},
			{
				title: "Detergents & Dishwash",
			},
			{
				title: "Disposables, Garbage Bag",
			},
			{
				title: "Fresheners & Repellents",
			},
			{
				title: "Mops, Brushes & Scrubs",
			},
			{
				title: "Party & Festive Needs",
			},
			{
				title: "Pooja Needs",
			},
			{
				title: "Stationery",
			},
		],
	},
	{
		title: "Kitchen, Garden & Pets",
		key: "kitchen-garden-pets",
		subMenu: [
			{
				title: "Appliances & Electricals",
			},
			{
				title: "Bakeware",
			},
			{
				title: "Cookware & Non Stick",
			},
			{
				title: "Crockery & Cutlery",
			},
			{
				title: "Flask & Casserole",
			},
			{
				title: "Gardening",
			},
			{
				title: "Kitchen Accessories",
			},
			{
				title: "Pet Food & Accessories",
			},
			{
				title: "Steel Utensils",
			},
			{
				title: "Storage & Accessories",
			},
		],
	},
	{
		title: "Eggs, Meat & Fish",
		key: "eggs-meat-fish",
		subMenu: [
			{ title: "Eggs" },
			{ title: "Fish & Seafood" },
			{ title: "Marinades" },
			{ title: "Mutton & Lamb" },
			{ title: "Pork & Other Meats" },
			{ title: "Poultry" },
			{ title: "Sausages, Bacon & Salami" },
		],
	},
	{
		title: "Gourmet & World Food",
		key: "gourmet-world-food",
		subMenu: [
			{ title: "Cereals & Breakfast" },
			{ title: "Chocolates & Biscuits" },
			{ title: "Cooking & Baking Needs" },
			{ title: "Dairy & Cheese" },
			{ title: "Drinks & Beverages" },
			{ title: "Oils & Vinegar" },
			{ title: "Pasta, Soup & Noodles" },
			{ title: "Sauces, Spreads & Dips" },
			{ title: "Snacks, Dry Fruits, Nuts" },
			{ title: "Tinned & Processed Food" },
		],
	},
	{
		title: "Baby Care",
		key: "baby-care",
		subMenu: [
			{
				title: "Baby Accessories",
			},
			{
				title: "Baby Bath & Hygiene",
			},
			{ title: "Baby Food & Formula" },
			{ title: "Diapers & Wipes" },
			{ title: "Feeding & Nursing" },
			{ title: "Mothers & Maternity" },
		],
	},
];
export default categoriesList;

export const getCategory = (key)=>{
	const category = categoriesList.find((category)=>category.key === key);
	return category;

}

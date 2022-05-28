export const removeTrailingCityName = (restaurantName: string, city: string): string => {
	const regExp = new RegExp(` ${city}`, 'i');

	return restaurantName.replace(regExp, '');
};

// Could also check for preceding umlaut characters with (?<![öäå]) just to be sure,
// but negative lookbehind does not seem to be supported in Safari
export const removeDishAttributes = (dish: string) => {
	const attributes = ['m', 'g', 'l', 'vl', 'vs'];
	const expStr = attributes.join('\\b|\\b');

	return dish.replace(new RegExp('(\\b' + expStr + '\\b)(?![öäå])', 'gi'), '');
};

export const isCity = (city: string): boolean => {
	return cities.includes(city.toLowerCase());
};

const cities = [
	'akaa',
	'alajärvi',
	'alavus',
	'espoo',
	'forssa',
	'haapajärvi',
	'haapavesi',
	'hamina',
	'hanko',
	'harjavalta',
	'heinola',
	'helsinki',
	'huittinen',
	'hyvinkää',
	'hämeenlinna',
	'iisalmi',
	'ikaalinen',
	'imatra',
	'joensuu',
	'jyväskylä',
	'jämsä',
	'järvenpää',
	'kaarina',
	'kajaani',
	'kalajoki',
	'kangasala',
	'kankaanpää',
	'kannus',
	'karkkila',
	'kaskinen',
	'kauhajoki',
	'kauhava',
	'kauniainen',
	'kemi',
	'kemijärvi',
	'kerava',
	'keuruu',
	'kitee',
	'kiuruvesi',
	'kokemäki',
	'kokkola',
	'kotka',
	'kouvola',
	'kristiinankaupunki',
	'kuhmo',
	'kuopio',
	'kurikka',
	'kuusamo',
	'lahti',
	'laitila',
	'lappeenranta',
	'lapua',
	'lieksa',
	'lohja',
	'loimaa',
	'loviisa',
	'maarianhamina',
	'mikkeli',
	'vilppula',
	'naantali',
	'nivala',
	'nokia',
	'nurmes',
	'närpiö',
	'orimattila',
	'orivesi',
	'oulainen',
	'oulu',
	'outokumpu',
	'paimio',
	'parainen',
	'parkano',
	'pieksämäki',
	'pietarsaari',
	'pori',
	'porvoo',
	'pudasjärvi',
	'pyhäjärvi',
	'raahe',
	'raasepori',
	'raisio',
	'rauma',
	'riihimäki',
	'rovaniemi',
	'saarijärvi',
	'salo',
	'sastamala',
	'savonlinna',
	'seinäjoki',
	'somero',
	'suonenjoki',
	'tampere',
	'tornio',
	'turku',
	'ulvila',
	'uusikaarlepyy',
	'uusikaupunki',
	'vaasa',
	'valkeakoski',
	'vantaa',
	'varkaus',
	'viitasaari',
	'virrat',
	'ylivieska',
	'ylöjärvi',
	'ähtäri',
	'äänekoski'
];

export const capitalizeString = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

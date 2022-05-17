export interface Dish {
	name: string;
	price: string;
	attributes: string[];
}

export interface Restaurant {
	id: string;
	name: string;
	openingHours: string;
	votes: number;
	dishes: Dish[];
}

export interface RestaurantResponse {
	alreadyVoted: string | null;
	date: string;
	restaurants: Restaurant[];
}

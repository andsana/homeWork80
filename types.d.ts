import Products from "./routers/categories";
export interface Category {
    id: string,
    name: string,
    description: string,
}

// export interface CategoryMutation {
//     name: string;
//     description: string;
// }

export type CategoryWithoutId = Omit<Category, 'id'>;

export interface Location {
    id: string,
    name: string,
    description: string,
}

export type LocationWithoutId = Omit<Location, 'id'>;

export interface Item {
    id: string,
    categoryId: string,
    localId: string,
    name: string,
    description: string,
    image: string | null,
}

export type ItemWithoutId = Omit<Item, 'id'>;


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

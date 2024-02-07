import {promises as fs} from 'fs';
import crypto from 'crypto';
import {CategoryWithoutId, ItemWithoutId, LocationWithoutId} from "./types";

interface DataBase {
    categories: CategoryWithoutId[];
    locations: LocationWithoutId[];
    items: ItemWithoutId[];
}

const filename = './db.json';

let data: DataBase = {
    categories: [],
    locations: [],
    items: [],
};

const fileDb = {
    async init() {
        try {
            const fileContenst = await fs.readFile(filename);
            data = JSON.parse(fileContenst.toString());
        } catch (e) {
            data = {
                categories: [],
                locations: [],
                items: [],
            };
        }
    },

    async getCategories() {
        return data.categories;
    },

    async addCategory(newCategory: CategoryWithoutId) {
        const id = crypto.randomUUID();
        const category = { id, ...newCategory };
        data.categories.push(category);
        await this.save();
        return category;
    },

    async getLocations() {
        return data.locations;
    },

    async addLocation(newLocation: LocationWithoutId) {
        const id = crypto.randomUUID();
        const location = { id, ...newLocation };
        data.locations.push(location);
        await this.save();
        return location;
    },
    async getItems() {
        return data;
    },
    async addItem(newItemData: ItemWithoutId) {
        const id = crypto.randomUUID();
        const newItem = { id, ...newItemData };
        data.items.push(newItem);
        await this.save();

        return newItem;
    },
    async save() {
        return await fs.writeFile(filename, JSON.stringify(data));
    }
};

export default fileDb;
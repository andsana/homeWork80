import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Category, CategoryWithoutId} from "./types";

const filename = './db.json';
let data: Category[] = [];

const fileDb = {
    async init() {
        try {
            const fileContenst = await fs.readFile(filename);
            data = JSON.parse(fileContenst.toString());
        } catch (e) {
            data = [];
        }
    },
    async getItems() {
        return data;
    },
    async addItem(item: CategoryWithoutId) {
        const id = crypto.randomUUID();
        const category = {id, ...item};
        data.push(category);
        await this.save();

        return category;
    },
    async save() {
        return fs.writeFile(filename, JSON.stringify(data));
    }
};

export default fileDb;
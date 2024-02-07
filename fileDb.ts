import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Item, ItemWithoutId} from "./types";


const filename = './db.json';
let data: Item[] = [];

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
    async addItem(newItemData: ItemWithoutId) {
        const id = crypto.randomUUID();
        const newItem = { id, ...newItemData };
        data.push(newItem);
        await this.save();

        return newItem;
    },
    async save() {
        return fs.writeFile(filename, JSON.stringify(data));
    }
};

export default fileDb;
import {Router} from "express";
import fileDb from "../fileDb";
import {ItemWithoutId} from "../types";
import {imagesUpload} from "../multer";
const itemsRouter = Router();

interface item {
    id: string,
    categoryId: string;
    localId: string;
    name: string,
    description: string,
}

itemsRouter.get('/', async (req, res) => {
    const items = await fileDb.getItems();
    res.send(items);
});

itemsRouter.get('/:id', (req, res) => {
    res.send('A single item by id');
});

itemsRouter.post('/', imagesUpload.single('image'), async (req, res) => {
    const item: ItemWithoutId = {
        categoryId: req.body.categoryId,
        localId: req.body.localId,
        name: req.body.name,
        description: req.body.description,
        image: req.file ? req.file.filename : null,
    };

    const newItem = await fileDb.addItem(item);
    res.send(newItem);
});

export default itemsRouter;
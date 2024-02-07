import { Router } from 'express';
import fileDb from '../fileDb';
import { CategoryWithoutId } from '../types';
import { imagesUpload } from '../multer';

const categoriesRouter = Router();

categoriesRouter.get('/', async (req, res) => {
    const categories = await fileDb.getCategories();
    res.send(categories);
});

categoriesRouter.get('/:id', (req, res) => {
    res.send('A single category by id');
});

categoriesRouter.post('/', imagesUpload.single('image'), async (req, res) => {
    const category: CategoryWithoutId = {
        name: req.body.name,
        description: req.body.description,
    };

    const newCategory = await fileDb.addCategory(category);
    res.send(newCategory);
});

export default categoriesRouter;

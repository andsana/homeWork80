import { Router } from 'express';
import fileDb from '../fileDb';
import { LocationWithoutId } from '../types';

const locationsRouter = Router();

locationsRouter.get('/', async (req, res) => {
    const locations = await fileDb.getLocations();
    res.send(locations);
});

locationsRouter.get('/:id', (req, res) => {
    res.send('A single location by id');
});

locationsRouter.post('/', async (req, res) => {
    const location: LocationWithoutId = {
        name: req.body.name,
        description: req.body.description,
    };

    const newLocation = await fileDb.addLocation(location);
    res.send(newLocation);
});

export default locationsRouter;

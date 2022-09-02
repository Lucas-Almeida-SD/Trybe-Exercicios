import express, { Request, Response, NextFunction } from 'express';
import rescue from 'express-rescue';
import PlantsController from './controllers/PlantsController';

const app = express();
app.use(express.json());

const plant = 'plant';

app.get('/plants', rescue(PlantsController.getPlants));
app.get(`/${plant}/:id`, rescue(PlantsController.getPlantById));
app.get('/sunny/:id', rescue(PlantsController.getPlantsThatNeedsSunWithId));
app.post(`/${plant}`, rescue(PlantsController.savePlant));
app.put(`/${plant}/:id`, rescue(PlantsController.editPlant));
app.delete(`/${plant}/:id`, rescue(PlantsController.removePlantById));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { message, name } = err;

  if (name === 'errorObject') {
    const { code, message: myMessage } = JSON.parse(message);

    return res.status(code).json({ message: myMessage });
  }

  res.status(500).json({ message });
});

export default app;

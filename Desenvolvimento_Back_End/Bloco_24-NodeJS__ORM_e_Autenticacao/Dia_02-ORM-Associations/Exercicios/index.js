const bodyParser = require('body-parser');

const express = require('express');

const PatientRouter = require('./routers/PatientRouter');
const PatientSurgeryRouter = require('./routers/PatientSurgeryRouter');
const PlanRouter = require('./routers/PlanRouter');
const SurgeryRouter = require('./routers/SurgeryRouter');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', PatientRouter);
app.use('/patient-surgeries', PatientSurgeryRouter);
app.use('/plans', PlanRouter);
app.use('/surgeries', SurgeryRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
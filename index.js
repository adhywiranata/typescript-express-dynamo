const app = require('./build/app').default;
const PORT = 3000;

app.listen(PORT, () => {
  console.log('RUNNING ON PORT ' + PORT);
});
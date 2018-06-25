const app = require('./build/app').default;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('RUNNING ON PORT ' + PORT);
});
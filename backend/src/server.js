import app from './app';

app.get("/", (req, res) => res.send("Express on Vercel"));
const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;

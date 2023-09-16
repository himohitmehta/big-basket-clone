import express from "express";
import cors from "cors";

const app = express();
const corsOptions = {
	origin:  "*",

};

app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});

export default app;
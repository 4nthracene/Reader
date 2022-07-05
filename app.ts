import express from "express";
import CONFIG from "./Configurations";
import router from "./Routes";

async function main() {
	const app = express();
	app.use(router);
	app.listen(CONFIG.PORT, () => {
		console.log(`[SERVER]: Listening on port ${CONFIG.PORT}`)
	});
};

main();


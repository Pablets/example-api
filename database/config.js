const mongoose = require('mongoose');

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } =
	process.env;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const options = {
	useNewUrlParser: true,
	reconnectTries: Number.MAX_VALUE,
	reconnectInterval: 500,
	connectTimeoutMS: 10000,
};

const dbConnection = async () => {
	try {
		await mongoose.connect(url, options);

		console.log(`Base de datos online`);
	} catch (error) {
		console.log(error);
		throw new Error('Error a la hora de inicializar la base de datos');
	}
};

module.exports = {
	dbConnection,
};

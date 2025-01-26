const { readFileSync } = require("fs");

// read ../.env file and get the endpoint url
// export it as schema
const ctn = readFileSync("./craft/.env", "utf8");
const REGEX = /ENDPOINT_URL=\s*(.*)\s*/;

module.exports = {
	schema: ctn.match(REGEX)[1],
};
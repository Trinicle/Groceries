const { DynamoDBClient, ListTablesCommand, GetItemCommand, PutItemCommand, TransactWriteItemsCommand, UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
require('dotenv').config();

const client = new DynamoDBClient({
	region: 'us-east-2',
	credentials: {
		accessKeyId: process.env.ACCESS_KEY,
		secretAccessKey: process.env.SECRET_ACCESS_KEY
	}
});

console.log("Running")
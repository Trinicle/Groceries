const { DynamoDBClient, ListTablesCommand, GetItemCommand, PutItemCommand, TransactWriteItemsCommand, UpdateItemCommand, BatchGetItemCommand } = require("@aws-sdk/client-dynamodb");
require('dotenv').config();

const client = new DynamoDBClient({
	region: 'us-east-2',
	credentials: {
		accessKeyId: process.env.ACCESS_KEY,
		secretAccessKey: process.env.SECRET_ACCESS_KEY
	}
});

const bcrypt = require('bcrypt');
const salt = Number(process.env.SALT);

const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 3000");
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
	const username = req.body.username;
	const password = req.body.password;
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const picture = req.body.picture;
	const title = req.body.title.name;
	const error = req.body.error;

	const params = {
		TableName: 'groc_users',
		Key: {
			Username: { S: username }
		}
	}
	const listParams = {
		TableName: 'groc_userLists',
		Item: {
			"Username": { S: username }, 
			"List": { L: [{
				M: {
					Name: { S: "Basic List" },
					Groceries: { L: [] }
				}
			}] }
		}
	}
	if (error) {
		resp.send({
			"error": true
		})
		return
	}
	try {
		const command = new GetItemCommand(params);
		const data = await client.send(command);

		const user = data?.Item;
		if (!user) {
			const hashed = await bcrypt.hash(password, salt)
			const params = {
				TableName: 'groc_users',
				Item: {
					"Username": { S: username },
					"HashedPassword": { S: hashed },
					"FirstName": { S: firstname },
					"LastName": { S: lastname },
					"Title": { S: title },
					"Picture": { S: picture ? picture : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" },
					"Lists": { L: [{ S: "Basic List" }] },
					"Favorites": { L: [] },
					"Recipes": { L: [] },
				}
			}
			const command = new PutItemCommand(params);
			const data = await client.send(command);

			const listCommand = new PutItemCommand(listParams);
			const listData = await client.send(listCommand);

			resp.send({
				"error": false
			})
		} else {
			resp.send({
				"error": true
			})
		}
	} catch (err) {
		console.log(err)
		return
	}
});

app.post("/login", async (req, resp) => {
	const username = req.body.username;
	const password = req.body.password;

	const params = {
		TableName: 'groc_users',
		Key: {
			Username: { S: username }
		}
	}

	try {
		const command = new GetItemCommand(params);
		const data = await client.send(command);
		const user = data?.Item

		if (user) {
			const isMatch = bcrypt.compare(password, user.HashedPassword.S)
			resp.send({
				"matched": isMatch
			})
		} else {
			resp.send({
				"message": `${username} does not have a login!`,
				"matched": false
			})
			return;
		}
	} catch (err) {
		console.log(err)
		resp.send({
			"message": `Error occured`,
			"matched": false
		})
		return
	}
});

app.get("/home/:user", async (req, resp) => {
	const username = req.params.user;

	const params = {
		TableName: 'groc_users',
		Key: {
			Username: { S: username }
		}
	}

	try {
		const command = new GetItemCommand(params);
		const data = await client.send(command);

		const userData = data?.Item;

		const listParams = {
			TableName: 'groc_userLists',
			Key: {
				Username: { S: username }
			}
		}

		const listCommand = new GetItemCommand(listParams);
		const listData = await client.send(listCommand);
		const userListData = listData?.Item;

		const lists = []
		userListData.List.L.forEach(item => {
			lists.push({
				Name: item.M.Name.S,
				Groceries: item.M.Groceries.L,
			})
		})

		const Response = {
			Username: userData.Username.S,
			FirstName: userData.FirstName.S,
			LastName: userData.LastName.S,
			Picture: userData.Picture.S,
			Title: userData.Title.S,
			Lists: lists,
			Favorites: userData.Favorites.L,
			Recipes: userData.Recipes.L,
		}

		resp.send({ Response })
	} catch (err) {
		console.log(err)
	}
})

app.post("/home", async (req, resp) => {
	const username = req.body.username;
	const groceryName = req.body.groceryName;
	const groceryQuantity = req.body.quantity;

	const params = {
		TableName: 'groc_users',
		Key: {
			Username: { S: username }
		},
		UpdateExpression: "SET Groceries = list_append(Groceries, :vals)",
		ExpressionAttributeValues: {
			':vals': {
				L: [{
					M: {
						GroceryName: { S: groceryName },
						GroceryQuantity: { S: groceryQuantity },
					}
				}]
			},
		},
		ReturnValues: 'UPDATED_NEW',
	}

	try {
		const command = new UpdateItemCommand(params);
		let results = await client.send(command);
		results = results.Attributes
		resp.send({results})
	} catch (err) {
		console.log(err)
	}
})
app.listen(5000);
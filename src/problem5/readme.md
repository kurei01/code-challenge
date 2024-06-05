## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:5035](http://localhost:3000) to view api

you can check this api on postman or everywhere

ModelUser: 
{
	name: string `<required>,`
	email: string`<required>,`
}

**Create a user: POST**

http://localhost:5035/api/user

**Get list user: GET**

http://localhost:5035/api/users

**Get a user by id: GET**

http://localhost:5035/api/user/:userId

**Update a user by id: PATCH**

http://localhost:5035/api/user/:userId

**Delete a user by id: DELETE**

http://localhost:5035/api/user/:userId

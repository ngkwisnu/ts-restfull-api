# User API Spec

## Register User

Endpoint: POST /api/v1/users/register

Request Body:

```json
{
  "username": "string",
  "password": "string",
  "name": "string"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "string",
    "name": "string"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Username is already exist!, please choone any one.."
}
```

## Login User

Endpoint: POST /api/v1/users/login

Request Body:

```json
{
  "username": "string",
  "password": "string"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "string",
    "name": "string",
    "token": "Wz8XyV4pQ7M3nB1zL9KdA2rF5gU"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Login failed, ..."
}
```

## Get User

Endpoint: GET /api/v1/users/current

Request Header:

- X-API-TOKEN: token

Response Body (Success):

```json
{
  "data": {
    "username": "string",
    "name": "string"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "User not found!, ..."
}
```

## Update User

Endpoint: PUT /api/v1/users/current

Request Header:

- X-API-TOKEN: token

Request Body:

```json
{
  "username": "string",
  "password": "string"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "string",
    "name": "string"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Update user failed, ..."
}
```

## Logout User

Endpoint: DELETE /api/v1/users/logout

Response Body (Success):

```json
{
  "message": "logout successfully!, ..."
}
```

Response Body (Failed):

```json
{
  "errors": "Logout failed!, ..."
}
```

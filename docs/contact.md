# Contact API Spec

## Create Contact

Endpoint: POST /api/v1/contact

Request Header:

- X-API-TOKEN: token

Request Body:

```json
{
  "fullname": "string",
  "lastname": "string",
  "email": "string",
  "phone": "string"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "fullname": "string",
    "lastname": "string",
    "email": "string",
    "phone": "string",
    "created_at": "2024-10-02T14:30:00+07:00",
    "updated_at": "2024-10-02T14:30:00+07:00",
    "is_active: true"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Error when create new contact.."
}
```

## Get Contact

Endpoint: GET /api/v1/users/login/{id}

Request Header:

- X-API-TOKEN: token

Response Body (Success):

````json
{
  "data": {
    "id": 1
    "fullname": "string",
    "lastname": "string",
    "email": "string",
    "phone": "string",
    "created_at": "2024-10-02T14:30:00+07:00",
    "updated_at": "2024-10-02T14:30:00+07:00",
    "is_active: true"
  }
}

Response Body (Failed):

```json
{
  "errors": "Contact is not found!, ..."
}
````

## Update Contact

Endpoint: PUT /api/v1/contact/{id}

Request Header:

- X-API-TOKEN: token

Request Body:

```json
{
  "fullname": "string",
  "lastname": "string",
  "email": "string",
  "phone": "string"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "fullname": "string",
    "lastname": "string",
    "email": "string",
    "phone": "string",
    "created_at": "2024-10-02T14:30:00+07:00",
    "updated_at": "2024-10-02T14:30:00+07:00",
    "is_active: true"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Failed when update data contact!, ..."
}
```

## Remove Contact

Endpoint: DELETE /api/v1/contact/{id}

Request Header:

- X-API-TOKEN: token

Response Body (Success):

```json
{
  "message": "logout successfully!, ..."
}
```

Response Body (Failed):

```json
{
  "errors": "Remove contact is failed, ..."
}
```

## Search Contact

Endpoint: GET /api/v1/contact

Request Header:

- X-API-TOKEN: token

Query Params:

- name : string, contact first name or contact last name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- limit : number, default 10

Response Body (Success):

```json
{
  "data": [
    {
        "id": 1,
        "fullname": "string",
        "lastname": "string",
        "email": "string",
        "phone": "string",
        "created_at": "2024-10-02T14:30:00+07:00",
        "updated_at": "2024-10-02T14:30:00+07:00",
        "is_active: true"
    },
    {
        "id": 1,
        "fullname": "string",
        "lastname": "string",
        "email": "string",
        "phone": "string",
        "created_at": "2024-10-02T14:30:00+07:00",
        "updated_at": "2024-10-02T14:30:00+07:00",
        "is_active: true"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "current_page": 1,
    "total_page": 10
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Unautorized!, ..."
}
```

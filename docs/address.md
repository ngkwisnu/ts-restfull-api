# Contact API Spec

## Create Address

Endpoint: POST /api/v1/{idContact}/addresses

Request Header :

- X-API-TOKEN: token

Request Body :

```json
{
  "street": "string",
  "city": "string",
  "province": "string",
  "country": "string",
  "postal_code": "string"
}
```

Response (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "string",
    "city": "string",
    "province": "string",
    "country": "string",
    "postal_code": "string"
  }
}
```

Response (Failed) :

```json
{
  "errors": "Failed when create data address!, ..."
}
```

## Update Address

Endpoint: PUT /api/v1/{idContact}/addresses/{idAddress}

Request Header :

- X-API-TOKEN: token

Request Body :

```json
{
  "street": "string",
  "city": "string",
  "province": "string",
  "country": "string",
  "postal_code": "string"
}
```

Response (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "string",
    "city": "string",
    "province": "string",
    "country": "string",
    "postal_code": "string"
  }
}
```

Response (Failed) :

```json
{
  "errors": "Failed when update data address!, ..."
}
```

## Get Address

Endpoint: GET /api/v1/{idContact}/addresses/{idAddress}

Request Header :

- X-API-TOKEN: token

Response (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "string",
    "city": "string",
    "province": "string",
    "country": "string",
    "postal_code": "string"
  }
}
```

Response (Failed) :

```json
{
  "errors": "Address is not found!, ..."
}
```

## Remove Address

Endpoint: DELETE /api/v1/{idContact}/addresses/{idAddress}

Request Header :

- X-API-TOKEN: token

Response (Success) :

````json
{
  "data": "Address has ben deleted!"
}

Response (Failed) :

```json
{
  "data": "Failed when remove address!"
}
````

## List Address

Endpoint: GET /api/v1/{idContact}/addresses

Request Header :

- X-API-TOKEN: token

Response (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "string",
      "city": "string",
      "province": "string",
      "country": "string",
      "postal_code": "string"
    },
    {
      "id": 2,
      "street": "string",
      "city": "string",
      "province": "string",
      "country": "string",
      "postal_code": "string"
    }
  ]
}
```

Response (Failed) :

```json
{
  "data": "Something wrong!"
}
```

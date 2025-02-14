# API Documentation

## Endpoint: `POST /users/register`

### Description

This endpoint is used to register a new user.

### Request Body

The request body should be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min length: 3)",
    "lastname": "string (optional, min length: 3)"
  },
  "email": "string (valid email format)",
  "password": "string (min length: 6)"
}
```

### Response

- **201 Created**

  - **Description:** User registered successfully.
  - **Body:**
    ```json
    {
      "token": "string",
      "user": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string",
        "socketId": "string (optional)"
      }
    }
    ```

- **400 Bad Request**
  - **Description:** Validation error.
  - **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "string"
        }
      ]
    }
    ```

### Example Request

```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

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

## Endpoint: `POST /users/login`

### Description

This endpoint is used to log in an existing user.

### Request Body

The request body should be a JSON object with the following structure:

```json
{
  "email": "string (valid email format)",
  "password": "string (min length: 6)"
}
```

### Response

- **200 OK**

  - **Description:** User logged in successfully.
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

- **401 Unauthorized**
  - **Description:** Invalid email or password.
  - **Body:**
    ```json
    {
      "msg": "Invalid email or password"
    }
    ```

### Example Request

```bash
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
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

## Endpoint: `GET /users/profile`

### Description

This endpoint is used to get the profile of the logged-in user.

### Request Headers

- **Authorization:** Bearer token

### Response

- **200 OK**

  - **Description:** User profile retrieved successfully.
  - **Body:**
    ```json
    {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "socketId": "string (optional)"
    }
    ```

- **401 Unauthorized**
  - **Description:** Unauthorized access.
  - **Body:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### Example Request

```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer <token>"
```

### Example Response

```json
{
  "_id": "60d0fe4f5311236168a109ca",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

## Endpoint: `GET /users/logout`

### Description

This endpoint is used to log out the current user.

### Request Headers

- **Authorization:** Bearer token

### Response

- **200 OK**

  - **Description:** User logged out successfully.
  - **Body:**
    ```json
    {
      "message": "logout successfully"
    }
    ```

- **401 Unauthorized**
  - **Description:** Unauthorized access.
  - **Body:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### Example Request

```bash
curl -X GET http://localhost:3000/users/logout \
-H "Authorization: Bearer <token>"
```

### Example Response

```json
{
  "message": "logout successfully"
}
```

## Endpoint: `POST /captains/register`

### Description

This endpoint is used to register a new captain.

### Request Body

The request body should be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min length: 3)",
    "lastname": "string (optional, min length: 3)"
  },
  "email": "string (valid email format)",
  "password": "string (min length: 6)",
  "vehicle": {
    "color": "string (min length: 3)",
    "plate": "string (min length: 3)",
    "capacity": "number (min: 1)",
    "vehicleType": "string (one of: 'car', 'motorbike', 'auto')"
  }
}
```

### Response

- **201 Created**

  - **Description:** Captain registered successfully.
  - **Body:**
    ```json
    {
      "token": "string",
      "captain": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "number",
          "vehicleType": "string"
        }
      }
    }
    ```

- **400 Bad Request**
  - **Description:** Validation error or captain already exists.
  - **Body:**
    ```json
    {
      "message": "string"
    }
    ```

### Example Request

```bash
curl -X POST http://localhost:3000/captains/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

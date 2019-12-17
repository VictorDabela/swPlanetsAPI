# swPlanetsAPI
API for managing a mongoDB Star Wars planets database.

This API was built primary for creating planets of the Star Wars universe on a mongoDB database hosted on MongoDB Atlas. The API itself is hosted on Heroku.

It allows the operations:

- Add a new planet, containing its name, its weather and terrains;

- List planets;

- List planet by name;

- List planet by Id;

- Remove planet.

# Starting

As mentioned earlier, the API is hosted on Heroku, so the base URL is:

https://starwars-planets-dabela.herokuapp.com

# Methods

**Create Planet**
----

* **URL**

  /planets/
  
  * **Method:**

  `POST`
  
*  **URL Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ Planet }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    `{ "success": false,
    "message": "Planeta 'Tatooine' já está cadastrado." }`

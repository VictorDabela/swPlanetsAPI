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
  Creates a new planet on the Planets collection.
  
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
    **Content:** `{ "success": false, "message": "Planeta 'Tatooine' já está cadastrado." }`
    
----

**List all planets**
----
  Returns a list of *ALL* the planets registered on the collection.
  
* **URL**

  /planets/
  
  * **Method:**

  `GET`
  
*  **URL Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ success: true, [Planets] }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**  `{success: false, error: error message}}`
    
    
----

**List planet by ID**
----
  Return json data about a single planet registered on the collection, searching by it's ID.
  
* **URL**

  /planets/id/:id
  
  * **Method:**

  `GET`
  
*  **URL Params**

  **Required:**
 
   `id=[ObjectId]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ success: true, [Planet] }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ success: false, error: error message} }`
    
  * **Code:** 404 NOT FOUND <br />
  **Content:**  `{ success: false, message: `Planeta id={id} não encontrado.` }`
        
    
----

**List planet by NAME**
----
  Return json data about a single planet registered on the collection, searching by it's NAME.
  
* **URL**

  /planets/nome/:nome
  
  * **Method:**

  `GET`
  
*  **URL Params**

  **Required:**
 
   `nome=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ success: true, [Planet] }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ success: false, error: error message} }`
    
  * **Code:** 404 NOT FOUND <br />
  **Content:**  `{ success: false, message: `Planeta {nome} não encontrado.` }`
          
    
----

**Remove Planet**
----
  Remove a planet from the collection.
  
* **URL**

  /planets/:nome
  
  * **Method:**

  `DELETE`
  
*  **URL Params**

  **Required:**
 
   `nome=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "success": true, "message": "Planeta {nome} removido com sucesso." }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{success: false, error: error message} }`
    
  * **Code:** 404 NOT FOUND <br />
  **Content:**  `{ success: false, message: `Planeta não encontrado.` }`

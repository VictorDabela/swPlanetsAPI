# swPlanetsAPI
API for managing a mongoDB Star Wars planets database.

This API was built primary for creating planets of the Star Wars universe on a mongoDB database hosted on MongoDB Atlas. The API itself is hosted on Heroku.

It allows the operations:

* Add a new planet, containing its name, its weather and terrains;

* List planets;

* List planet by name;

* List planet by Id;

* Remove planet.

# Starting

As mentioned earlier, the API is hosted on Heroku, so the base URL is:

https://starwars-planets-dabela.herokuapp.com

# Methods

**Create Planet**
----
  Creates a new planet on the Planets collection.  The method will consult the Star Wars API (https://swapi.co/) to check on how many Star Wars movies it has appeared, and add the result as an integer attribute of the iten on the database ("filmesAparicoes"). 
  
* **URL**

  /planets/
  
* **Method:**

    `POST`
  
*  **URL Params**

    None
  
*  **Data Params**

   **Required:**
 
   `nome=[string]`
   
   **Optional:**
  
    * `clima=array[string]`
    * `terreno=array[string]`
   
* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{ "success": true, [Planet] }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "success": false, "message": "Planeta {Planet.nome} já está cadastrado." }`
    
* **Sample Call:**

    ```
        url: "/planets",
        dataType: "json",
        type : "POST",
        body: 
        {
        "nome": "Tatooine",
        "clima": ["Árido", "Desértico"],
        "terreno": ["deserto", "montanhoso", "caatinga"]
        }

    ``` 
    
----

**List all planets**
----
  Returns a list of *ALL* the planets registered on the collection.
  
*  **URL**

   /planets/
  
*  **Method:**

   `GET`
  
*  **URL Params**

   None

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{ "success": true, [Planets] }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**  `{"success": false, error: error message}}`

* **Sample Call:**

    ```
    url: "/planets",
        dataType: "json",
        type : "GET",
        response-body: 
    {
        "success": true,
        "planets": [
            {
                "clima": [
                    "Tropical",
                    "Temperado"
                ],
                "terreno": [
                    "Florestas",
                    "Oceano"
                ],
                "_id": "5dfb7efec82e9f00178c23f0",
                "nome": "endor",
                "filmesAparicoes": 1,
                "createdAt": "2019-12-19T13:45:34.473Z",
                "updatedAt": "2019-12-19T13:45:34.473Z",
                "__v": 0
            },
            {
                "clima": [
                    "Árido",
                    "Desértico"
                ],
                "terreno": [
                    "deserto",
                    "caatinga"
                ],
                "_id": "5dfb7d81c82e9f00178c23ef",
                "nome": "tatooine",
                "filmesAparicoes": 5,
                "createdAt": "2019-12-19T13:39:13.671Z",
                "updatedAt": "2019-12-19T13:39:13.671Z",
                "__v": 0
            }
        ]
    }

    ```
    
    
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

  * **Code:** 200 OK<br />
    **Content:** `{ "success": true, [Planet] }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "success": false, error: error message} }`
    
  * **Code:** 404 NOT FOUND <br />
    **Content:**  `{ "success": false, error: "Planeta id={id} não encontrado." }`
        
* **Sample Call:**

    ```
    url: "/planets/id/:id",
    dataType: "json",
    type : "GET",
    response-body: 
    {
      "success": true,
      "planet": {
      "clima": [
          "Tropical",
          "Temperado"
      ],
      "terreno": [
          "Florestas",
          "Oceano"
      ],
      "_id": "5dfb7efec82e9f00178c23f0",
      "nome": "endor",
      "filmesAparicoes": 1,
      "createdAt": "2019-12-19T13:45:34.473Z",
      "updatedAt": "2019-12-19T13:45:34.473Z",
      "__v": 0
      }
    }
    
    ```   
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

  * **Code:** 200 OK<br />
    **Content:** `{ "success": true, [Planet] }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "success": false, error: error message} }`
    
  * **Code:** 404 NOT FOUND <br />
    **Content:**  `{ "success": false, error: "Planeta {nome} não encontrado." }`

  * **Sample Call:**

      ```
      url: "/planets/id/:nome",
      dataType: "json",
      type : "GET",
      response-body: 
      {
          "success": true,
          "planet": [
          {
              "clima": [
                  "Árido",
                  "Desértico"
              ],
              "terreno": [
                  "deserto",
                  "caatinga"
              ],
              "_id": "5dfb7d81c82e9f00178c23ef",
              "nome": "tatooine",
              "filmesAparicoes": 5,
              "createdAt": "2019-12-19T13:39:13.671Z",
              "updatedAt": "2019-12-19T13:39:13.671Z",
              "__v": 0
          }
            ]
      }
      
      ```            
    
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

  * **Code:** 200 OK<br />
    **Content:** `{ "success": true, "message": "Planeta {nome} removido com sucesso." }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "success": false, error: error message} }`
    
  * **Code:** 404 NOT FOUND <br />
    **Content:**  `{ "success": false, error: "Planeta não encontrado." }`

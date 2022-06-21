# **To run application**
    - create .env with content from env.example
    - docker-compose up
    - view api docs at: http://localhost:8080/api/docs/

# **To test apis**
    1) Register new user
        POST http://localhost:8080/api/auth/register
        Params: email, password

    2) Login
        POST http://localhost:8080/auth/login
        Params: email, password

    3) Get list of shared movie
        GET http://localhost:8080/movie/list
        
    4) Share a movie (require login firstly)
        POST http://localhost:8080/movie/share
        BODY PARAMS: url
        AUTH: Bearer TOKEN_RETURNED_AFTER_LOGIN
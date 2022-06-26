# **Description**
A full MERN stack boilerplate for web apps that inclues authentication system. An logged in user can share your favorite youtube video with others.

# **Tech stack**
- Node.js - Express Framework
- React.js
- MongoDB
- Nginx
- Docker
- Tesing with mocha, chai, sinon

# **To run application**
    - create .env with content from env.example inside src/backend folder
    - docker-compose up
    - view api docs at: http://localhost:8080/api/docs/

# **To test apis**
    1) Register new user
        POST http://localhost:8080/api/auth/register
        Params: email, password

    2) Login
        POST http://localhost:8080/ap/iauth/login
        Params: email, password

    3) Get list of shared movie
        GET http://localhost:8080/api/movie/list
        
    4) Share a movie (require login firstly)
        POST http://localhost:8080/api/movie/share
        BODY PARAMS: url
        AUTH: Bearer TOKEN_RETURNED_AFTER_LOGIN
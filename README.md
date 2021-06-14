## Technologies 
Backend

- Spring Boot (v2.3.3)
- Spring Data JPA
- Spring Validation
- Spring Security + JWT Token
- H2
- Mapstruct
- Lombok
- Swagger

Frontend
- React v16...
- React Bootstrap v4...
- Date Picker
- React-Hooks

## Run the Application

## Installation
- you need to have installed docker engine,
- you need to have installed <a href="https://docs.docker.com/compose/install/">docker-compose
</a>
```bash
$ git pull repository 
$ cd {installed folder}


$ docker-compose up -d 
```
this command will build and run 2 services(frontend and backend) for application

Finally open <a href="localhost:3000">localhost:3000</a> in your browser after a while.
You need to create account and log in before start working with bookings.

Application uses in-memory H2 database. It was in requirements.

Task is completed for dates. Time ranges are also possible to implement. Just need to add some more logic. But I was out of time and didn't do it.
Enjoy.

# Tasks Api

## Installation

`npm install`

Create `.env` and set your environment variables

## Start

`npm start`

## API´s EndPoints

### Create a new Task

`POST /api/v1/tasks`

Body:

`id:`

`author:`

`description:`

Params:

`None`

### Update Task

`PUT /api/v1/tasks/:id`

Body:

`author:`

`description:`

Params:

`:id`

### Delete Task

`DELETE /api/v1/tasks/:id`

Body:

`None:`

Params:

`:id`

### Find Task by id

`GET /api/v1/tasks/:id`

Body:

`None`

Params:

`None`

### Find all task

`GET /api/v1/tasks`

Body:

`None`

Params:

`None`

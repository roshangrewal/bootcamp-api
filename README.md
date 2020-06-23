![node.js is shiny](http://roshangrewal.com/junk/node.gif)

Credit: [Brad Traversy Course](https://github.com/bradtraversy)

# Bootcamp API

> Backend API for DevCamper application, which is a bootcamp directory website

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

`npm install`

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Demo

The API is live at [Final Deployed Project](https://bootcamp-rest-api.herokuapp.com)

Extensive documentation with examples and API endpoints [Postman Documentation](https://documenter.getpostman.com/view/7488880/Szzoavng?version=latest)

Documentation only [Link](http://roshangrewal.com/bootcamp/)

Report issues [here](https://github.com/roshangrewal/bootcamp-api/issues)

E-mail me if any help required: roshangrewal@hotmail.com

- Version: 1.0.0

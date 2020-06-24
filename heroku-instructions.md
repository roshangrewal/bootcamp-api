## Instruction for heroku deployment

`heroku login`

`heroku create bootcamp-rest-api`

`git add .`

`git commit -m 'final build'`

`git push heroku master`

`heroku open`

`heroku logs --tail`

`vim Procfile` -> `web: node server.js`

`heroku ps`

Add all configuration inside `Config Vars`

Done... :)

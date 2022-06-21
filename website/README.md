# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Data providers

### Data provider endpoint
The data providers are served using the nifty little github pages feature that allows for a static json file beeing returned as application/json automatically from within a folder.

* The folder should be named as the intended endpoint.
* Put the json file in the folder and name it to `index.json`

Using this feature we serve the dataproviders as an endpoint from using the `index.json` file in `static/api/dataproviders/` folder (deployed to gh-pages as `/api/dataproviders`).

### Add a Data Provider
To add a data provider you need update the file [static/api/dataproviders/index.json](static/api/dataproviders/index.json)

View the specification for the dataprovider endpoint in [Swagger editor](https://editor.swagger.io/?url=https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI-Specification-DataProviders.yml).

The field `id` is arbitrary so until a certain standard is agreed upon, any (not already existing) string will suffice. We reccomend just incrementing the already existing index counter.
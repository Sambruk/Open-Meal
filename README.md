# Open Meal

Repository and site are under construction.

Site based on the [jekyll-docs-template](http://bruth.github.io/jekyll-docs-template/).

View specification in [Swagger editor](https://editor.swagger.io/?url=https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI-Specification.yml).


## Dataprovider
View the specification for the dataprovider endpoint in [Swagger editor](https://editor.swagger.io/?url=https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI-Specification-DataProviders.yml).

### Data provider endpoint
The data providers are served using the nifty little github pages feature that allows for a static json file beeing returned as application/json automatically from within a folder.

* The folder should be named as the intended endpoint.
* Put the json file in the folder and name it to `index.json`

Using this feature we serve the dataproviders as an endpoint from `index.json` file located in [website/static/api/dataproviders/](website/static/api/dataproviders/) folder (deployed to gh-pages as `/api/dataproviders`).

### Add a Data Provider
To add a data provider you need update the file [website/static/api/dataproviders/index.json](website/static/api/dataproviders/index.json)


The field `id` is arbitrary so until a certain standard is agreed upon, any (not already existing) string will suffice. We reccomend just incrementing the already existing index counter.
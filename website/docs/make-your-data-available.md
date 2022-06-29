---
sidebar_position: 7
---

# Making your data available
Your data is made availble by exposing the endpoints defined in the OpenAPI specification. See the full specification of the data provider API:
- As a [raw yml file](https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI-Specification-DataProviders.yml)
- In the [Swagger Editor](https://editor.swagger.io/?url=https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI-Specification-DataProviders.yml)

It is up to your organization to create the implementation that collect, formats and provide the data according to the specification.

When your service is implemented you can make your service known to the public by adding it to the file containing data providers in the github repo.

## Add a Data Provider
In order to appear as a data provider your info must be added to github repo file [/website/static/api/dataproviders/index.json](https://github.com/Sambruk/Open-Meal/tree/main/website/static/api/dataproviders/index.json).

If you want to be added to the list of data providers, [CREATE AN ISSUE](https://github.com/Sambruk/Open-Meal/issues) in the project or contact any of the project members for assistance.

*Note: The id property is arbitrary and until a general concent on what format to use is agreed upon. Until then, any string can be used. Prefferably in the form of a increasing number starting from "0"*
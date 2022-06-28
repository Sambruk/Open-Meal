---
sidebar_position: 3
---

# Data Providers

A data provider is an implementor of the API that can enable access to organisations and third-party developers interested in using it.

## Known Data Providers

You can issue a GET request to the following URL to get an up-to-date list of dataProviders supporting version 3.x of the Open Meal API.

It will list a number of properties including the `baseUrl` which should be used in all Open Meal requests towards the provider.

```
GET https://sambruk.github.io/Open-Meal/api/dataproviders/
```

See the full specification of the data provider API:
- As a [raw yml file](https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI-Specification-DataProviders.yml)
- In the [Swagger Editor](https://editor.swagger.io/?url=https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI-Specification-DataProviders.yml)


## Add a Data Provider
In order to appear as a data provider your info must be added to the file [/website/static/api/dataproviders/index.json](https://github.com/Sambruk/Open-Meal/tree/main/website/static/api/dataprovider/index.json).

If you want to be added to the list of data providers, [CREATE AN ISSUE](https://github.com/Sambruk/Open-Meal/issues) in the project or contact any of the project members for assistance.

The id property is arbitrary and until a general concent on what format to use is agreed upon. Until then, any string can be used. Prefferably in the form of a increasing number starting from "0"
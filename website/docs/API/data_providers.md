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
Details on how to add a data provider is found on the [Make your data available](/docs/make-your-data-available.md) page.
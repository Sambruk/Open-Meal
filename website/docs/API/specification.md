---
sidebar_position: 1
---

# Specification

The API is described in an [OpenAPI specification](https://swagger.io/specification/). OpenAPI is an open format to describe API:s and this specification is currently using version 3.0.1 of it. The specification can be viewed in the following formats:

- As a [webpage](/openapi-specification) on this site
- As a [raw yml file](https://github.com/Sambruk/Open-Meal/blob/main/OpenAPI%20Specification.yml)
- In the [Swagger Editor](https://editor.swagger.io/?url=https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI%20Specification.yml)

Note that the specification does not contain URL:s with domain names so you will need to prepend those when making requests towards your chosen [provider](/Docs/providers). Also note you might need to add authentication headers to make requests towards a certain provider. Other potential differences in provider implementations should be documented on the [providers](/Docs/providers) page.

---
sidebar_position: 6
---

# Implementing the API

Do you wish to provide your own implementation of the API? The Open Meal API is open to any organisation with meal information to implement. Simply read through the API documentation on this site and implement an API that follows the specification.

Note the following:

- Publishing data via the Open Meal API means that it is available under the [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) license.
- Mandatory fields must exist in the response
- All responses should be UTF-8 encoded.
- It is the responsiblity of the Data Provider that the API is implemented correctly and to support any developers that reports bugs or has questions about the implementation of the Open Meal API.

You can use the existing API specification to generate code by using for example Swagger Codegen to get started quickly.

## DCAT-AP

[DCAT-AP](https://joinup.ec.europa.eu/asset/dcat_application_profile/description) is a European specification of how to describe public sector datasets.

### Data Providers

An example of a DCAT-AP file for Data Providers is available at [dataprovider-dcat-ap-example.rdf](/Open-Meal/dataprovider-dcat-ap-example.rdf)

Please change all URLs, email addresses and mentions of _Data Provider_ into the relevant information.

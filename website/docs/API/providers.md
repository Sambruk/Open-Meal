---
sidebar_position: 3
---

# Providers

A provider is an implementor of the API that can enable access to organisations and third-party developers interested in using it.

## Known providers

These are the currently known providers for version 3.x of the Open Meal API:

```json
{
  "name": "Mashie",
  "url": "http://www.matildafoodtech.com",
  "baseUrl": "https://mpi.mashie.com/api/open-meal",
  "email": "hello@matildafoodtech.com"
}
```

## Dynamically listing providers

You can issue a GET request to the following URL to get an up-to-date list of data providers:

```
GET https://raw.githubusercontent.com/Sambruk/Open-Meal/main/dataproviders.json
```

It will list a number of properties including the `baseUrl` which should be used in all Open Meal requests towards the provider.

# Providers

This API method list all Data Providers that have implemented the Open Meal API specification and that has registered as a Data Provider. Use this method to get the Base URL for the Data Providers, which is required to call any other methods in the Open Meal API.

<table>
	<tr>
		<td>URL: </td>
		<td><a href="https://raw.githubusercontent.com/Sambruk/Open-Meal/main/dataproviders.json">https://raw.githubusercontent.com/Sambruk/Open-Meal/main/dataproviders.json</a></td>
	</tr>
	<tr>
		<td>HTTP Method: </td>
		<td>GET</td>
	</tr>
	<tr>
		<td>Parameters: </td>
		<td>None</td>
	</tr>
	<tr>
		<td>Formats: </td>
		<td>JSON</td>
	</tr>
</table>

## Response

The method returns a list of Data Providers, including name, contact information and Base URL. Data Providers are described with a data model inspired by the [schema.org Organization](http://schema.org/Organization).

| Property                  | Type   | Description                                                                                                                                                                    | Required? |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| name                      | String | The name of the organisation                                                                                                                                                   | Yes       |
| lang                      | String | The 2-letter [ISO 639 alpha-2](http://en.wikipedia.org/wiki/ISO_639-1) language code describing the language used in all Strings of this object. For example _sv_ for Swedish. | Yes       |
| description               | String | A brief description of the organisation                                                                                                                                        | No        |
| address                   | Object | The address of the organisation                                                                                                                                                | Yes       |
| address > streetAddress   | String | The street address                                                                                                                                                             | No        |
| address > postalCode      | String | The postal code                                                                                                                                                                | No        |
| address > addressLocality | String | The locality, for example the City                                                                                                                                             | No        |
| address > addressRegion   | String | The region, for example the State                                                                                                                                              | No        |
| address > addressCountry  | String | The 2-letter [ISO 3166-1 aplha-2](http://en.wikipedia.org/wiki/ISO_3166-1) country code, for example _SE_ for Sweden                                                           | Yes       |
| url                       | String | The URL to the organisations web site                                                                                                                                          | No        |
| email                     | String | A contact email address for the organisation                                                                                                                                   | No        |
| phone                     | String | A contact phone number for the organisation                                                                                                                                    | No        |
| baseUrl                   | String | The Base URL is needed to call further API methods in order to get data from a Data Provider.                                                                                  | Yes       |

## Example

    GET https://raw.githubusercontent.com/Sambruk/Open-Meal/main/dataproviders.json

    {
        "data" : [
        	{
    			"name" : "Food Industries Inc.",
    			"lang" : "en",
    			"address" : {
    				"addressCountry" : "US"
    			},
    			"url" : "http://foodindustries.inc",
    			"email" : "openmeal@foodindustries.inc",
    			"telephone" : "+1 555 555 555",
    			"baseUrl" : "http://openmeal.foodindustries.inc"
    		},
    		...
        ]
    }

## Want to be included as a Data Provider?

The Open Meal API is open for any organisation with meal information to implement. Simply read through the API documentation on this site and implement an API that follows the specification. Especially note the following:

- Publishing data via the Open Meal API means that it is available under the [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) license.
- The Open Meal API should be open for all to use without the need to register or authenticate.
- Return HTTP Status 200 OK if a everything works as it should with a request, HTTP Status 404 is a resource (URL) is not found, HTTP 400 if a request is incorrectly formated and HTTP 500 if something else goes wrong.
- The _Get Meals_ methods with all parameters must be implemented.
- All responses should be UTF-8 encoded.

It is the responsiblity of the Data Provider that the API is implemented correctly and to support any developers that reports bugs or has questions about the implementation of the Open Meal API.

### DCAT-AP

[DCAT-AP](https://joinup.ec.europa.eu/asset/dcat_application_profile/description) is a European specification of how to describe public sector datasets.

#### Data Providers

An example of a DCAT-AP file for Data Providers is available at [dataprovider-dcat-ap-example.rdf](/Open-Meal/dataprovider-dcat-ap-example.rdf)

Please change all URLs, email addresses and mentions of _Data Provider_ into the relevant information.

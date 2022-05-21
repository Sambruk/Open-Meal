# Introduction

The goal for Open Meal is to facilitate a way for municipalities and organisations to openly share menus from their meal distributors (schools, retirement homes and more). Data is shared through [providers](/docs/providers) and can be consumed by third-party developers to build custom applications on top of it.

The specification has two parts:

- A REST [API](/docs/api) returning data in JSON format
- [iCalendar](/docs/icalendar) with a subset of the information. The calendar-feed can be used by smartphones and pads as well as other calendar software to subscribe to the information.

If you have questions or suggestions you are welcome to start a discussion on [GitHub](https://github.com/Sambruk/Open-Meal/discussions). You are also welcome to contribute to the development For Swedish users, a history of comments can be found on [dataportal](https://community.dataportal.se/topic/171/måltidsinformation-som-öppna-data-hur-du-publicerar?_=1652685653024).

## Version history

| Version |                                                                                                                                                                                                                                                                                         Description |
| :------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| 3.2     |                                                                                                                                                                                                                                 The current version of the specification as seen in this repository |
| 3.1     | The [NSÖD](https://www.ri.se/sv/vad-vi-gor/projekt/nationell-skalning-oppna-data) project created [an updated version of the specification](https://www.dataportal.se/sv/specifications/Mltidsinformation/NSOD#ref=?p=1&q=m%C3%A5ltid&s=2&t=20&f=&rt=spec_standard%24spec_profile&c=false) in 2021. |
| 2.0     |                                                                                                                                                  [The first version of the specification](https://orebrokommun.github.io/Open-Meal-Information/) was created by the municipality of Örebro in 2015. |

## Background

The open meal information project was started by 3 municipalities in Sweden - [Helsingborg](http://www.helsingborg.se/), [Linköping](http://linkoping.se/) and [Örebro](http://www.orebro.se/). The goal was to make sure all municipalities in Sweden shared information about meals as menus in the same way so it would be easier to reuse. The goal was to create open data.

After first trying and failing to find an existing specification for sharing the information they decided to create one of their own. The first version of the specification was very basic and was not published on github.

For the second part of the project the municipality of [Örebro](http://www.orebro.se/) sought and got funds from [VINNOVA](http://vinnova.se/), Swedens innovation agency, to create an expanded specification including the original menu but also ingredients, nutritional values and allergens. The project ran from november 2014 thru june 2015 and involved the municipality och [Örebro](http://www.orebro.se/) with Björn Hagström as project lead, [Dopter AB](http://www.dopter.se/) represented by Andreas Krohn and [Mashie AB](http://www.mashie.se/), the supplier och the system for planing meals at the municipality, represented by Erik Arnwald and Jörgen Brandt.

The goal was to create an open specification that could be used by all suppliers of systems for planning meals and delivering menus and to keep it as small as possible as to not create unnecessary overhead for suppliers. The project delivered a specification for delivering the content as JSON and another as iCalendar for use with electronic calendars.

One motivation for this project was to create a proof-of-concept for solving one of the problems identified by the national coordination of municipal open data headed by [SKR](http://skr.se/) (an organisation for cooperation run by the municipalities) namely that open data published by 290 municipalities in 290 different ways will be very hard to reuse. Since the value of open data is realized in the reuse this aspect is critical in achieving the desired effects (new and better services and transparency in government).

No work was done on the specification until the Swedish project NSÖD (a national project helping municipalities and regions to publish open data in standardized formats). NSÖD created a new version of the specification (3.1) and not long after an updated version 3.2. NSÖD revised the specification and added a lot more structure for ingredients and nutritinal information.

---
layout:   page
title:    Hilfe
subtitle: Bitte hilf uns
---


{% assign date_format = site.date_format | default: "%B %-d, %Y" %}

{%- capture site_categories -%}
    {%- for category in site.categories -%}
        {{- category | first -}}{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
{%- endcapture -%}
{%- assign category_list = site_categories | split:',' | sort -%}

{%- capture site_tags -%}
    {%- for tag in site.tags -%}
        {{- tag | first -}}{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
{%- endcapture -%}
{%- assign tags_list = site_tags | split:',' | sort -%}

## Allgemein

Jede Art von Hilfe ist herzlich willkommen. 

## Aufgaben

Bitte meldet Euch, falls ihr uns bei folgenden Aufgaben helfen könnt und wollt:

 * Ein Logo zeichnen, welches sich am [jetztigen](/assets/img/sun.png) orientiert. Bitte melden bei [support@angst-frei.ch](mailto:support@angst-frei.ch).
 * [Rechtliche Dokumente Helfer](/files.html): Rechtliche Dokumente erfassen und ordnen. Bitte melden bei [support@angst-frei.ch](mailto:support@angst-frei.ch).
 * [News Helfer](#news): News (auch ältere) erfassen.
 * [Events Helfer](#events): Events erfassen.

## News

Falls es bei den News Artikel (auch ältere) gibt, die auch erwähnt werden sollten, schicke eine Datei an [news@angst-frei.ch](mailto:news@angst-frei.ch). Bitte nur kritische Artikel zum Thema (also lieber keine 20min, blick etc. Artikel). Bitte auch eine Kategorie und Tags erfassen.

### Kategorien

<div>

{%- for category in category_list -%}
    <a href="{{ '/categories' | absolute_url }}#{{- category -}}" class="btn btn-primary btn-sm tag-btn"><i class="fas fa-list" aria-hidden="true"></i>&nbsp;{{- category -}}&nbsp;({{site.categories[category].size}})</a>
{%- endfor -%}

</div>

### Tags

<div>

{%- for tag in tags_list -%}
    <a href="{{ '/tags' | absolute_url }}#{{- tag -}}" class="btn btn-primary btn-sm tag-btn"><i class="fas fa-tag" aria-hidden="true"></i>&nbsp;{{- tag -}}&nbsp;({{site.tags[tag].size}})</a>
{%- endfor -%}

</div>

### Aufbau der Datei

#### Dateiname

~~~
YYYY-MM-DD-quelle_artikel-oder-id.md
~~~

#### Beispiele

~~~
2020-09-16-bernerzeitung_698756136390.md
~~~
~~~
2020-09-16-tagesschau.de_lauterbach-twitter.md
~~~
~~~
2020-09-16-zeitpunkt_heute-endet-das-notrecht-fuer-stunden-und-tage.md
~~~

#### Inhalt

~~~
---
date:          YYYY-MM-DD
redirect:      URL
title:         Quelle
subtitle:      Title des Artikels
categories:    Kategorie
tags:          [Tag1, Tag2, etc]
---
~~~

#### Beispiele

~~~
---
date:          2020-09-10
redirect:      https://www.medinside.ch/de/post/infektionskrankheiten-gehoeren-so-zum-leben-wie-der-tod
title:         medinside.ch
subtitle:      "«Infektionskrankheiten gehören so zum Leben wie der Tod»"
categories:    Wissenschaft
tags:          [vernazza, medinside]
---
~~~
~~~
---
date:          2020-09-16
redirect:      https://www.tagesschau.de/faktenfinder/lauterbach-twitter-101.html
title:         tagesschau.de
subtitle:      "Aufklärung oder Panikmache?"
categories:    MSM
tags:          [tagesschau.de, lauterbach]
---
~~~
~~~
---
date:          2020-09-16
redirect:      https://www.bernerzeitung.ch/angstmacherei-ist-eine-unart-unserer-gesellschaft-698756136390
title:         Berner Zeitung
subtitle:      "«Angstmacherei ist eine Unart unserer ganzen Gesellschaft»"
categories:    MSM
tags:          [bernerzeitung, angst, hüther]
---
~~~

## Events

Falls es Veranstaltungen gibt, die auch erwähnt werden sollten, schicke 2 Dateien an [events@angst-frei.ch](mailto:events@angst-frei.ch).

### Aufbau der Info-Datei

#### Dateiname

~~~
Land_Region_YYYY-MM-DD.md
~~~

#### Beispiel

~~~
CH_ZH_2020-09-19.md
~~~

#### Inhalt

~~~
---
layout:           event
title:            "Titel"
event_date:       YYYY-MM-DD
event_country:    Land
event_region:     Region
event_place:      Ort
---
~~~

#### Beispiel

~~~
layout:           event
title:            "Kundgebung 19.September"
event_date:       2020-09-19
event_country:    CH
event_region:     ZH
event_place:      Zürich
---
~~~

### Bild-Datei (zum Event)

#### Dateiname

~~~
Land_Region_YYYY-MM-DD.bildtyp
~~~

#### Beispiel

~~~
CH_ZH_2020-09-19.jpg
~~~

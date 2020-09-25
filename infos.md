---
layout:   page
title:    Infos
subtitle: Weiterführende Informationen
---

Fehlt etwas? Ergänzungen bitte an [support@angst-frei.ch](mailto:support@angst-frei.ch).

<div>
{% if site.data.navlist.toc[0] %}
  {% for item in site.data.navlist.toc %}
    <h3>{{ item.title }}</h3>
      {% if item.subfolderitems[0] %}
        <ul>
          {% for entry in item.subfolderitems %}
            {% if entry.url %}
              <li><a href="{{ entry.url }}">{{ entry.page }}</a>
            {% else %}
              <li class="toc-first">{{ entry.page }}
            {% endif %}
              {% if entry.subsubfolderitems[0] %}
                <ul>
                {% for subentry in entry.subsubfolderitems %}
                    <li><a href="{{ subentry.url }}">{{ subentry.page }}</a></li>
                {% endfor %}
                </ul>
              {% endif %}
            </li>
          {% endfor %}
        </ul>
      {% endif %}
    {% endfor %}
{% endif %}
</div>

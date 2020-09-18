---
layout:   page
title:    Dateien
subtitle: Dateien zum Download
---

<div>
{% if site.data.navlist.toc[0] %}
  {% for item in site.data.navlist.toc %}
    {% if item.title == page.title %}
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
    {% endif %}
  {% endfor %}
{% endif %}
</div>

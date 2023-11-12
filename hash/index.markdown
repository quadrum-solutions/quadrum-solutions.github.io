## Mercury

{% for file in site.static_files %}
{% if file.path contains 'hash/mercury' %}

  <a href="{{ site.baseurl }}{{ file.path }}">{{ file.name }}</a><br />
  <a href="{{ site.baseurl }}{{ file.path }}">{{ file.name }}</a><br />
  <a href="{{ site.baseurl }}{{ file.path }}">{{ file.name }}</a>

{% endif %}
{% endfor %}

## Freddie

{% for file in site.static_files %}
{% if file.path contains 'hash/freddie' %}

  <a href="{{ site.baseurl }}{{ file.path }}">{{ file.name }}</a>

{% endif %}
{% endfor %}

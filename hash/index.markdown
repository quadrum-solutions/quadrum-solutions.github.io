## Mercury

{% for file in site.static_files %}
{% if file.path contains 'hash/mercury' %}

  <p><a href="{{ site.baseurl }}{{ file.path }}">{{ file.name }}</a></p>

{% endif %}
{% endfor %}

## Freddie

{% for file in site.static_files %}
{% if file.path contains 'hash/freddie' %}

  <p><a href="{{ site.baseurl }}{{ file.path }}">{{ file.name }}</a></p>

{% endif %}
{% endfor %}
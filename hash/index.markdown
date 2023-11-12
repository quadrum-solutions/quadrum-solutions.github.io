## Mercury

{% for file in site.static_files %}
{% if file.path contains 'hash/mercury' %}

  - [{{ file.name }}]({{ site.baseurl }}{{ file.path }})

{% endif %}
{% endfor %}

## Freddie

{% for file in site.static_files %}
{% if file.path contains 'hash/freddie' %}

  - [{{ file.name }}]({{ site.baseurl }}{{ file.path }})

{% endif %}
{% endfor %}

# Hashs

| Mercury | Freddie |
|---|---|
| {% for file in site.static_files reversed %}{% if file.path contains 'hash/mercury' %}[{{ file.name }}]({{ site.baseurl }}{{ file.path }})<br /> {% endif %}{% endfor %} |  {% for file in site.static_files reversed %}{% if file.path contains 'hash/freddie' %}[{{ file.name }}]({{ site.baseurl }}{{ file.path }})<br /> {% endif %}{% endfor %}| 


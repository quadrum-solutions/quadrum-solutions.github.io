# SNB Basket

| Full | Modifications |
|---|---|
| {% for file in site.static_files reversed %}{% if file.path contains 'snbbasket/full' %}[{{ file.name }}]({{ site.baseurl }}{{ file.path }})<br /> {% endif %}{% endfor %} |  {% for file in site.static_files reversed %}{% if file.path contains 'snbbasket/modifications' %}[{{ file.name }}]({{ site.baseurl }}{{ file.path }})<br /> {% endif %}{% endfor %}| 


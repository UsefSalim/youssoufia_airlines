fetch("https://api.aviationstack.com")
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  })
  .then(json => buildList(json));

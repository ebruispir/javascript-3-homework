function getCountries(url) {
  fetch(url)
    .then(response => response.json())
    .then(countries => {
      countries.forEach(country => {
        let option = document.createElement('option');
        option.innerHTML = country.name;
        document.getElementsByTagName('select')[0].appendChild(option);
        document.getElementById('loader').style.visibility = 'visible';
        setTimeout(function() {
          document.getElementById('dropdown').style.visibility = 'visible';
          document.getElementById('loader').style.visibility = 'hidden';
        }, 4000);

        let selected = document.getElementById('countries');
        selected.addEventListener('change', function() {
          if (selected.value === country.name) {
            document.querySelector('img').src = country.flag;
            document.querySelector('p').innerHTML = `The selected country ${
              country.name
            } has capital ${country.capital}.\nIts bordering countries are ${country.borders}`;
          }
        });
      });
    })
    .catch(err => console.error(err));
}

document.getElementById('getCountries').addEventListener('click', function() {
  getCountries('https://restcountries.eu/rest/v2/all/');
});




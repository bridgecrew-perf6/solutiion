// 20211019175707
// https://countriesnow.space/api/v0.1/countries/capital

 const countries = [
      {
        "name": "Location",
        "capital": "none"
      },
      {
        "name": "Afghanistan",
        "capital": "Kabul"
      },
      {
        "name": "Aland Islands",
        "capital": "Mariehamn"
      },
      {
        "name": "Albania",
        "capital": "Tirana"
      },
      {
        "name": "Algeria",
        "capital": "Algiers"
      },
      {
        "name": "American Samoa",
        "capital": "Pago Pago"
      },
      {
        "name": "Andorra",
        "capital": "Andorra la Vella"
      },
      {
        "name": "Angola",
        "capital": "Luanda"
      },
      {
        "name": "Anguilla",
        "capital": "The Valley"
      },
      {
        "name": "Antarctica",
        "capital": ""
      },
      {
        "name": "Antigua and Barbuda",
        "capital": "St. John's"
      },
      {
        "name": "Argentina",
        "capital": "Buenos Aires"
      },
      {
        "name": "Armenia",
        "capital": "Yerevan"
      },
      {
        "name": "Aruba",
        "capital": "Oranjestad"
      },
      {
        "name": "Australia",
        "capital": "Canberra"
      },
      {
        "name": "Austria",
        "capital": "Vienna"
      },
      {
        "name": "Azerbaijan",
        "capital": "Baku"
      },
      {
        "name": "Bahamas",
        "capital": "Nassau"
      },
      {
        "name": "Bahrain",
        "capital": "Manama"
      },
      {
        "name": "Bangladesh",
        "capital": "Dhaka"
      },
      {
        "name": "Barbados",
        "capital": "Bridgetown"
      },
      {
        "name": "Belarus",
        "capital": "Minsk"
      },
      {
        "name": "Belgium",
        "capital": "Brussels"
      },
      {
        "name": "Belize",
        "capital": "Belmopan"
      },
      {
        "name": "Benin",
        "capital": "Porto-Novo"
      },
      {
        "name": "Bermuda",
        "capital": "Hamilton"
      },
      {
        "name": "Bhutan",
        "capital": "Thimphu"
      },
      {
        "name": "Bolivia",
        "capital": "Sucre"
      },
      {
        "name": "Bonaire, Saint Eustatius and Saba ",
        "capital": ""
      },
      {
        "name": "Bosnia and Herzegovina",
        "capital": "Sarajevo"
      },
      {
        "name": "Botswana",
        "capital": "Gaborone"
      },
      {
        "name": "Bouvet Island",
        "capital": ""
      },
      {
        "name": "Brazil",
        "capital": "Brasilia"
      },
      {
        "name": "British Indian Ocean Territory",
        "capital": "Diego Garcia"
      },
      {
        "name": "British Virgin Islands",
        "capital": "Road Town"
      },
      {
        "name": "Brunei",
        "capital": "Bandar Seri Begawan"
      },
      {
        "name": "Bulgaria",
        "capital": "Sofia"
      },
      {
        "name": "Burkina Faso",
        "capital": "Ouagadougou"
      },
      {
        "name": "Burundi",
        "capital": "Bujumbura"
      },
      {
        "name": "Cambodia",
        "capital": "Phnom Penh"
      },
      {
        "name": "Cameroon",
        "capital": "Yaounde"
      },
      {
        "name": "Canada",
        "capital": "Ottawa"
      },
      {
        "name": "Cape Verde",
        "capital": "Praia"
      },
      {
        "name": "Cayman Islands",
        "capital": "George Town"
      },
      {
        "name": "Central African Republic",
        "capital": "Bangui"
      },
      {
        "name": "Chad",
        "capital": "N'Djamena"
      },
      {
        "name": "Chile",
        "capital": "Santiago"
      },
      {
        "name": "China",
        "capital": "Beijing"
      },
      {
        "name": "Christmas Island",
        "capital": "Flying Fish Cove"
      },
      {
        "name": "Cocos (Keeling) Islands",
        "capital": "West Island"
      },
      {
        "name": "Cocos Islands",
        "capital": "West Island"
      },
      {
        "name": "Colombia",
        "capital": "Bogota"
      },
      {
        "name": "Comoros",
        "capital": "Moroni"
      },
      {
        "name": "Cook Islands",
        "capital": "Avarua"
      },
      {
        "name": "Costa Rica",
        "capital": "San Jose"
      },
      {
        "name": "Croatia",
        "capital": "Zagreb"
      },
      {
        "name": "Cuba",
        "capital": "Havana"
      },
      {
        "name": "Curacao",
        "capital": " Willemstad"
      },
      {
        "name": "Cyprus",
        "capital": "Nicosia"
      },
      {
        "name": "Czech Republic",
        "capital": "Prague"
      },
      {
        "name": "Democratic Republic of the Congo",
        "capital": "Kinshasa"
      },
      {
        "name": "Denmark",
        "capital": "Copenhagen"
      },
      {
        "name": "Djibouti",
        "capital": "Djibouti"
      },
      {
        "name": "Dominica",
        "capital": "Roseau"
      },
      {
        "name": "Dominican Republic",
        "capital": "Santo Domingo"
      },
      {
        "name": "Ecuador",
        "capital": "Quito"
      },
      {
        "name": "Egypt",
        "capital": "Cairo"
      },
      {
        "name": "El Salvador",
        "capital": "San Salvador"
      },
      {
        "name": "Equatorial Guinea",
        "capital": "Malabo"
      },
      {
        "name": "Eritrea",
        "capital": "Asmara"
      },
      {
        "name": "Estonia",
        "capital": "Tallinn"
      },
      {
        "name": "Ethiopia",
        "capital": "Addis Ababa"
      },
      {
        "name": "Falkland Islands",
        "capital": "Stanley"
      },
      {
        "name": "Faroe Islands",
        "capital": "Torshavn"
      },
      {
        "name": "Fiji",
        "capital": "Suva"
      },
      {
        "name": "Finland",
        "capital": "Helsinki"
      },
      {
        "name": "France",
        "capital": "Paris"
      },
      {
        "name": "French Polynesia",
        "capital": "Papeete"
      },
      {
        "name": "French Southern Territories",
        "capital": "Port-aux-Francais"
      },
      {
        "name": "Gabon",
        "capital": "Libreville"
      },
      {
        "name": "Gambia",
        "capital": "Banjul"
      },
      {
        "name": "Georgia",
        "capital": "Tbilisi"
      },
      {
        "name": "Germany",
        "capital": "Berlin"
      },
      {
        "name": "Ghana",
        "capital": "Accra"
      },
      {
        "name": "Gibraltar",
        "capital": "Gibraltar"
      },
      {
        "name": "Greece",
        "capital": "Athens"
      },
      {
        "name": "Greenland",
        "capital": "Nuuk"
      },
      {
        "name": "Grenada",
        "capital": "St. George's"
      },
      {
        "name": "Guadeloupe",
        "capital": "Basse-Terre"
      },
      {
        "name": "Guam",
        "capital": "Hagatna"
      },
      {
        "name": "Guatemala",
        "capital": "Guatemala City"
      },
      {
        "name": "Guernsey",
        "capital": "St Peter Port"
      },
      {
        "name": "Guinea",
        "capital": "Conakry"
      },
      {
        "name": "Guinea-Bissau",
        "capital": "Bissau"
      },
      {
        "name": "Guyana",
        "capital": "Georgetown"
      },
      {
        "name": "Haiti",
        "capital": "Port-au-Prince"
      },
      {
        "name": "Heard Island and McDonald Islands",
        "capital": ""
      },
      {
        "name": "Honduras",
        "capital": "Tegucigalpa"
      },
      {
        "name": "Hong Kong",
        "capital": "Hong Kong"
      },
      {
        "name": "Hungary",
        "capital": "Budapest"
      },
      {
        "name": "Iceland",
        "capital": "Reykjavik"
      },
      {
        "name": "India",
        "capital": "New Delhi"
      },
      {
        "name": "Indonesia",
        "capital": "Jakarta"
      },
      {
        "name": "Iran",
        "capital": "Tehran"
      },
      {
        "name": "Iraq",
        "capital": "Baghdad"
      },
      {
        "name": "Ireland",
        "capital": "Dublin"
      },
      {
        "name": "Isle of Man",
        "capital": "Douglas, Isle of Man"
      },
      {
        "name": "Israel",
        "capital": "Jerusalem"
      },
      {
        "name": "Italy",
        "capital": "Rome"
      },
      {
        "name": "Ivory Coast",
        "capital": "Yamoussoukro"
      },
      {
        "name": "Jamaica",
        "capital": "Kingston"
      },
      {
        "name": "Japan",
        "capital": "Tokyo"
      },
      {
        "name": "Jersey",
        "capital": "Saint Helier"
      },
      {
        "name": "Jordan",
        "capital": "Amman"
      },
      {
        "name": "Kazakhstan",
        "capital": "Astana"
      },
      {
        "name": "Kenya",
        "capital": "Nairobi"
      },
      {
        "name": "Kiribati",
        "capital": "Tarawa"
      },
      {
        "name": "Kosovo",
        "capital": "Pristina"
      },
      {
        "name": "Kuwait",
        "capital": "Kuwait City"
      },
      {
        "name": "Kyrgyzstan",
        "capital": "Bishkek"
      },
      {
        "name": "Laos",
        "capital": "Vientiane"
      },
      {
        "name": "Latvia",
        "capital": "Riga"
      },
      {
        "name": "Lebanon",
        "capital": "Beirut"
      },
      {
        "name": "Lesotho",
        "capital": "Maseru"
      },
      {
        "name": "Liberia",
        "capital": "Monrovia"
      },
      {
        "name": "Libya",
        "capital": "Tripolis"
      },
      {
        "name": "Liechtenstein",
        "capital": "Vaduz"
      },
      {
        "name": "Lithuania",
        "capital": "Vilnius"
      },
      {
        "name": "Luxembourg",
        "capital": "Luxembourg"
      },
      {
        "name": "Macau",
        "capital": "Macao"
      },
      {
        "name": "Macedonia",
        "capital": "Skopje"
      },
      {
        "name": "Madagascar",
        "capital": "Antananarivo"
      },
      {
        "name": "Malawi",
        "capital": "Lilongwe"
      },
      {
        "name": "Malaysia",
        "capital": "Kuala Lumpur"
      },
      {
        "name": "Maldives",
        "capital": "Male"
      },
      {
        "name": "Mali",
        "capital": "Bamako"
      },
      {
        "name": "Malta",
        "capital": "Valletta"
      },
      {
        "name": "Marshall Islands",
        "capital": "Majuro"
      },
      {
        "name": "Martinique",
        "capital": "Fort-de-France"
      },
      {
        "name": "Mauritania",
        "capital": "Nouakchott"
      },
      {
        "name": "Mauritius",
        "capital": "Port Louis"
      },
      {
        "name": "Mayotte",
        "capital": "Mamoudzou"
      },
      {
        "name": "Mexico",
        "capital": "Mexico City"
      },
      {
        "name": "Micronesia",
        "capital": "Palikir"
      },
      {
        "name": "Moldova",
        "capital": "Chisinau"
      },
      {
        "name": "Monaco",
        "capital": "Monaco"
      },
      {
        "name": "Mongolia",
        "capital": "Ulan Bator"
      },
      {
        "name": "Montenegro",
        "capital": "Podgorica"
      },
      {
        "name": "Montserrat",
        "capital": "Plymouth"
      },
      {
        "name": "Morocco",
        "capital": "Rabat"
      },
      {
        "name": "Mozambique",
        "capital": "Maputo"
      },
      {
        "name": "Myanmar",
        "capital": "Nay Pyi Taw"
      },
      {
        "name": "Namibia",
        "capital": "Windhoek"
      },
      {
        "name": "Nauru",
        "capital": "Yaren"
      },
      {
        "name": "Nepal",
        "capital": "Kathmandu"
      },
      {
        "name": "Netherlands",
        "capital": "Amsterdam"
      },
      {
        "name": "New Caledonia",
        "capital": "Noumea"
      },
      {
        "name": "New Zealand",
        "capital": "Wellington"
      },
      {
        "name": "Nicaragua",
        "capital": "Managua"
      },
      {
        "name": "Niger",
        "capital": "Niamey"
      },
      {
        "name": "Nigeria",
        "capital": "Abuja"
      },
      {
        "name": "Niue",
        "capital": "Alofi"
      },
      {
        "name": "Norfolk Island",
        "capital": "Kingston"
      },
      {
        "name": "North Korea",
        "capital": "Pyongyang"
      },
      {
        "name": "Northern Mariana Islands",
        "capital": "Saipan"
      },
      {
        "name": "Norway",
        "capital": "Oslo"
      },
      {
        "name": "Oman",
        "capital": "Muscat"
      },
      {
        "name": "Pakistan",
        "capital": "Islamabad"
      },
      {
        "name": "Palau",
        "capital": "Melekeok"
      },
      {
        "name": "Palestinian Territory",
        "capital": "East Jerusalem"
      },
      {
        "name": "Panama",
        "capital": "Panama City"
      },
      {
        "name": "Papua New Guinea",
        "capital": "Port Moresby"
      },
      {
        "name": "Paraguay",
        "capital": "Asuncion"
      },
      {
        "name": "Peru",
        "capital": "Lima"
      },
      {
        "name": "Philippines",
        "capital": "Manila"
      },
      {
        "name": "Pitcairn",
        "capital": "Adamstown"
      },
      {
        "name": "Poland",
        "capital": "Warsaw"
      },
      {
        "name": "Portugal",
        "capital": "Lisbon"
      },
      {
        "name": "Puerto Rico",
        "capital": "San Juan"
      },
      {
        "name": "Qatar",
        "capital": "Doha"
      },
      {
        "name": "Republic of the Congo",
        "capital": "Brazzaville"
      },
      {
        "name": "Romania",
        "capital": "Bucharest"
      },
      {
        "name": "Russia",
        "capital": "Moscow"
      },
      {
        "name": "Rwanda",
        "capital": "Kigali"
      },
      {
        "name": "Réunion",
        "capital": "Saint-Denis"
      },
      {
        "name": "Saint Barthelemy",
        "capital": "Gustavia"
      },
      {
        "name": "Saint Helena",
        "capital": "Jamestown"
      },
      {
        "name": "Saint Kitts and Nevis",
        "capital": "Basseterre"
      },
      {
        "name": "Saint Lucia",
        "capital": "Castries"
      },
      {
        "name": "Saint Martin",
        "capital": "Marigot"
      },
      {
        "name": "Saint Pierre and Miquelon",
        "capital": "Saint-Pierre"
      },
      {
        "name": "Saint Vincent and the Grenadines",
        "capital": "Kingstown"
      },
      {
        "name": "Samoa",
        "capital": "Apia"
      },
      {
        "name": "San Marino",
        "capital": "San Marino"
      },
      {
        "name": "Sao Tome and Principe",
        "capital": "Sao Tome"
      },
      {
        "name": "Saudi Arabia",
        "capital": "Riyadh"
      },
      {
        "name": "Senegal",
        "capital": "Dakar"
      },
      {
        "name": "Serbia",
        "capital": "Belgrade"
      },
      {
        "name": "Seychelles",
        "capital": "Victoria"
      },
      {
        "name": "Sierra Leone",
        "capital": "Freetown"
      },
      {
        "name": "Singapore",
        "capital": "Singapur"
      },
      {
        "name": "Sint Maarten",
        "capital": "Philipsburg"
      },
      {
        "name": "Slovakia",
        "capital": "Bratislava"
      },
      {
        "name": "Slovenia",
        "capital": "Ljubljana"
      },
      {
        "name": "Solomon Islands",
        "capital": "Honiara"
      },
      {
        "name": "Somalia",
        "capital": "Mogadishu"
      },
      {
        "name": "South Africa",
        "capital": "Pretoria"
      },
      {
        "name": "South Georgia and the South Sandwich Islands",
        "capital": "Grytviken"
      },
      {
        "name": "South Korea",
        "capital": "Seoul"
      },
      {
        "name": "South Sudan",
        "capital": "Juba"
      },
      {
        "name": "Spain",
        "capital": "Madrid"
      },
      {
        "name": "Sri Lanka",
        "capital": "Colombo"
      },
      {
        "name": "Sudan",
        "capital": "Khartoum"
      },
      {
        "name": "Suriname",
        "capital": "Paramaribo"
      },
      {
        "name": "Svalbard and Jan Mayen",
        "capital": "Longyearbyen"
      },
      {
        "name": "Swaziland",
        "capital": "Mbabane"
      },
      {
        "name": "Sweden",
        "capital": "Stockholm"
      },
      {
        "name": "Switzerland",
        "capital": "Berne"
      },
      {
        "name": "Syria",
        "capital": "Damascus"
      },
      {
        "name": "Taiwan",
        "capital": "Taipei"
      },
      {
        "name": "Tajikistan",
        "capital": "Dushanbe"
      },
      {
        "name": "Tanzania",
        "capital": "Dodoma"
      },
      {
        "name": "Thailand",
        "capital": "Bangkok"
      },
      {
        "name": "Timor-Leste",
        "capital": "Dili"
      },
      {
        "name": "Togo",
        "capital": "Lome"
      },
      {
        "name": "Tokelau",
        "capital": ""
      },
      {
        "name": "Tonga",
        "capital": "Nuku'alofa"
      },
      {
        "name": "Trinidad and Tobago",
        "capital": "Port of Spain"
      },
      {
        "name": "Tunisia",
        "capital": "Tunis"
      },
      {
        "name": "Turkey",
        "capital": "Ankara"
      },
      {
        "name": "Turkmenistan",
        "capital": "Ashgabat"
      },
      {
        "name": "Turks and Caicos Islands",
        "capital": "Cockburn Town"
      },
      {
        "name": "Tuvalu",
        "capital": "Funafuti"
      },
      {
        "name": "U.S. Virgin Islands",
        "capital": "Charlotte Amalie"
      },
      {
        "name": "Uganda",
        "capital": "Kampala"
      },
      {
        "name": "Ukraine",
        "capital": "Kiev"
      },
      {
        "name": "United Arab Emirates",
        "capital": "Abu Dhabi"
      },
      {
        "name": "United Kingdom",
        "capital": "London"
      },
      {
        "name": "United States",
        "capital": "Washington"
      },
      {
        "name": "United States Minor Outlying Islands",
        "capital": ""
      },
      {
        "name": "Uruguay",
        "capital": "Montevideo"
      },
      {
        "name": "Uzbekistan",
        "capital": "Tashkent"
      },
      {
        "name": "Vanuatu",
        "capital": "Port Vila"
      },
      {
        "name": "Vatican",
        "capital": "Vatican City"
      },
      {
        "name": "Vatican City State (Holy See)",
        "capital": "Vatican City"
      },
      {
        "name": "Venezuela",
        "capital": "Caracas"
      },
      {
        "name": "Vietnam",
        "capital": "Hanoi"
      },
      {
        "name": "Wallis and Futuna",
        "capital": "Mata Utu"
      },
      {
        "name": "Western Sahara",
        "capital": "El-Aaiun"
      },
      {
        "name": "Yemen",
        "capital": "Sanaa"
      },
      {
        "name": "Zambia",
        "capital": "Lusaka"
      },
      {
        "name": "Zimbabwe",
        "capital": "Harare"
      }
    ];
export default countries;
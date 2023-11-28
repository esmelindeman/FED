# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>Ik ben gemotiveerd en vind het leuk om met HTML en CSS aan te slag te gaan. Qua HTML heb ik internetstandaarden afgerond met een 7.6 en ben ik daarna veel aan de slag gegaan met eigen oefeningen. Omdat ik geen kennis heb van een responsive website ben ik tot nu toe vooral veel bezig geweest met Bootstrap om veel kennis te maken met de verschillende HTML elementen (al weet ik dat deze code niet altijd perfect in elkaar zit, zoals wij het zouden moeten doen). Mijn portfolio heb ik met een bootstrap HTML template gemaakt zodat ik wel kan laten zien dat ik mijn weg weet te vinden met HMTL maar zodat het er ook visueel aantrekkelijk uitziet én responsive is. CSS heb ik ook voor het eerst geleerd bij Internetstandaarden in jaar 1, hier leerde ik de basis maar had ik er nog niet veel plezier in. Na de SRP CSS cursus van Sanne besefte ik dat CSS heel leuk kan zijn en ben ik meer aan de slag gegaan met CSS projectjes zodat ik hier beter mee overweg kan. Ik heb nog veel te leren maar ben enthousiast om aan de slag te gaan! :) </summary>

  ### Auteur:
  Esmé Lindeman

  #### Je startniveau:
  Rode piste. Ik oefen veel en gebruik veel code maar het lukt niet altijd. Ik ben wel op zoek naar uitdagingen en ook: kom maar op! :) Als ik er goed voor ga zitten kom ik er wel uit en heb ik er ook plezier in.

  #### Je focus:
  Surface Plane. Ik denk dat ik daar meer plezier in heb en meer van kan leren. Het liefst doe ik het allebei.
 
</details>





## Je website

<details open>
  <summary>Voor de opdracht van Frontend Development wil ik de website van Ton'y Chocolony namaken. Tony's heeft een gezellige website met een leuke huisstijl, wat mij heel erg aanspreekt. Daarnaast zitten er veel verschillende elementen in de website waar ik van verwacht dat ik er veel van kan leren omdat ik bepaalde elementen nog nooit heb gemaakt met HTML en CSS. Ook komen er veel animaties voor op de website wat mij enthousiast maakt om deze website na te maken. </summary>

  ### Je opdracht:
  ( https://tonyschocolonely.com/nl/nl/chocoshop "Tony's Chocoshop")
  ( https://tonyschocolonely.com/nl/nl/onze-missie "Tony's Missie")

  #### Screenshot(s) van de eerste pagina (small screen) - chocoshop: 
  <summary>De eerste pagina die ik na ga maken is de chocoshop. Dit is de pagina waar de producten van Tony's Chocolony gepresenteerd worden. Ik vind deze pagina interessant én relevant omdat het een webshop pagina is, waarvan ik graag wil leren hoe dit technisch in elkaar zit. Ik heb helaas niet de tijd om ook een productpagina uit te werken maar als extraatje zou ik dat wel graag nog (na dit blok) willen uitwerken om dit ook te leren.</summary>
  <img src="readme-images/home.tony.png" width="375px" alt="pagina van tony's chocolony waar de producten getoond worden">

  #### Screenshot(s) van de tweede pagina (small screen) - missie:
  <summary>De tweede pagina die ik ga namaken is de 'onze missie' pagina van Tony's. Deze pagina vind ik interessant omdat er veel animaties op voorkomen. Dit vind ik interessant om te leren. Ook ben ik erachter gekomen dat dit voor mensen met bepaalde beperkingen niet altijd prettig is en soms juist heel vervelend. Hier wil ik oplossingen voor vinden zodat de website meer toegankelijk wordt.</summary>
  <img src="readme-images/missie.tony.png" width="375px" alt="Pagina waar de missie van tony's chocolony besproken wordt.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

### Algemeen
<details>
  <summary>In de eerste week van FED heb ik de toegankelijkheidstest gedaan. Ik had hier enige moeite mee omdat ik eigenlijk van best veel vragen niet precies wist wat er mee bedoeld werd maar na wat onderzoek (en hulp van chatGPT bij uitleg van de vragen) heb ik de test volledig uit kunnen voeren. In eerste instantie is de website van Tony's redelijk toegankelijk. Qua code klopt er redelijk veel. Voornamelijk bij de images komen er foutmeldingen uit. Niet iedere afbeelding heeft bijvoorbeeld een SRC attribuut. Veel van de image animaties worden los ingeladen door JavaScript, wat betekent dat de SRC van die images niet in de HTML staat en deze images dus ook helemaal niet opgenomen zijn in de HTML, dat kan beter en ga ik dus aanpassen.</summary>
  
  ### Bevindingen
  #### Visuele beperking
    <summary>Tijdens het maken van de breakdown schets kwam ik er echter achter dat er ook een aantal dingen wat minder zijn aan de website. Zo zijn er veel images met tekst erin (als image dus) waardoor de screenreader deze tekst niet zal oplezen, wat vervelend is voor mensen met een visuele beperking. Hier valt veel aan te verbeteren, dit zijn daarnaast ook veranderingen die makkelijk te implementeren zijn. Voor de maker is er een relatief simpele oplossing voor maar voor de persoon met een visuele beperking is het een wereld van verschil, de website is namelijk veel beter te begrijpen als dit aangepast wordt. De ALT tekst is over het algemeen goed op de website. De meeste images hebben een alt text die overeen komt met de inhoud van de image. Helaas gaat het nog niet bij alle images goed en is er dus nog mogelijkheid tot verbetering.  </summary>

  #### ADHD  
  <summary>Mensen met aandoeningen als ADHD hebben moeite met concentreren. Voor deze gebruiker is de site van Tony's onoverzichtelijk. Wel is er een duidelijke structuur wat wel weer zorgt voor meer overzicht op de website. De teksten zijn niet te lang en makkelijk te volgen, ook voor iemand met bijvoorbeeld ADHD. Audio en Video spelen niet automatisch af, wat zorgt voor rust op de website. De problemen die iemand met een aandoening als ADHD kan tegenkomen op deze website zijn de volgende. Er gebeurt heel veel en er is veel beweging op de website, de animaties maken de website aantrekkelijk maar niet voor iemand met concentratieproblemen. Er is nu geen mogelijkheid om deze animaties stil te zetten, dit is een belangrijk punt om te verbeteren zodat de website toegankelijker wordt voor deze gebruikersgroep. De navigatie - zeker in het hamburger menu - heeft heel veel elementen. Er wordt wel wat meer structuur aangebracht door de verschillende onderdelen van de website weer te geven met een specifieke kleur op de achtergrond (zie afbeelding).  </summary>
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdown-missie.jpg" width="375px" alt="breakdown van de hele pagina 'missie' ">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>

## Eerste Code (week 1)
<details>
<summary>Ik ben alvast begonnen met wat code schrijven om te kijken hoe het is om de website na te maken. Ik ben begonnen met wat variabelen aanmaken en de navigatie aan te maken. Dit ziet er nu zo uit als hieronder te zien is in de screenshot.</summary>

## Origineel op de pagina van Tony's Chocolony
<img src="readme-images/navigatie-origineel.png" width="375px" alt="onze missie, doe mee, chocoshop, gepersonaliseerd, super store, en verder..">

## Mijn eerste poging tot het namaken van de navigatie
<img src="readme-images/navigatie-nagemaakt.png" width="375px" alt="onze missie, doe mee, chocoshop, gepersonaliseerd, super store, en verder..">

## Werkgroep 2 - verder met de code
<summary>Ik ben begonnen met de animatie maken van de chocoladeletter. In de code van de website zie ik dat het allemaal losse plaatjes zijn die overgaan in elkaar. Ik ben gaan opzoeken hoe ik dit kan doen met code. https://chat.openai.com/c/f5ce79e8-4cc9-4292-a9f5-6cf819249248 </summary>

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>

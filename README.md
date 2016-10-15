#Mozi jegyeladásait kezelő rendszer
 <br>
	<br>
	<br>
> ## Célkitűzés
 
A program egy multiplex mozi jegyeladásait fogja tudni kezelni. 
 
A szoftver legfontosabb feladata, hogy képes legyen a megfelelő felhasználói igényeket kielégíteni, amely két felhasználói körre is bontható. A mozi részéről lehetőség lesz új előadásokat meghirdetni, törölni. Illetve a szolgáltatás használójaként lehetőség lesz majd a meghirdetett filmeket megtekinteni, s ezekre helyet foglalni. 
 
Ezen program tehát összekapcsolja a két felhasználói kört, s segíti a mozi könnyebb működését, a nehézségek elkerülésével.
 <br>
	<br>
	<br>
> ## Nem funkcionális követelmények
 
### Megbízhatóság
- Sérült adatok esetén az összes korábbi tartalom elveszhet
- A felhasználói bevitel ellenőrzött, csak helyes bevitelt fogad el az alkalmazás 
- A megbízhatóan kezelhető adatok mennyisége korlátozott
- Az adatok sérülhetnek bezáráskor történő összeomláskor 
- Az adatok adatbázisban tárolódnak, az adatbázis sérülésével a még nem rögzített adatok elveszhetnek 
 
### Biztonság
- Nincs konkrét garancia az adatok biztonságára 
- Egyes funkciók jelszóval levédettek lesznek. 
 
### Hatékonyság
- A program válaszideje gyors minden funkcióra
- Az indítás és bezárás hosszabb időt vehet igénybe, függően a teljes adatmennyiségtől 
 
### Felhasználhatóság 
- Minden programfunkciónak áttekinthetőnek kell lennie
- A kezelést könnyíteni kell az egyes funkciógombok és szövegek megfelelő méretével
- A filmek és előadások esetén szükséges egy keresés input mező, mely azonnal listázza a megfelelő adatokat
- Felhasználóbarát, ergonomikus elrendezés és kinézet
 <br>
	<br>
	<br>
> ## Funkcionális követelmények

### Vendég:
- Vendégként szeretnék regisztrálni az oldalra
- Vendégként a főoldalon szeretnék kiemelt filmeket látni
- Vendégként szeretnék a filmek között szabadon böngészni
- Vendégként szeretnék filmeknél leírást megtekinteni
- Vendégként szeretnék filmeket keresni

### Felhasználó:
- Felhasználóként szeretném az adataimat szerkeszteni
- Felhasználóként szeretnék meghirdetett filmekre jegyet foglalni (név, e-mail cím, telefonszám adatokkal), s egy generált kódot szeretnék kapni, a jegyvételkor visszaigazoláshoz
- Felhasználóként szeretném esetlegesen a foglalt film visszamondását

### Adminisztrátor (mozi alkalmazottja)
- Alkalmazottként szeretnék belépni az adminisztrációs felületre
- Alkalmazottként szeretnék új filmeket meghirdetni (terem, film, időpont megadásával)
- Alkalmazottként szeretnék meghirdetett filmeket törölni.
- Alkalmazottként szeretnék filmekhez előadás időpontot hirdetni.
 <br>
 <br>
<br>
> ## Szakterületi fogalomjegyzék

...HAMAROSAN...
 <br>
	<br>
	<br>
> ## Szerepkörök

- Vendég: Filmek keresését, böngészését, megtekintését végezheti, illetve regisztrálhat
- Alkalmazott: Új filmeket képes meghirdetni, illetve törölni
- Felhasználó: Filmek keresését, böngészését, megtekintését, film foglalását, s annak visszamondását végezheti, illetve bejelentkezhet
 <br>
	<br>
	<br>
> ## Használati eset diagram
![alt tag](https://github.com/ildy95/alkfejl_2016_8_mozirendszer/blob/master/pics/cinema.png)

 <br>
	<br>
	<br>
> ## Folyamatok
 <br>
	<br>
	<br>
...HAMAROSAN...
 <br>
	<br>
	<br>
> ## Oldaltérkép

...HAMAROSAN...
 <br>
	<br>
	<br>
> ## Végpontok

- GET /: főoldal
- GET /login: bejelentkező oldal
- POST /login: bejelentkezési adatok felküldése
- GET /register: regisztrációs oldal
- POST /register: bejelentkezési adatok felküldése
- GET /profile: profiladatok
- GET /films: filmlista
- GET /films/:id: film megtekintése
- GET /films/:id/reservation: adott filmre hely foglalása
- GET /films/create: új film létrehozása
- POST /films/create: új film felvitele, adatok küldése
 <br>
	<br>
	<br>
> ## Oldalvázlatok

...HAMAROSAN...
 <br>
	<br>
	<br>
>## Adatmodell

...HAMAROSAN...
 <br>
	<br>
	<br>
> ## Adatbázisterv

...HAMAROSAN...
 <br>
	<br>
	<br>
> ## Állapotdiagram

...HAMAROSAN...




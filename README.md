# alkfejl_2016_8_mozirendszer
Mozi jegyeladásait kezelő rendszer

## Célkitűzés
 
A program egy multiplex mozi jegyeladásait fogja tudni kezelni. 
 
A szoftver legfontosabb feladata, hogy képes legyen a megfelelő felhasználói igényeket kielégíteni, amely két felhasználói körre is bontható. A mozi részéről lehetőség lesz új előadásokat meghirdetni, törölni. Illetve a szolgáltatás használójaként lehetőség lesz majd a meghirdetett filmeket megtekinteni, s ezekre helyet foglalni. 
 
Ezen program tehát összekapcsolja a két felhasználói kört, s segíti a mozi könnyebb működését, a nehézségek elkerülésével.


## NEM FUNKCIONÁLIS KÖVETELMÉNYEK 
 
 
### Megbízhatóság
- A funkciók mindig elérhetőek és végrehajtódnak, akkor is, ha az adatok sérülnek  sérült adatok esetén az összes korábbi tartalom elveszhet
- A felhasználói bevitel ellenőrzött, csak helyes bevitelt fogad el az alkalmazás 
- A megbízhatóan kezelhető adatok mennyisége korlátozott
- Az adatok sérülhetnek bezáráskor történő összeomláskor 
- Az adatok adatbázisban tárolódnak, az adatbázis sérülésével a még nem rögzített adatok elveszhetnek 
 
 
Biztonság  nincs konkrét garancia az adatok biztonságára  egyes funkciók jelszóval levédettek lesznek. 
 
 
Hatékonyság  a program válaszideje gyors minden funkcióra   az indítás és bezárás hosszabb időt vehet igénybe, függően a teljes adatmennyiségtől 

 
6 
 
 
Hordozhatóság  a program csak Windows XP, vagy újabb operációs rendszeren fut, személyi számítógépen  a program másolással könnyen áttelepíthető 
 
 
Környezeti   a felhasználás helye egy Windows 10-t futtató számítógép  együtt kell működnie az adatbázis-kezelő szoftverrel 
 
 
Felhasználhatóság  Minden programfunkciónak áttekinthetőnek kell lennie. A kezelést könnyíteni kell az egyes funkciógombok és szövegek megfelelő méretével. A filmek és előadások esetén szükséges egy keresés input mező, mely azonnal listázza a megfelelő adatokat. 

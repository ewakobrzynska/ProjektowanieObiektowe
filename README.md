# Projektowanie Obiektowe

---

**Zadanie 1** [Paradygmaty](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/Ex1)

:white_check_mark: 3.0 Procedura do generowania 50 losowych liczb od 0 do 100 [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/74023fc667eb6dd1cd4a1171e3407b9bddb1728a)

:white_check_mark: 3.5 Procedura do sortowania liczb [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/1a519005ee0ef9576fd65224086cc049fdfb8c66)

:white_check_mark: 4.0 Dodanie parametrów do procedury losującej określającymi zakres losowania: od, do, ile [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/08411c291aac247d95cea9ade837456a4439797b)

4.5 5 testów jednostkowych testujące procedury

5.0 Skrypt w bashu do uruchamiania aplikacji w Pascalu via docker

---

**Zadanie 2** [Wzorce architektury](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/zadanie2/my_project_name)

Należy stworzyć aplikację webową na bazie frameworka Symfony na obrazie kprzystalski/projobj-php:latest. Baza danych dowolna, sugeruję SQLite.

:white_check_mark:  3.0 Należy stworzyć jeden model z kontrolerem z produktami, zgodnie z CRUD [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/d8cd7c3655b3476206e4a5b7022b1917f691666d)

:white_check_mark:  3.5 Należy stworzyć skrypty do testów endpointów via curl [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/eb0ddea405673c0308b07c22afd925fd60e72c09)

4.0 Należy stworzyć dwa dodatkowe kontrolery wraz z modelami

4.5 Należy stworzyć widoki do wszystkich kontrolerów

5.0 Stworzenie panelu administracyjnego z mockowanym logowaniem 

---

**Zadanie 3** [Wzorce kreacyjne](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/ex3-0)

Spring Boot (Kotlin)

Proszę stworzyć prosty serwis do autoryzacji, który zasymuluje autoryzację użytkownika za pomocą przesłanej nazwy użytkownika oraz hasła. Serwis powinien zostać wstrzyknięty do kontrolera za pomocą anotacji @Autowired. Aplikacja ma oczywiście zawierać jeden kontroler i powinna zostać napisana w języku Kotlin. Oparta powinna zostać na frameworku Spring Boot, podobnie jak na zajęciach. Serwis do autoryzacji powinien być singletonem.

:white_check_mark: 3.0 Należy stworzyć jeden kontroler wraz z danymi wyświetlanymi z listy na endpoint’cie w formacie JSON - Kotlin + Spring Boot [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/5285ed650610766f93ccde4ce3e50d7e9b2f3f27)

:white_check_mark: 3.5 Należy stworzyć klasę do autoryzacji (mock) jako Singleton w formie eager [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/2dc5631a7d659f1c2492cd2b1ad171d01877725e)

:white_check_mark: 4.0 Należy obsłużyć dane autoryzacji przekazywane przez użytkownika [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/a53807eeabbf9c767ef49572ba02da033a876124)

4.5 Należy wstrzyknąć singleton do głównej klasy via @Autowired

5.0 Obok wersji Eager do wyboru powinna być wersja Singletona w wersji lazy

---

**Zadanie 4** [Wzorce strukturalne](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/ex4)

Należy stworzyć aplikację w Go na frameworku echo. Aplikacja ma mieć jeden endpoint, minimum jedną funkcję proxy, która pobiera dane np. o pogodzie, giełdzie, etc. (do wyboru) z zewnętrznego API. Zapytania do endpointu można wysyłać w jako GET lub POST.

:white_check_mark: 3.0 Należy stworzyć aplikację we frameworki echo w j. Go, która będzie miała kontroler Pogody, która pozwala na pobieranie danych o pogodzie (lub akcjach giełdowych) [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/07c2e7f1a55344dd219d36f95650418221880668)

:white_check_mark: 3.5 Należy stworzyć model Pogoda (lub Giełda) wykorzystując gorm, a dane załadować z listy przy uruchomieniu [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/ec749452cd4ad4545ce2d7039ecb5c232f98c5e1)

:white_check_mark: 4.0 Należy stworzyć klasę proxy, która pobierze dane z serwisu zewnętrznego podczas zapytania do naszego kontrolera [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/28e667607a5448ecb39829d389bf2e0930de59f5)

:white_check_mark: 4.5 Należy zapisać pobrane dane z zewnątrz do bazy danych [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/c938d9147e80daf20e9d350dc3a59bf9d5d64547)

5.0 Należy rozszerzyć endpoint na więcej niż jedną lokalizację (Pogoda), lub akcje (Giełda) zwracając JSONa

---

**Zadanie 5** [Wzorce behawioralne React (JavaScript/Typescript)](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/ex5)

Należy stworzyć aplikację kliencką wykorzystując bibliotekę React.js. W ramach projektu należy stworzyć trzy komponenty: Uslugi, Zamowienia oraz Płatności. Zamówienia oraz Płatności powinny wysyłać do aplikacji serwerowej dane, a w Uslugach powinniśmy pobierać dane o dostępnych usługach z aplikacji serwerowej. Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks.

:white_check_mark: 3.0 W ramach projektu należy stworzyć dwa komponenty: Produkty oraz Płatności; Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej; [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/cf69a03bc40dace3a14a1f8f26dcb12679db7582)

:white_check_mark: 3.5 Należy dodać Koszyk wraz z widokiem; należy wykorzystać routing [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/30868a98194b6f2e35e11314b098e3fae5afe06f)

:white_check_mark: 4.0 Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/e28e9bd7e6576b5ca752e5b1240667598dc6d9e0)

:white_check_mark: 4.5 Należy dodać skrypt uruchamiający aplikację serwerową oraz kliencką na dockerze via docker-compose [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/814f7b99b501ea5955b111553764144e8232ddb1)

5.0 Należy wykorzystać axios’a oraz dodać nagłówki pod CORS

---

**Zadanie 6** [Zapaszki Sonar (JS)](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/ex6)

W ramach zadania VI należy zredukować błędy typu: Bugs, Security Hotspots, Vulnerabilities oraz Code Smells. Błędy powinny być efektem statycznej analizy kodu za pomocą rozwiązania Sonar Cloud (https://sonarcloud.io/). Dodatkowo należy w Readme.md na każdym repozytorium dodać badge SonarCloud do powyższych czterech typów błędów (https://sonarcloud.io/project/information?id=). Należy sprawdzić kod projektu IV z kodem w React’cie.

:white_check_mark: 3.0 Należy dodać eslint w hookach gita [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/6bc18b3f41432f089df777ed377f4456a0b151a3)

:white_check_mark: 3.5 Należy wyeliminować wszystkie bugi w kodzie w Sonarze (kod aplikacji klienckiej) [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/9319907fd712a4e6b97de866c7d07a8629195ac5)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ewakobrzynska_ProjektowanieObiektowe&metric=bugs)](https://sonarcloud.io/summary/new_code?id=ewakobrzynska_ProjektowanieObiektowe)

:white_check_mark: 4.0 Należy wyeliminować wszystkie zapaszki w kodzie w Sonarze (kod aplikacji klienckiej) [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/deb104b9adc65e8338c9c3dfffa2332728193c54)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ewakobrzynska_ProjektowanieObiektowe&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=ewakobrzynska_ProjektowanieObiektowe)

:white_check_mark: 4.5 Należy wyeliminować wszystkie podatności oraz błędy bezpieczeństwa w kodzie w Sonarze (kod aplikacji klienckiej) [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/29150ef6ce8a18f5300b4f9aaf471db806df84a7)

[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ewakobrzynska_ProjektowanieObiektowe&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=ewakobrzynska_ProjektowanieObiektowe)

[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ewakobrzynska_ProjektowanieObiektowe&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=ewakobrzynska_ProjektowanieObiektowe)

5.0 Zredukować duplikaty kodu do 0%

---

**Zadanie 7** [Antywzorce Vapor (Swift)](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/ex7)

Proszę napisać prostą aplikację w Vaporze, wykorzystując Leaf jako silnik szablonów or Fluent jako ORM. Proszę stworzyć trzy modele oraz CRUD dla każdego z nich. Należy stworzyć model z minimum jedną relacją. CRUD powinien mieć odzwierciedlenie w szablonach.

:white_check_mark: 3.0 Należy stworzyć kontroler wraz z modele Produktów zgodny z CRUD w ORM Fluent [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/4013e6928e8af5a0ca974d6321297a285917bca4)

:white_check_mark: 3.5 Należy stworzyć szablony w Leaf [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/14b844c1ffe4c604eb2fe4f2f005280846193ef1)

4.0 Należy stworzyć drugi model oraz kontroler Kategorii wraz z relacją

4.5 Należy wykorzystać Redis do przechowywania danych

5.0 Wrzucić aplikację na heroku

---

**Zad 8 Mobile first** [(Android)](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/ex8)

:white_check_mark: 3.0 stworzenie listy kategorii oraz produktów [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/42ef576932a57cb60298bcf613bc41cece40e124)

:white_check_mark: 3.5 dodać koszyk [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/752755d2b3e5e0ee9f44d79e9de6666bb4462f37)

:white_check_mark: 4.0 stworzyć bazę w Realmie [Commit](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/54fcb863542177620fd74d828c26bf32251e33b5)

4.5 dodać płatności w Stripe

5.0 logowanie i rejestrację via Oauth2 dodać

---

**Zadanie 9** [Testy]()
 
3.0 Należy stworzyć 20 przypadków testowych w CypressJS lub Selenium (Kotlin, Python, Java, JS, Go, Scala)

3.5 Należy rozszerzyć testy funkcjonalne, aby zawierały minimum 50 asercji

4.0 Należy stworzyć testy jednostkowe do wybranego wcześniejszego projektu z minimum 50 asercjami

4.5 Należy dodać testy API, należy pokryć wszystkie endpointy z minimum jednym scenariuszem negatywnym per endpoint

5.0 Należy uruchomić testy funkcjonalne na Browserstacku




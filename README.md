**Zadanie 1** [Paradygmaty](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/Ex1)

:white_check_mark: 3.0 wymaganie 1 [Link do commita 1](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/74023fc667eb6dd1cd4a1171e3407b9bddb1728a)

:white_check_mark: 3.5 wymaganie 2 [Link do commita2 ](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/1a519005ee0ef9576fd65224086cc049fdfb8c66)

:white_check_mark: 4.0 wymaganie 3 [Link do commita 3](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/08411c291aac247d95cea9ade837456a4439797b)

:x: 4.5 wymaganie 4 [Link do commita 4]

:x: 5.0 wymaganie 5 [Link do commita 5]



**Zadanie 2** [Wzorce architektury](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/zadanie2/my_project_name)

Należy stworzyć aplikację webową na bazie frameworka Symfony na obrazie kprzystalski/projobj-php:latest. Baza danych dowolna, sugeruję SQLite.

:white_check_mark:  3.0 Należy stworzyć jeden model z kontrolerem z produktami, zgodnie z CRUD [Link do commita 1](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/d8cd7c3655b3476206e4a5b7022b1917f691666d)

:white_check_mark:  3.5 Należy stworzyć skrypty do testów endpointów via curl [Link do commita 2](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/eb0ddea405673c0308b07c22afd925fd60e72c09)

:x: 4.0 Należy stworzyć dwa dodatkowe kontrolery wraz z modelami

:x: 4.5 Należy stworzyć widoki do wszystkich kontrolerów

:x: 5.0 Stworzenie panelu administracyjnego z mockowanym logowaniem 


**Zadanie 3** [Wzorce kreacyjne](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/ex3-0)

Spring Boot (Kotlin)

Proszę stworzyć prosty serwis do autoryzacji, który zasymuluje autoryzację użytkownika za pomocą przesłanej nazwy użytkownika oraz hasła. Serwis powinien zostać wstrzyknięty do kontrolera za pomocą anotacji @Autowired. Aplikacja ma oczywiście zawierać jeden kontroler i powinna zostać napisana w języku Kotlin. Oparta powinna zostać na frameworku Spring Boot, podobnie jak na zajęciach. Serwis do autoryzacji powinien być singletonem.

:white_check_mark: 3.0 Należy stworzyć jeden kontroler wraz z danymi wyświetlanymi z listy na endpoint’cie w formacie JSON - Kotlin + Spring Boot [Link do commita 1](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/5285ed650610766f93ccde4ce3e50d7e9b2f3f27)

:white_check_mark: 3.5 Należy stworzyć klasę do autoryzacji (mock) jako Singleton w formie eager [Link do commita 2](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/2dc5631a7d659f1c2492cd2b1ad171d01877725e)

:white_check_mark: 4.0 Należy obsłużyć dane autoryzacji przekazywane przez użytkownika [Link do commita 3](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/a53807eeabbf9c767ef49572ba02da033a876124)

:x: 4.5 Należy wstrzyknąć singleton do głównej klasy via @Autowired

:x: 5.0 Obok wersji Eager do wyboru powinna być wersja Singletona w wersji lazy


**Zadanie 4** [Wzorce strukturalne](https://github.com/ewakobrzynska/ProjektowanieObiektowe/tree/main/ex4)

Należy stworzyć aplikację w Go na frameworku echo. Aplikacja ma mieć jeden endpoint, minimum jedną funkcję proxy, która pobiera dane np. o pogodzie, giełdzie, etc. (do wyboru) z zewnętrznego API. Zapytania do endpointu można wysyłać w jako GET lub POST.

:white_check_mark: 3.0 Należy stworzyć aplikację we frameworki echo w j. Go, która będzie miała kontroler Pogody, która pozwala na pobieranie danych o pogodzie (lub akcjach giełdowych) [Link do commita 1](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/07c2e7f1a55344dd219d36f95650418221880668)

:white_check_mark: 3.5 Należy stworzyć model Pogoda (lub Giełda) wykorzystując gorm, a dane załadować z listy przy uruchomieniu [Link do commita 2](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/ec749452cd4ad4545ce2d7039ecb5c232f98c5e1)

:white_check_mark: 4.0 Należy stworzyć klasę proxy, która pobierze dane z serwisu zewnętrznego podczas zapytania do naszego kontrolera [Link do commita 3](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/28e667607a5448ecb39829d389bf2e0930de59f5)

:white_check_mark: 4.5 Należy zapisać pobrane dane z zewnątrz do bazy danych [Link do commita 4](https://github.com/ewakobrzynska/ProjektowanieObiektowe/commit/c938d9147e80daf20e9d350dc3a59bf9d5d64547)

:x: 5.0 Należy rozszerzyć endpoint na więcej niż jedną lokalizację (Pogoda), lub akcje (Giełda) zwracając JSONa




Student managment system eshte nje application ku perdoruesi mundet te shtoj studentet me parametrat emer email dhe note mesatare me ane te User Interface e cila eshte ndertuar me angular dhe gjenerimi i ID eshte automatike.
Per te perdorur kete projekt do ju duhet java 23, angular 20.0.0, mysql workbench, intellj
[shkruj si shkarkohen]
Setup-i:
Hapni intelj dhe shkoni tek 'get from version control' dhe aty mund te vendosni url (https://github.com/erginhysenaj/STUDENT-MANAGEMENT-SYSTEM.git) e kesaj repo-je per ta shkarkuar.
ne branch main do ndodhet programi java (backend-i) ne te cilin duhet te shkoni tek src/main/resources/application.properties ku duhet te beni disa ndryshime ne varesi te krijimit ne mySQL workbench:
spring.application.name={replace with you app name}
spring.datasource.url=jdbc:mysql://localhost:3306/{replace with your db name} te krijuar ne workbench sql si dhe duhet te shtypni use per pjesen e perdorimit.
spring.datasource.username={your username for workbench}
spring.datasource.password={your password for workbench}

pasi te keni ber rregullimet ne application.properties mund te kalojm tek nje instanc e dyt e programit qe ben run branch-in frontendAngular dhe te shtoni node package manager me ane te command line interface
te intellj npm install pasi te behet instalimi mund ti japim run me komanden ng serve

pasi hapim localhost:4200 qe na tregon CLI e branchit frontendAngular
do na shfaqet UI qe ka keto aftesi:
1- +Add new student ku mund te shtojm nje student te ri me parametrat emer email dhe nota mesatare
2-Edit qe ndodhet tek rreshti i studentit te krijuar dhe na mundeson editimin e tij qoft ne emer not apo email.
3- delete ku mund ta fshijm si rekord ate student
4- Search student ku mund te kerkojm me emer ose me not mesatare (e.g: 4 >= {studenti me ate not} <=8)
5- clear qe fshin filtrat e shtuar 
te gjitha ndryshimet ketu do te pasqyrohen the ne workbench pasi jan te lidhura kete mundemi ta shikojm duke shkuar ne workbench, db e krijuar,tables (students), ikona 3 ne ate rresht do ju tregoj studentet e shtuar.
tek columns qe ndodhet posht tables mund te shikoni parametrat id (auto-genereted),emer,email,nota mesatare 

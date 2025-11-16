# Student Management System

**Student Management System** është një aplikacion ku përdoruesi mund të shtojë studentët me parametrat **emer**, **email** dhe **nota mesatare** përmes një **User Interface (UI)** të ndërtuar me Angular. ID e studentëve gjenerohet automatikisht.

---

## Kërkesat për përdorim

Për të përdorur këtë projekt, do t’ju nevojiten:

- **Java 23**  
- **Angular 20.0.0**  
- **MySQL Workbench**  
- **IntelliJ IDEA**

---

## Si të shkarkoni projektin

1. Hapni **IntelliJ IDEA**.  
2. Zgjidhni **Get from Version Control**.  
3. Vendosni këtë URL për të klonuar projektin:   https://github.com/erginhysenaj/STUDENT-MANAGEMENT-SYSTEM.git


---

## Setup i Backend-it (Java)

1. Shkoni tek **branch `main`** – aty ndodhet backend-i Java.  
2. Hapni file-in:  

3. Bëni ndryshimet e nevojshme sipas konfigurimit tuaj në MySQL Workbench:

```properties
spring.application.name={replace with your app name}
spring.datasource.url=jdbc:mysql://localhost:3306/{replace with your db name}
spring.datasource.username={your username for Workbench}
spring.datasource.password={your password for Workbench}


USE {your_db_name};

# Student Management System - Frontend Setup & UI Features

Pas rregullimeve në `application.properties` të backend-it, mund të kaloni tek një instancë e dytë e programit për të startuar frontend-in Angular.
```

## Setup i Frontend-it (Angular)

1. Shkoni tek **branch `frontendAngular`**.  
2. Shtoni Node Package Manager (npm) përmes Command Line Interface në IntelliJ:
   ```bash
   npm install
     ```

3. Pas instalimit të paketave, startoni aplikacionin Angular:
```bash
ng serve
```
Pas hapjes së **localhost:4200**, që tregon CLI e branch-it `frontendAngular`, do t’ju shfaqet **User Interface (UI)** me këto aftësi:

---

## Funksionaliteti i UI

1. **+Add new student** – Shto një student të ri me parametrat:
   - **emer**
   - **email**
   - **nota mesatare**  

2. **Edit** – Ndodhet tek rreshti i studentit të krijuar dhe mundëson editimin e të dhënave:
   - emer
   - email
   - nota mesatare  

3. **Delete** – Fshin studentin si rekord nga tabela.  

4. **Search student** – Kërko studentë sipas:
   - emrit  
   - notës mesatare (p.sh. `4 >= nota <= 8`)  

5. **Clear** – Fshin filtrat e aplikuar.

---

## Sinjalizimi i ndryshimeve në MySQL Workbench

Të gjitha ndryshimet që bëni në UI reflektohen automatikisht në **MySQL Workbench**:

1. Shkoni tek **database-i** që keni krijuar.  
2. Zgjidhni tabelën **students**.  
3. Tek **ikonat e rreshtave** (ikona 3) mund të shikoni studentët e shtuar.  
4. Tek **Columns** poshtë tabelës do të shihni parametrat:
   - **id** (auto-generated)  
   - **emer**  
   - **email**  
   - **nota mesatare**


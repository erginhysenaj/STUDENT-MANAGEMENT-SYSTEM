# Student Management System

**Student Management System** është një aplikacion ku përdoruesi mund të shtojë studentët me parametrat **emer**, **email** dhe **nota mesatare** përmes një **User Interface (UI)** të ndërtuar me Angular. ID e studentëve gjenerohet automatikisht.

---

## Kërkesat për përdorim

Për të përdorur këtë projekt, do t’ju nevojiten:
- **spring boot 3.5.7**  
- **Java 25**  
- **Angular 20.0.0**  
- **MySQL Workbench**  
- **IntelliJ IDEA**

---

## Si të shkarkoni projektin

1. Hapni **IntelliJ IDEA**.  
2. Zgjidhni **Get from Version Control**.  
3. Vendosni këtë URL për të klonuar projektin:   https://github.com/erginhysenaj/STUDENT-MANAGEMENT-SYSTEM.git

---
## Krijimi i Database dhe User ne Workbech

1. Hapni **MySQL Workbench**.  
2. Krijoni një **user** dhe **password** sipas dëshirës tuaj.  
3. Përdorni këto komanda për krijimin e database-it:
```sql
CREATE DATABASE {DB_name};
Jepi Run për krijimin e database-it.

Selektoni database-in për përdorim dhe për pasqyrimin e ndryshimeve midis UI dhe backend:
USE {DB_name};
```
## Setup i Backend-it (Java)

1. Shkoni tek **branch `main`** – aty ndodhet backend-i Java.  
2. Hapni file-in:  

3. Bëni ndryshimet e nevojshme sipas konfigurimit tuaj në MySQL Workbench:

```properties
spring.application.name={replace with your app name}
spring.datasource.url=jdbc:mysql://localhost:3306/{replace with your db name}
spring.datasource.username={your username for Workbench}
spring.datasource.password={your password for Workbench}

```
## Backend Dependencies Setup

Pas rregullimeve në `application.properties` të backend-it, duhet të shkoni tek file-i **`pom.xml`**, ku ndodhen të gjitha **dependencies** të projektit (të marra nga [Maven Repository](https://mvnrepository.com/)).

Për të siguruar që ndryshimet të merren nga projekti, klikoni me **të djathtën e mausit** mbi `pom.xml` dhe zgjidhni:

- **Maven -> Reload Project**  
  ose  
- **Synchronize**

Kjo do të sigurojë që të gjitha dependencies të jenë të përditësuara dhe backend-i të funksionojë si duhet.


mund të kaloni tek një instancë e dytë e programit për të startuar frontend-in Angular.

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
## Java API Endpoints

Backend-i Java përdor **Spring Boot** për menaxhimin e studentëve dhe ofron këto API endpoints:

- **@PostMapping** `/api/students` – Shton një student të ri.
- **@GetMapping** `/api/students` – Merr listën e të gjithë studentëve.
- **@GetMapping("/{id}")** `/api/students/{id}` – Merr një student sipas ID-së.
- **@PutMapping("/{id}")** `/api/students/{id}` – Përditëson një student ekzistues sipas ID-së.
- **@DeleteMapping("/{id}")** `/api/students/{id}` – Fshin një student sipas ID-së.
- **@GetMapping("/search")** `/api/students/search` – Kërkon studentë sipas emrit dhe/ose notës mesatare

---

### CORS Configuration

Në `StudentController.java`, CORS është konfiguruar për të lejuar kërkesa nga frontend-i Angular:

```java
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/students")
}
```
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


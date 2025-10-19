
<!-- ABOUT THE PROJECT -->
## ToDo Application



This is a web application developed on dotnet 9 and Angular 20 for List, Add and delete a ToDo List.

Here's the main features:
* This application has a Angular frontend and .NET Web API backend.
* You can directly enter to the system and List, Add and Delete ToDo Lists.
* The ToDo details are stored in a SQL Server Express LocalDB and deliver using API for angular frontend.
* Integrated Entity framework core in code first approch. 


### Built With

* Angular 20
* C# 
* Dotnet 9
* SQL Server Express LocalDB
* Entity Framework Core(Code First)
* Dependency Injection
* Repository Patern



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Dotnet 9 is required to run the project. 

### Installation

## Backend
1. Open ToDoApplication solution(todo-backend) on visual studio 
2. Check the localdb connectionstring on appsettings.json in the ToDoApplicationAPI project.
3. Apply Update database script from package manger console using below command  
    
      dotnet ef database update --project ToDoApplicationAPI
4. Run the ToDoApplicationAPI project. Swagger will open and then check the select the port and URL

## Frontend
1. Open todo-app project(todo-frontend) on vscode
2. Verify the node modules are available 
3. Modify todo-service.ts with the port that open backend API
      private apiURL = 'http://localhost:5280/Todo'; 
5. Excecute command `ng serve` to run angular application and open the url on browser



<!-- USAGE EXAMPLES -->
## Usage
* Open angular application on http://localhost:4200/
* Application will navigate to the Todo listing page.
* You can add new Todo Title by clicking add new
* Complete the todo by clicking complete button
* Delete the todo by clicking delete button
* Verify the todo listing

### Todo Listing 
<img width="1907" height="727" alt="image" src="https://github.com/user-attachments/assets/e2530ecd-4ee3-44a8-9c27-550ad811f52d" />

### Add Todo
<img width="1138" height="727" alt="image" src="https://github.com/user-attachments/assets/84a8dc58-62d6-4004-ba2e-87b3a06e9e7f" />

<img width="1198" height="751" alt="image" src="https://github.com/user-attachments/assets/8d243c9f-88fd-434e-84c9-cbd0705bedac" />

### Delete Todo

<img width="1757" height="646" alt="image" src="https://github.com/user-attachments/assets/356d2099-1b5c-43fe-8abb-00200e4a588e" />

<img width="1911" height="688" alt="image" src="https://github.com/user-attachments/assets/e121482f-6684-4cd5-b517-34903d01efcb" />








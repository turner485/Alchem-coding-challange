# Alchem Coding Challenge

### Functionality
The management console connects to the Django backend via REST API, performing GET, POST, and DELETE requests to manage event data in the SQLite database.

### Project Overview
- **Database**: Implemented a SQLite database integrated with Django, utilizing Django models to create the necessary tables.
- **API**: Developed a RESTful API using the Django REST framework.
- **Management Console**: Built a front-end management console using Angular, that creates, GET, POST, and DELETE requests to manage event data, within the console.
- **Testing**: Conducted thorough testing on both the front-end and back-end to ensure seamless operation.

### Ways of thinking
- We needed a management console to visualize event data on the front-end.
- To visualize this data, we required a storage solution and an API to connect to it.
- After setting up the database and API with Django, we could proceed with developing the front-end console to display the event data.
- From the management console, we can simulate POST and DELETE requests to manage the event data as needed.

### Dependencies
- [Python 3.x](https://www.python.org/)
- [Node.js](https://nodejs.org/en)
- [Angular/Angular CLI](https://angular.dev/installation)

### Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/alchem-coding-challenge.git
    cd alchem-coding-challenge
    ```

2. **Backend Setup**
    - Navigate to the backend directory and create the virtual environment
    ```bash
    cd backend
    python -m venv .venv
    source .venv/bin/activate  # On Windows use `.venv\Scripts\activate`
    ```
    - Install Python dependencies
    ```bash
    pip install -r requirements.txt
    ```
    - Spin up the backend server
    ```bash
    python manage.py runserver
    ```

3. **Frontend Setup**
    - Navigate to the management console directory
    ```bash
    cd ../management-console
    ```
    - Install Node.js dependencies, build, and serve the Angular application
    ```bash
    npm install
    ng build
    ng serve
    ```

### Usage
Once both the front end and back end are running, you can navigate to:
```
http://localhost:4200/
```
Here, you can interact with the management console to create and delete events in the database using the provided buttons.

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


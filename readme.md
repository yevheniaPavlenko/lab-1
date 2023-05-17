The project consists of two directories: frontend and backend. To start the project, you must install dependencies in both parts of the project.

Frontend: open terminal => cd /frontend => npm i
Backend: open terminal => cd /backend => npm i

To start project:

Important!
Run the backend part of the project first!

Backend: open terminal => cd /backend => npm run dev
Frontend: open terminal => cd /frontend => npm run dev

This project has the following functions:

1. Registration
2. Authorization
3. Сhange user data
4. Adding a post
5. Adding comments under posts
6. Change password

Structure:

Frontend:
components => folder with app components for build pages
pages => page list in app

Backend:
middleware => for cors
models => models for DataBase
routes => routes to communicate with server from client.

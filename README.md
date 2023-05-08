#live link
frontend:https://infosecfrontend.vercel.app/

#code
backend:
https://github.com/alicehack2020/infosecbackend






Task 1.
Backend :
Create two models with following fields :
Users : Full name, Email id, Username, and password. Email id and username will be same, and unique for every user. Password will follow general password rules.
Data : Date of creation, Full name, email id, contact number, city, state.
APIs -
Register for registering a new user
Login for logging in an already registered user.
Read for reading user details
Update for updating user details
API for changing password
Create for creating a new record in 'Data' collection
Update for updating an existing record in 'data' collection.
List/Read for fetching all records from 'Data' collection created by a particular user.

Only a logged in 'user' can create a record in 'Data' collection.
There cannot be duplicate entries of email in any collection.
A logged in user can create a new record or update an existing record in 'Data' collection.
A logged in user can only read or update records from 'Data' collection, but only those which has been created by that specific user. User A cannot read or update any record in 'Data' collection created by an user 'B'.

Create backend for above.
Create a simple frontend using React.js for registering a user, logging in, form for creating a record in 'Data' collection by a logged in user, and list for displaying created records by a particular user after logging in.

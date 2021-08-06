# To make changes
## 1
```
In config.env file add
1. MongoDB link
2. DB Password
3. DB Username
```
## 2
```
In server.js file change path to ./config.env
```

# To run
```
npm install
npm start
```




# API Documentation

## FOR USERS

### To add new Complaints
```
POST request /api/v1/shop
DATA
{
    "name": String Required
    "phoneNumber": Number Required
    "appliance": String Required
    "problem": String Required
    "address": String Required
    "pincode": Number Required
}
```
### If successful
```
response from server :
status code: 201
{
    status: 'Ok',
    data: {
    customerData (That data that you have posted)
    }
}
```
### If unsuccessful
```
status 400
{
    status: 'Fail',
    message: err.message,
}
```
### To get complaints of users
```
GET request /api/v1/shop/<PHONENUMBER>
user phoneNumber
if phoneNumber is present then User will receive all his Complaints
DATA
{
    "name": String
    "phoneNumber": Number
    "appliance": String
    "problem": String
    "address": String
    "pincode": Number
    "resolved": Boolean
    "createdAt": DATE
}
```
### if phone Number is not present then
```
DATA
{
    "status": "Fail",
    "message": "Page not found" 
}
```
# FOR ADMINS

## To Login
```
POST request at /api/v1/shop/admin/user/login
DATA
{
    "username": String Required
    "password": String Required
}
```
### IF successful LOGIN
```
Response from server
{
    status: 'Ok',
    message: 'Login Successful',
}
```
### If unsuccessful LOGIN
```
status: 403
{
    status: 'Fail',
    message: err.message,
}
```
### To show all Complaints
```
GET request at /api/v1/shop/admin/
DATA
{
    "name": String
    "phoneNumber": Number
    "appliance": String
    "problem": String
    "address": String
    "pincode": Number
    "resolved": Boolean
    "createdAt": DATE
}
```
### To resolve a complaints
```
POST request at /api/v1/shop/admin/<ID>
ID of that complaint
{
"resolved": true
}
```
### If successful
```
RESPONSE From server
{
    status: 'Ok',
    data: {
    customerData
    }   
}
```
### if unsuccessful
```
{
    status: 'Fail',
    message: err.message
}
```

# Email Service

This is a single page application  to send emails using various service providers.

## Getting Started

The project uses react on the front-end and node.js for the server

### Prerequisites

1) Internet Connection to download the source code and required softwares
2) Understanding of npm,node.js,react

### Installing


 1. Install node.js  
   1. Download the repo(or clone) 
    1. Open the terminal and navigate to the directory
    1. run `npm install `
  This will install all the modules mentioned in the package.json file.

1. After the installation is complete, register on mailgun and/or sendGrid email providers.
https://www.mailgun.com/
https://sendgrid.com/
1. After the registation is complete, you will get an api key, add that in the appropriate block for mailgun and sendgrid respectively in the config file.
src/server/config/config.js
1. For MAilGun get the sandbox domain name and replace it in the config.js file
1.  After the setup is complete, navigate to the app.js file inside the src/server folder 
   run ` node app.js `
This will start the server
browse on http://localhost:3000/


## Limitations and assumptions
  1.There is no error handling on the front end
 2.  The logic will choose the random service and if that fails will select the next service
 3. Please check url and domain for service provider
 4. If there is a change to be made on front end , build it using wepack
    `npm start`

## Built With

* [Nodejs](https://nodejs.org/en/docs/) - api server
* [Express](https://expressjs.com/) - Web Framework used
*  [Express](https://reactjs.org/) - Front End Frameworke



## Authors

* **Naved Mir** -(https://github.com/navedmir)

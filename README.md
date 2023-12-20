# Project Title: Email Validator  
John Davitz, Angela De Peralta   - We did our developmet in a different github and then reuploaded it here for grading.   
Descripton: Our application helps organizations detect fake email addresses and helps to add emails to a mailing list.  
Target Browsers: Our application is targeted for desktop users using chrome, edge, or firefox.   
User Manual Link:  https://github.com/not-senate/377_final/blob/main/docs/userGuide.md    
Developer Manual Link (This document): https://github.com/not-senate/377_final/blob/main/README.md  



## Developer guide Below:

This application makes use of the EVA api, supabase, nodeJS, and the Jqeury framework as its main parts. 

===== Installation =====  
Clone the necessary files from this repository to your main directory in your web server.  
To install this applicaton first install nodeJS then using NPM install body-parser, express, nodemon
You should also set up your own supabase instance and update the key in the index file.


===== Running the Server =====   
All you need to do is run "npm start" on yoru server and the application will begin running.   
Access the application on localhost:4000  

===== Testing =====  
No tests currently are present in the software  
  
===== The API =====  
+ '/' - GET - This is the homepage for the application. This page simply serves the static home page
+ '/addEmail' - POST - This API endpoint will add the email that it is passed into the database. Arguments: Email - String
+ '/checkEmail' - POST - This API end point will pull the current list of emails in the mailing list (database) and return it back to the function that called it.

==== Future development =====  
+ Currently no bugs are known with the application
+ In the future a user login system should be implemented
+ A way to remove an email from the mailer system should be implemented

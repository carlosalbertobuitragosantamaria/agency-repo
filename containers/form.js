// Express is a minimal and flexible Node.js web application framework that provides a robust
// set of features to develop web and mobile applications. 
// It facilitates the rapid development of Node based Web applications

const express = require('express');

// module to handle get request on localhost:3000 and load the registration form
exports.form = (req, res) =>
{  
    res.sendFile('public/form.html', { root: '.' })
}  

// module to handle post request on localhost:3000 when user submits the registration form
// form data is captured and sent back as a response
exports.formprocess = (req, res) =>
{  
   console.log(req.body);
   res.write('<h1> Data sent to the server. Check your console. </h1>');
   res.write('<p> Name : </h1>'+ req.body.name);
   res.write('<p> Email : </h1>'+ req.body.mail);
   res.write('<p> Question : </h1>'+ req.body.question);
   res.end();
}  

// res.send is equivalent to res.write + res.end. key difference is
// res.send can be called only once where as res.write can be called multiple times followed by a res.end. 
// res.end is necessary or else browser will keep on waiting for response
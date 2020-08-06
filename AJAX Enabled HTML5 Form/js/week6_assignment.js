// Kendra Brauer
// ICT-4510-1 Adv. Website Design & Mgmt
// Week 6 Assignment: Build Responsive Web Pages and an Ajax Enabled HTML5 Form
// js/week6_assignment.js
// 7/26/20

"use strict";

function submitForm () {
    var form = document.getElementById('form-login');
    const data = JSON.stringify(Object.fromEntries(new FormData(form)));
    fetch('https://ict4510.herokuapp.com/api/login', {
        method: 'POST',
        body: data,
        headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .then(response => response.json())
    .then(function (response) {
        sessionStorage.setItem('user', JSON.stringify(response.user));
        form.style.display = 'none';
        var user = JSON.parse(sessionStorage.getItem('user'));
        document.getElementById('message').innerHTML = 'Welcome ' + user.first_name + '!';
    });
}

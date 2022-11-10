var ism;
ism = prompt('Ismingizni kiriting:', 'Ism');
console.log(ism);

var familiya;
familiya = prompt('Familiyangizni kiriting', 'Familiya');
console.log(familiya);

var data;
data = prompt('Tug`ilgan sanangizni kiriting:', 'dd. mm. yyyy.');
console.log(data);

var joy;
joy = prompt('Tug`ilgan viloyatingizni kiriting', 'Sirdaryo');
console.log(joy);


var raqam;
raqam = prompt('Telefon raqamingizni kiriting', '+998XXYYYYYYY');
console.log(raqam);


var email;
email = prompt('Email manzili=ngizni kiriting', 'quyoncha.@gmail.com');
console.log(email); 



var elName = document.querySelector('#name');
elName.textContent = `Name: ${ism}`;

var elLastName = document.querySelector('#lastname');
elLastName.textContent = `Lastname: ${familiya}`;

var eldate = document.querySelector('#date');
eldate.textContent = `Date of birth: ${data}`;


var elhome = document.querySelector('#home');
elhome.textContent = `Hometown: ${joy}`;

var elnomber = document.querySelector('#nomber');
elnomber.textContent = `Tel: ${raqam}`;

var elemail = document.querySelector('#email');
elemail.textContent = `Email: ${email}`;
var ism;
ism = prompt('Ismingizni kiriting:', 'Ism');
console.log(ism);

var otm;

var a = 'TDIU';
var b = 'TDMI';
var c = 'MU';

otm = prompt(`${ism}  Qaysi OTMni Tanlaysiz:  1. ${a} 2. ${b} 3. ${c} `, 'OTMni kiriting!');
console.log(otm);

var ball;
ball = prompt(`${ism} Balingizni kiriting: `, 'Ball');
console.log(ball);



var grand = 'Siz talabalikka grandga qabul qilindingiz';
var kontrakt = 'Siz talabalikka kontrakt qabul qilindingiz';
var superkontrakt = 'Siz talabalikka qabul qilinmadingiz';

if (a == otm) {

    if (ball >= 150) {
        alert(grand);
    }

    else if (120 <= ball) {
        alert(kontrakt);
    }

    else {
        alert(superkontrakt);
    }

}

if (b == otm) {

    if (ball >= 160) {
        alert(grand);
    }
    else if (100 <= ball) {
        alert(kontrakt);
    }
    else {
        alert(superkontrakt);
    }

}

if (c == otm) {

    if (ball >= 180) {
        alert(grand);
    }
    else if (168 <= ball) {
        alert(kontrakt);
    }
    else {
        alert(superkontrakt);
    }

}



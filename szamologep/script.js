
function muveletek(muvelet) {
    var elsoszam = document.getElementById("elsoszamid").value;
    var masodikszam = document.getElementById("masodikszamid").value;
    if (muvelet=="+") {
        document.getElementById('eredmenyid').innerHTML = parseFloat(elsoszam) + parseFloat(masodikszam);
    }
    else if (muvelet=="-") {
        document.getElementById('eredmenyid').innerHTML = elsoszam - masodikszam;
    }
    else if (muvelet=="*") {
        document.getElementById('eredmenyid').innerHTML = elsoszam * masodikszam;
    }   
    else {
        document.getElementById('eredmenyid').innerHTML = elsoszam / masodikszam;
    }
}
function getMonth() {
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[d.getMonth()];
    return n;
}

function addingIncomes() {
    /*
    if (!parseFloat(document.getElementById('salary').value))
    {
        parseFloat(document.getElementById('salary').value) = null;
    }
    if (!parseFloat(document.getElementById('rents').value))
    {
        parseFloat(document.getElementById('rents').value) = null;
    }
    if (!parseFloat(document.getElementById('interests').value))
    {
        parseFloat(document.getElementById('interests').value) = null;
    }
    if (!parseFloat(document.getElementById('others').value))
    {
        parseFloat(document.getElementById('others').value) = null;
    }*/

    var inc = parseFloat(document.getElementById('salary').value) +
              parseFloat(document.getElementById('rents').value) +
              parseFloat(document.getElementById('interests').value) +
              parseFloat(document.getElementById('others').value);
    localStorage.setItem("totalIncomes", inc);
    document.getElementById('total_incomes').innerHTML = "Your income is $  " + inc;
    return inc;
}

function addingExpenses() {
    var exp = parseFloat(document.getElementById('tithing').value) +
              parseFloat(document.getElementById('housing').value) +
              parseFloat(document.getElementById('pub_bills').value) +
              parseFloat(document.getElementById('health').value) +
              parseFloat(document.getElementById('education').value) +
              parseFloat(document.getElementById('transportation').value) +
              parseFloat(document.getElementById('store').value) +
              parseFloat(document.getElementById('tv_phone_int').value) +
              parseFloat(document.getElementById('taxes').value) +
              parseFloat(document.getElementById('restaurants').value) +
              parseFloat(document.getElementById('shops').value) +
              parseFloat(document.getElementById('gifts').value) +
              parseFloat(document.getElementById('personal_care').value) +
              parseFloat(document.getElementById('services').value) +
              parseFloat(document.getElementById('trips').value);
    localStorage.setItem("totalExpenses", exp);
    document.getElementById('total_expenses').innerHTML = "Your expenses are $  " + exp;
    return exp;
}

function balance() {
    var bal = (addingIncomes() - addingExpenses());
    localStorage.setItem("balance", bal);
    document.getElementById('balance').innerHTML = "Your balance is $  " + bal;

    
}

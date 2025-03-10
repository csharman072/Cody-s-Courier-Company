function gotoorder() {
    window.location.href='order.html';
}

function gotohome() {
    window.location.href='index.html'
}

function gotoapply() {
    window.location.href='apply.html'
}

function gotoabout() {
    window.location.href='about us.html'
}

function changepfp() {
    
}

let distance = 0
let dcost = 0
let tcost = 10
let ttcost = 0

function zetw() {
    distance = 10
    updatedcost()
}

function twth() {
    distance = 25
    updatedcost()
}

function thfo() {
    distance = 35
    updatedcost()
}

function fofi() {
    distance = 45
    updatedcost()
}

function fisi() {
    distance = 55
    updatedcost()
}

function sise() {
    distance = 65
    updatedcost()
}
// ----------------

//-----------------

// ----------------


function dzetw() {
    ddistance = 10
    updateddcost()
}

function dtwth() {
    ddistance = 25
    updateddcost()
}

function dthfo() {
    ddistance = 35
    updateddcost()
}

function dfofi() {
    ddistance = 45
    updateddcost()
}

function dfisi() {
    ddistance = 55
    updateddcost()
}

function dsise() {
    ddistance = 65
    updateddcost()
}


function updatedcost() {
    if (distance<=20) {
        dcost = 50
    }
    else if (20<distance && distance<=30 ) {
        dcost = 60
    }
    else if (30<distance && distance<=40) {
        dcost = 70
    }
    else if (40<distance && distance<=50) {
        dcost = 80
    }
    else if (50<distance && distance<=60) {
        dcost = 90
    }
    else if (60<distance && distance<=70) {
        dcost = 100
    } updatettcost();
    //document.getElementById("dcost").innerHTML = "Cost: $" + dcost;
}

console.log(dcost);

function updateddcost() {
    if (ddistance<=20) {
        ddcost = 0
    }
    else if (20<ddistance && ddistance<=30 ) {
        ddcost = 10
    }
    else if (30<ddistance && ddistance<=40) {
        ddcost = 20
    }
    else if (40<ddistance && ddistance<=50) {
        ddcost = 30
    }
    else if (50<ddistance && ddistance<=60) {
        ddcost = 40
    }
    else if (60<ddistance && ddistance<=70) {
        ddcost = 50
    } updatettcost();
}


function tdy() {
    tcost = 10
    updatettcost()
}

function tmr() {
    tcost = 5
    updatettcost()
}

function tds() {
    tcost = -5
    updatettcost()
}

function updatettcost(){
    ttcost = dcost + tcost + ddcost
    document.getElementById("ttcost").innerHTML = "Cost: $" + ttcost;
}


function choosecompany(){
    
}

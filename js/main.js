let bar = 0;

function addProgress(n) {
    bar += +n;
}

function bttHandler() {
    $('button[type=button]').click(function() {
        addProgress($(this).val());
        setProgVal(bar);
    });
}

function setProgVal(v) {
    $('#prb').width(`${v}%`);
}

function init() {
    bttHandler();
}

$(document).ready(init);

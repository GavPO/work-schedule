var currentTime = moment();
var timeContainer = $("#currentDay");
var formContainer = $("#formContainer")
var button = $("button");

function saveWork(event){
    event.preventDefault();
    if ($(this).attr("class") === "saveBtn 9") {
        localStorage.setItem("block9", $("#block9").val());
    }
    else if ($(this).attr("class") === "saveBtn 10") {
        localStorage.setItem("block10", $("#block10").val());
    }
    else if ($(this).attr("class") === "saveBtn 11") {
        localStorage.setItem("block11", $("#block11").val());
    }
    else if ($(this).attr("class") === "saveBtn 12") {
        localStorage.setItem("block12", $("#block12").val());
    }
    else if ($(this).attr("class") === "saveBtn 1") {
        localStorage.setItem("block1", $("#block1").val());
    }
    else if ($(this).attr("class") === "saveBtn 2") {
        localStorage.setItem("block2", $("#block2").val());
    }
    else if ($(this).attr("class") === "saveBtn 3") {
        localStorage.setItem("block3", $("#block3").val());
    }
    else if ($(this).attr("class") === "saveBtn 4") {
        localStorage.setItem("block4", $("#block4").val());

    } else {
        localStorage.setItem("block5", $("#block5").val());
    };
};

function loadPrev() {
    $("#block9").val(localStorage.getItem("block9")) 
    $("#block10").val(localStorage.getItem("block10")) 
    $("#block11").val(localStorage.getItem("block11")) 
    $("#block12").val(localStorage.getItem("block12")) 
    $("#block1").val(localStorage.getItem("block1")) 
    $("#block2").val(localStorage.getItem("block2")) 
    $("#block3").val(localStorage.getItem("block3")) 
    $("#block4").val(localStorage.getItem("block4")) 
    $("#block5").val(localStorage.getItem("block5")) 
}

function checkTime() {
    var time9 = moment().hour(8);
    var time10 = moment().hour(9);
    var time11 = moment().hour(10);
    var time12 = moment().hour(11);
    var time1 = moment().hour(12);
    var time2 = moment().hour(13);
    var time3 = moment().hour(14);
    var time4 = moment().hour(15);
    var time5 = moment().hour(16);
    if (time9 < currentTime) {
        $(block9).addClass("past")
    } else if (time9 > currentTime) {
        $(block9).addClass("future")
    } else {
        $(block9).addClass("present")
    }
    if (time10 < currentTime) {
        $(block10).addClass("past")
    } else if (time10 > currentTime) {
        $(block10).addClass("future")
    } else {
        $(block10).addClass("present")
    }
    if (time11 < currentTime) {
        $(block11).addClass("past")
    } else if (time11 > currentTime) {
        $(block11).addClass("future")
    } else {
        $(block11).addClass("present")
    }
    if (time12 < currentTime) {
        $(block12).addClass("past")
    } else if (time12 > currentTime) {
        $(block12).addClass("future")
    } else {
        $(block12).addClass("present")
    }
    if (time1 < currentTime) {
        $(block1).addClass("past")
    } else if (time1 > currentTime) {
        $(block1).addClass("future")
    } else {
        $(block1).addClass("present")
    }
    if (time2 < currentTime) {
        $(block2).addClass("past")
    } else if (time2 > currentTime) {
        $(block2).addClass("future")
    } else {
        $(block2).addClass("present")
    }
    if (time3 < currentTime) {
        $(block3).addClass("past")
    } else if (time3 > currentTime) {
        $(block3).addClass("future")
    } else {
        $(block3).addClass("present")
    }
    if (time4 < currentTime) {
        $(block4).addClass("past")
    } else if (time4 > currentTime) {
        $(block4).addClass("future")
    } else {
        $(block4).addClass("present")
    }
    if (time5 < currentTime) {
        $(block5).addClass("past")
    } else if (time5 > currentTime) {
        $(block5).addClass("future")
    } else {
        $(block5).addClass("present")
    }  
};

formContainer.on("click", ".saveBtn", saveWork);

function init() {
    setInterval(function() {
        timeContainer.text(currentTime.format("[Today is] MMMM Do [a] dddd, [it is currently] hh:mm A"));
    }, 1000);
    loadPrev();
    checkTime();
}

init();

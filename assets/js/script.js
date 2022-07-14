var currentTime = moment();
var timeContainer = $("#currentDay");
var formContainer = $("#formContainer")
var button = $("button");


function saveWork(event){
    event.preventDefault();
    if ($(this).attr("class") === "9") {
        console.log($("#block9").value);
    }
    else if ($(this).attr("class") === "10") {
        console.log($("#block10").value);
    }
    else if ($(this).attr("id") === "11") {
        console.log($("#block11").value);
    }
    else if ($(this).attr("id") === "12") {
        console.log($("#block12").value);
    }
    else if ($(this).attr("id") === "1") {
        console.log($("#block1").value);
    }
    else if ($(this).attr("id") === "2") {
        console.log($("#block2").value);
    }
    else if ($(this).attr("id") === "3") {
        console.log($("#block3").value);
    }
    else if ($(this).attr("id") === "4") {
        console.log($("#block4").value);
    } else {
        console.log($("#block5").value);
    };
};

function checkTime(){
    
};

formContainer.on("click", ".saveBtn", saveWork);

function init() {
    setInterval(function() {
        timeContainer.text(currentTime.format("[Today is] MMMM Do [a] dddd, [it is currently] hh:mm A"));
    }, 1000);
    checkTime();
}

init();

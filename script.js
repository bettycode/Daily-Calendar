

var hour = moment().hours();

function today(){
    $("#currentDay").text(moment().format('LLLL'));
}
console.log(moment().format('LLLL'));

today();


function rowColor(){
    $(".event").each(function(){
        var t = parseInt($(this).attr("id"));
        var thour = parseInt(t);

        if (thour === hour){
            $(this).addClass("present");

        }else if(thour< hour){
            $(this).addClass("past");

        }else{
            $(this).addClass("future");
        }

    });
};

rowColor();

function store(){
    $(".event").each(function(){
        var inputId = $(this).attr("id");
        $(this).val(localStorage.getItem(inputId));
    });
};
  store();

  $(".saveBtn").on("click",function(){
    var schedule = $(this).siblings(".event").val();
    console.log(schedule);
    var inputs = $(this).siblings(".event").attr("id");
    console.log(inputs);

    localStorage.setItem(inputs,schedule);
    
});

$("#clear").on("click",function(){
    window.localStorage.clear();
    store() = "";
})
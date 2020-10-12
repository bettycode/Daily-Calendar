
//set time and date using moment.js 
var hour = moment().hours();

function today(){
    $("#currentDay").text(moment().format('LLLL'));
}
console.log(moment().format('LLLL'));

today();

// color of the row based on present past and future.
function rowColor(){
    $(".event").each(function(){
        var t = parseInt($(this).attr("id"));
        console.log(t)
        var thour = parseInt(t);
        console.log(thour)
        if (thour === hour){
            $(this).addClass("present");
            console.log(this);
        }else if(thour< hour){
            $(this).addClass("past");
            console.log(this);
        }else{
            $(this).addClass("future");
            console.log(this);
        }

    });
};

rowColor();
// function to get item from input
function store(){
    $(".event").each(function(){
        var inputId = $(this).attr("id");
        $(this).val(localStorage.getItem(inputId));
    });
};
  store();

// add event listener to the save button. //setItem text
  $(".saveBtn").on("click",function(){
    var schedule = $(this).siblings(".event").val();
    console.log(schedule);
    var inputs = $(this).siblings(".event").attr("id");
    console.log(inputs);

    localStorage.setItem(inputs,schedule);
    
});

$("#clear").hover(
    function() {
        var $this = $(this); // caching $(this)
        $this.data('defaultText', $this.text());
        $this.text("GOOD MORNING!");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('defaultText'));
    }
);

// event listener to clear the page and the text are.
$("#clear").on("click",function(){
    window.localStorage.clear();
    store() = "";
})

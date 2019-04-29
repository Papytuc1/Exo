function addTask() {
    let li = `<li class="list-group-item">${$("input").val()}<i class="fas fa-check m-1"></i><i class="fas fa-edit m-1"></i><i class="fas fa-trash m-1"></i></li>`;
    $("ul").append(li);
    $("input").val("");
};
$("#valid").on("click", function () {
    if ($("input").val() != "") {
        addTask();
    }
});
$("input").keypress(function (e) {
    if ($("input").val() != "") {
        if (e.keyCode == 13) {
            addTask();
        }
    }
});

$("ul").on("click",".fa-trash",function(){
    $(this).parent().remove();
})
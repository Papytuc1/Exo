function addTask() {
    let li = `<li class="list-group-item"><span class="text">${$("input").val()}</span><i class="fas fa-check m-1"></i><i class="fas fa-edit m-1"></i><i class="fas fa-trash m-1"></i></li>`;
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
$("ul").on("click", ".fa-trash", function () {
    $(this).parent().remove();
});
$("ul").on("click", ".fa-edit", function () {
    $("#text_edit,#edit").remove();
    $(this).parent().append("<input type='text' id='text_edit' /><button id='edit' class = 'btn btn-warning'>Modifier</button>");
    $("#edit").on("click", function () {
        $(this).parent().addClass("temporary");
        $(".temporary .text").text($("#text_edit").val());
        $(this).parent().removeClass("temporary");
    });
});
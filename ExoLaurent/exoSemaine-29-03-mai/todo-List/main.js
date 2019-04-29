function addTask() {
    let li = `<li class="list-group-item">${$("input").val()}<i class="fas fa-check"></i><i class="fas fa-edit"></i><i class="fas fa-trash"></i></li>`;
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
$(function() {
    function onBtnClick(id, value) {
        $("#" + id).click(function() {
            var input = $("#input").text()
            if (input === "0") {
                $("#input").empty()
            }
            $("#input").append(value)
        })
    }
    onBtnClick("btn-percent", "%")
    onBtnClick("btn-div", "/")
    onBtnClick("btn-7", "7")
    onBtnClick("btn-8", "8")
    onBtnClick("btn-9", "9")
    onBtnClick("btn-x", "x")
    onBtnClick("btn-4", "4")
    onBtnClick("btn-5", "5")
    onBtnClick("btn-6", "6")
    onBtnClick("btn-sub", "-")
    onBtnClick("btn-1", "1")
    onBtnClick("btn-2", "2")
    onBtnClick("btn-3", "3")
    onBtnClick("btn-add", "+")
    onBtnClick("btn-0", "0")
    onBtnClick("btn-dec", ".")

    $("#btn-AC").click(function() {
        $("#input").text("0")
        $("#answer").empty()
    })

    $("#btn-del").click(function() {
        var input = $("#input").text()
        var newInput = input.slice(0,-1)
        $("#input").text(newInput)

        if (!newInput) {
            $("#input").text("0")
            $("#answer").empty()
        }

    })
});

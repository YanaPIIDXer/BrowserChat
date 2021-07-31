const buildDom = (message, isMine) => {
    $message = $("<p>" + message + "</p>");
    className = "border alert ";
    if (isMine) {
        className += "alert-success text-right";
    } else {
        className += "alert-secondary text-left";
    }
    $message.addClass(className);

    $messages = $("#messages");
    $message.appendTo($messages);
}
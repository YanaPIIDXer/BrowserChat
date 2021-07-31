const buildDom = (message, isMine) => {
    $message = $("<div>" + message + "</div>");
    className = "other";
    if (isMine) {
        className = "mine";
    }
    $message.addClass(className);

    $messages = $("#messages");
    $message.appendTo($messages);
}
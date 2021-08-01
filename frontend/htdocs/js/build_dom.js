const buildDom = (name, message, isMine) => {
    $messages = $("#messages");

    if (!isMine) {
        $name = $("<p>" + name + "</p>");
        $name.addClass("badge badge-secondary text-left");
        $name.appendTo($messages);
    }

    $message = $("<p>" + message + "</p>");
    className = "border alert ";
    if (isMine) {
        className += "alert-success text-right";
    } else {
        className += "alert-secondary text-left";
    }
    $message.addClass(className);
    $message.appendTo($messages);
}
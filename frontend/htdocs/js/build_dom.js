const buildDom = (message) => {
    $message = $("<div>" + message + "</div>");
    $messages = $("#messages");
    $message.appendTo($messages);
}
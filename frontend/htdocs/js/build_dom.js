const buildMessageDom = (name, message, isMine) => {
    name = escapeHTML(name);
    message = escapeHTML(message);
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

const buildSystemMessageDom = (message) => {
    message = escapeHTML(message);
    $messages = $("#messages");

    $message = $("<p>" + message + "</p>");
    $message.addClass("border alert alert-dard text-center");
    $message.appendTo($messages);
}

// 参考：https://techacademy.jp/magazine/46853
const escapeHTML = (string) => {
    return string.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27');
}

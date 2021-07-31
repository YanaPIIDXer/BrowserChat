const onSend = () => {
    const message = $("#message_form [name=message]").val();
    if (message === "") { return; }
    alert(message);

    $("#message_form")[0].reset();
}
const newMessageForm = document.getElementById("newMessageForm");
const newMessageInput = document.getElementById("newMessage");
const phoneMessageList = document.getElementById("phoneMessageList");


newMessageForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Grab user input
    let = messageInput = newMessageInput.value;

    // Proceed only if message is entered in input
    if (messageInput.length > 0) {

        // Insert new message into message list
        phoneMessageList.insertAdjacentHTML("beforeend",
            "<div class='phone__message phone__message--sent'>" + messageInput + "</div>"
        );

        // Scroll down to new height to show new message
        phoneMessageList.scrollTop = phoneMessageList.scrollHeight;
        // Clear input value
        newMessageInput.value = "";
    }
});

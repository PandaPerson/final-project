// Function to add a new comment
function addComment() {
    let displayName = $("#addName").val();
    let commentText = $("#addComment").val();

    // Create a new comment element using variables to be more readable 
    let newComment = $("<div class='new-post'>");
    let userIcon = $("<div class='user-icon'>").append('<img src="./images/user-icon.png">');
    let postContent = $("<div class='post-content'>");
    let displaynameElement = $("<p class='display-name'>").text(displayName);
    let editButton = $("<input type='button' class='edit-button btn' value='Edit'>");
    let deleteButton = $("<input type='button' class='delete-button btn' value='Delete'>");
    let commentTextElement = $("<p class='comment-text'>").text(commentText);
    let editTextbox = $("<input type='text' id='editTextBox' class='comment-input'>");
    let submitButton = $("<input type='button' id='editBtn' class='btn submit-button' value='Submit'>");

    // Append elements to the new comment
    postContent.append(displaynameElement);
    postContent.append(editButton);
    postContent.append(deleteButton);
    postContent.append(commentTextElement);
    postContent.append(editTextbox);
    postContent.append(submitButton);

    newComment.append(userIcon);
    newComment.append(postContent);

    // Hide the edit/submit textbox initially 
    editTextbox.hide();
    submitButton.css('background-color', '#f8f8f8'); //changing background color to match newComments
    submitButton.hide();

    // Add event listeners for edit, delete and submit buttons
    editButton.click(function () {
        editComment(commentTextElement, editTextbox, submitButton);
    });

    deleteButton.click(function () {
        deleteComment(newComment);
    });

    // Insert the new comment at the top of the comment section
    $("#commentSection").prepend(newComment);

    // Clear the input fields
    $("#addName").val("");
    $("#addComment").val("");
}

// Function to edit a comment
function editComment(commentTextElement, editTextbox, submitButton) {
    let originalText = commentTextElement.text();

    // Show the edit textbox and populate it with the original text
    editTextbox.val(originalText);
    editTextbox.show();
    submitButton.show();
    // Bind the event listener for when the edit textbox loses focus
    $(document).on("click", "#editBtn", function () {
        let newText = editTextbox.val();

        // Update the comment text element with the edited text
        commentTextElement.text(newText);

        // Hide the edit textbox and show the comment text element
        editTextbox.hide();
        $(this).hide();
    });
}

// Function to delete a comment
function deleteComment(commentElement) {
    commentElement.remove();
}

// Bind the addComment function to the submit button
$("#newCommentBtn").click(function () {
    addComment();
});

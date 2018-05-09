$(".submit-message").on("click", function(event) {
  event.preventDefault();

  if ($("#input-name").val() === "" || $("#input-email").val() === "" || $("#input-message").val() === "") {
    $("#required").modal();
  }

  else {

  $.ajax({
  method: "POST",
  url: "/message",
  data: {
    name: $("#input-name").val(),
    email: $("#input-email").val(),
    message: $("#input-message").val()
  }
})
  // With that done
  .then(function(data) {
    // Log the response

    console.log("What server said after POST: ", data);
    $("#message-sent").modal();

  });

}

});

$(".close").on("click", function() {
  document.location.href = "/";
});

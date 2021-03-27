(function ($) {
  "use strict";
  $("#contactForm")
    .validator()
    .on("submit", function (event) {
      console.log(event);
      if (event.isDefaultPrevented()) {
        formError();

        submitMSG(false, "Bạn đã nhập đầy đủ thông tin chưa?");
      } else {
        event.preventDefault();
        submitForm();
      }
    });
  function submitForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var phone_number = $("#phone_number").val();
    var message = $("#message").val();
    var json = {
      full_name: name,
      phone: phone_number,
      email: email,
      message: msg_subject,
      subject: message,
    };
    $.ajax({
      type: "POST",
      url: "https://api.hellobugs.dev/api/user/contact/create",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(json),
      success: function (text) {
        if (text.status) {
          formSuccess(text);
        } else {
          formError();
          submitMSG(false, text.message);
        }
      },
      error: function (text) {
        formError();
        submitMSG(false, text.responseJSON.error);
      },
    });
  }
  function formSuccess(text) {
    $("#contactForm")[0].reset();
    submitMSG(true, text.message);
  }
  
  function formError() {
    $("#contactForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass();
        }
      );
  }
  function submitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h4 text-center tada animated text-success";
    } else {
      var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
  }
})(jQuery);

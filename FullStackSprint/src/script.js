$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
      event.preventDefault();
  
      var username = $('#username').val();
  
      $.ajax({
        type: 'POST',
        url: '/generateToken',
        data: { username: username },
        success: function(response) {
          $('#responseMessage').text('Token generated: ' + response.token);
        },
        error: function(xhr, status, error) {
          $('#responseMessage').text('Error: ' + error);
        }
      });
    });
  });
  
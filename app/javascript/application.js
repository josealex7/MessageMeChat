// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "jquery_ujs"
import "./jquery_ui"
import "./semantic_ui"


function scrollBottom() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

$(document).on('turbo:load', function() {
    $('.ui.dropdown').dropdown();
    
    $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
    });

    scrollBottom();

    $('#message_body').on('keydown', function(e) {
        if (e.keyCode == 13) {
          $('button').click();
          e.target.value = "";
        };
      });
});    

import "./channels"

window.scrollBottom = scrollBottom;
import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#message-container').append(`
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <em>${data.user_id.username}</em>: ${data.body}
                  </div>
                </div>
              </div>
              `);
    scrollBottom();
  }
});

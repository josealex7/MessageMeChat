class MessagesController < ApplicationController
    before_action :require_user
  
    def create
       message = current_user.messages.build(message_params)
       if message.save
        ActionCable.server.broadcast("chatroom_channel", { body: message.body,
          user_id: current_user,
          created_at: message.created_at.strftime("%b %d, %Y %H:%M:%S")})
       end
    end
  
    private
  
    def message_params
      params.require(:message).permit(:body)
    end
  
    def message_render(message)
      render(partial: 'message', locals: {message: message})
    end
  
  end
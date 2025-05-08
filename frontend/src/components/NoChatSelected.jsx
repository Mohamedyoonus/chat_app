import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-indigo-100 via-white to-pink-100">
      <div className="max-w-md w-full bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-10 text-center space-y-6 border border-white/50">
        {/* Animated Icon */}
        <div className="flex justify-center mb-4">
          <div className="relative animate-bounce">
            <div className="w-16 h-16 rounded-2xl bg-pink-100 shadow-inner flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-pink-600 drop-shadow-md" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-3xl font-extrabold text-gray-800 transition-opacity duration-300">
          Welcome to <span className="text-pink-500">Streamix!</span>
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Select a conversation from the sidebar to start chatting with your contacts.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;

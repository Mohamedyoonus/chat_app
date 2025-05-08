import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  if (!selectedUser) return null;

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="p-3 sm:p-4 border-b border-base-300 bg-base-100 animate-fade-in">
      <div className="flex items-center justify-between">
        {/* User Info Block */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
              className="size-10 sm:size-12 rounded-full object-cover border shadow-sm"
            />
            {isOnline && (
              <span
                className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full
                ring-2 ring-white"
              />
            )}
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-base sm:text-lg leading-none">
              {selectedUser.fullName}
            </h3>
            <p className={`text-sm ${isOnline ? "text-emerald-500" : "text-zinc-400"}`}>
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close Chat Button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="p-2 rounded-full hover:bg-base-200 transition-colors"
          title="Close chat"
        >
          <X className="w-5 h-5 text-zinc-600" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;

const MessageSkeleton = () => {
  // Create an array of 6 items for skeleton messages
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 animate-pulse">
      {skeletonMessages.map((_, idx) => (
        <div key={idx} className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"}`}>
          <div className="chat-image avatar">
            <div className="size-10 rounded-full relative">
              {/* Skeleton for avatar */}
              <div className="skeleton w-full h-full rounded-full absolute top-0 left-0" />
            </div>
          </div>

          <div className="chat-header mb-2 flex items-center gap-2">
            {/* Skeleton for name */}
            <div className="skeleton h-4 w-24 rounded-md" />
          </div>

          <div className="chat-bubble bg-transparent p-0 relative">
            {/* Skeleton for message bubble */}
            <div className="skeleton h-16 w-[180px] sm:w-[220px] rounded-md" />
            {/* Skeleton for potential image inside the bubble */}
            <div className="skeleton absolute top-0 left-0 h-16 w-[180px] sm:w-[220px] rounded-md opacity-20" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;

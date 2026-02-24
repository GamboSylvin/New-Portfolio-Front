type NotificationBarProps = {
    notification: string;
}

function NotificationBar({notification}: NotificationBarProps) {
  return (
        <div className="flex items-center w-fit rounded-full border border-fuchsia-500 bg-fuchsia-50 py-1 px-3 mb-6">
            <div className="w-2.5 h-2.5 bg-fuchsia-500 rounded-full"></div>
            <div className="text-fuchsia-700 px-3 text-sm">
                <p>{notification}</p>
            </div>
        </div>
  );
}

export default NotificationBar;
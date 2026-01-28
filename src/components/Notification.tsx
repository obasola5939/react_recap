type NotificationProps = {
    hasUnreadMessage: boolean;
}
function Notification({hasUnreadMessage}: NotificationProps) {
  return (
    <div>
        <h3>Notifications</h3>

        {/* Only show alert if there are unread messages */}
        {hasUnreadMessage && (
            <div>
                🔔  You have unread messages!
            </div>
        )}

        {/* Always show this footer */}
        <p style={{ fontSize: "0.9rem", color: "#666"}}>
            Check your inbox regularly.
        </p>
    </div>
  )
}

export default Notification
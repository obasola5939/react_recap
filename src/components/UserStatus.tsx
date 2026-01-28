/* You cannot declare the same type multiple times, typescript will throw an error. Use interface for that */
type UserStatusProps = {
    isActive: boolean;
}

function UserStatus({isActive}: UserStatusProps) {
  return (
    <div>
        <h3>User Status</h3>
        <p>
            {isActive ?'✅ Account is active' : '⚠️ Account is inactive' }
        </p>
    </div>
  )
}

export default UserStatus
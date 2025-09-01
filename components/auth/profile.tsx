import { Avatar, AvatarFallback } from "../ui/avatar";


export default function Profile({user}: {user: any}) {
    return (
        <div className="flex items-center justify-end w-full">
            <div className="flex items-center gap-4">
                <div className="text-white/70">{`${user.firstName} ${user.lastName}`}</div>
                <div>
                    <Avatar>
                        <AvatarFallback>{user.email.slice(0, 1).toUpperCase()}</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from '../ui/button';


const Notifications = () => {

    const notifications = [
        {
            img: "https://github.com/Jayanth-Srinivasan.png",
            user:"Jayanth Srinivasan",
            description:"has requested to follow you",
            time: "4h ago",
            type: "request"
        },
        {
            img: "https://github.com/kunalkeshan.png",
            user:"Kunal Keshan",
            description:"has sent you a message",
            time: "1h ago",
            type: "message"
        },
        {
            img: "https://github.com/nikhilsharma1574.png",
            user:"Nikhil Sharma",
            description:"has assigned you a task",
            time: "4h ago",
            type: "task"
        },
    ];

    return (
        <div className="bg-red-10 flex flex-col gap-4">
            <div className="p-4 flex flex-col gap-4 transition-all duration-300">
                <div className='w-full flex items-center gap-2'>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                    </span>
                    <h1 className='text-lg font-semibold'>Notifications</h1>
                </div>
                <div className='grid grid-cols-1'>
                    {
                        notifications.map((notification, index) => (
                            <>
                                <div key={index} className="p-4 flex gap-4 items-center transition-all duration-300">
                                    <div>
                                        <Avatar className='w-16 h-full'>
                                            <AvatarImage src={notification.img} />
                                            <AvatarFallback>{notification.user}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h1 className="font-medium cursor-pointer hover:underline">{notification.user}</h1>
                                            <span className="font-normal no-underline text-sm text-slate-400"> {notification.description}.</span>
                                        </div>
                                        <span className='text-sm text-slate-400'>{notification.time}</span>
                                    </div>
                                    <div className='ml-auto flex items-center gap-2'>
                                        <Button>
                                            {
                                                notification.type === "request" ? "Accept" : notification.type === "message" || notification.type === "task" ? "Open" : ""
                                            }
                                        </Button>
                                        <Button variant="outline" className={`${notification.type === "request" ? "block" :"hidden"}`}>
                                            Decline
                                        </Button>
                                    </div>
                                </div>
                                <Separator />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Notifications
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PenBox } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    TooltipContent,
    TooltipTrigger,
    Tooltip,
    TooltipProvider
} from "@/components/ui/tooltip"
import { RotateCw } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast"

const Account = () => {

    const techStack = [
        {
            title: "Javascript",
            imgUrl: "https://github.com/javascript-forks.png",
        },
        {
            title: "Typescript",
            imgUrl: "https://github.com/TypescriptID.png",
        },
        {
            title: "React JS",
            imgUrl: "https://github.com/reactjs.png",
        },
        {
            title: "Next JS",
            imgUrl: "https://github.com/nextjs.png",
        },
        {
            title: "Tailwind CSS",
            imgUrl: "https://github.com/tailwindlabs.png",
        },
        {
            title: "Material UI",
            imgUrl: "https://github.com/mui.png",
        },
        {
            title: "Firebase",
            imgUrl: "https://github.com/firebase.png",
        },
    ];

    const [isEdit, setIsEdit] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const { toast } = useToast()

    const handleSave = () => {
        setLoading(true);
        setTimeout(function(){
            setIsEdit(false);
            setLoading(false);
            toast({
                variant: "success",
                description: "Your profile has been updated.!",
                title:"Success"
            })
        }, 3000);
    }

    return (
        <div className="bg-red-10 flex flex-col gap-4">
            <div className="p-4">
                <div className='w-full flex mb-4'>
                    <h1 className='text-lg font-semibold'>Profile</h1>
                </div>
                <div className="flex items-center gap-4 transition-all duration-300">
                    <Avatar className='w-28 h-full'>
                        <AvatarImage src="https://github.com/surendar-pd.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col gap-1'>
                        <h1 className="text-2xl font-medium">Surendar PD</h1>
                        <h3 className='text-slate-400 font-mediu text-lg'>Team Manager</h3>
                        <p className='text-slate-400 font-medium text-sm'>@spd4612</p>
                    </div>
                    <div className='ml-auto flex items-center gap-4'>
                        <Button variant="outline" onClick={() => setIsEdit(true)}>
                            <PenBox className="h-4 w-4 mr-2"/> Edit
                        </Button>
                        <Button className={` ${isEdit ? 'flex': 'hidden'}`} disabled={loading} onClick={() => handleSave()}>
                            <RotateCw className={`mr-2 h-4 w-4 ${loading ? ' animate-spin': 'hidden'}`}/>
                            {
                                loading ? "Saving changes" : "Save"
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-4 transition-all duration-300">
                <div className='w-full flex'>
                    <h1 className='text-lg font-semibold'>Personal Information</h1>
                </div>
                <div className='grid grid-cols-3 max-w-4xl gap-4'>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="fname">First Name</Label>
                        <Input disabled={!isEdit} value="Surendar" type="text" id="fname" placeholder="First Name" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="lname">Last Name</Label>
                        <Input disabled={!isEdit} value="PD" type="text" id="lname" placeholder="Last Name" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email Address</Label>
                        <Input disabled={!isEdit} value="surendarpd007@gmail.com" type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="phone">Phone</Label>
                        <Input disabled={!isEdit} value="+918189884612" type="tel" id="phone" placeholder="Email" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="message">Bio</Label>
                        <Input disabled={!isEdit} value="Team Manager" type="text" id="message" placeholder="Type your Bio here..." />
                    </div>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-4 transition-all duration-300">
                <div className='w-full flex'>
                    <h1 className='text-lg font-semibold'>Address</h1>
                </div>
                <div className='grid grid-cols-3 max-w-4xl gap-4'>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="fname">Country</Label>
                        <Input disabled={!isEdit} value="India" type="text" id="fname" placeholder="Country" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="lname">City / State</Label>
                        <Input disabled={!isEdit} value="Chennai" type="text" id="lname" placeholder="City / State" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Pin Code</Label>
                        <Input disabled={!isEdit} value="600069" type="email" id="email" placeholder="Pin code" />
                    </div>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-4 transition-all duration-300">
                <div className='w-full flex'>
                    <h1 className='text-lg font-semibold'>Tech Stacks</h1>
                </div>
                <div className='grid grid-cols-12 gap-4 transition-all duration-300'>
                    {
                        techStack.map((stack, index) => (
                            <TooltipProvider key={index}>
                                <Tooltip >
                                    <TooltipTrigger>
                                        <Avatar className='w-12 h-full rounded-none'>
                                            <AvatarImage src={stack.imgUrl} />
                                            <AvatarFallback>{stack.title}</AvatarFallback>
                                        </Avatar>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{stack.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))
                    }
                </div>
            </div>
            <div className='p-4' >
                <div className='mb-4'>
                    <h1 className='text-lg font-semibold'>Delete this account</h1>
                    <p className='text-sm text-slate-400'>Once you delete the account, there is no going back. Please be certain.</p>
                </div>
                <Button variant={"destructive"} >Delete Account</Button>
            </div>
        </div>
    )
}

export default Account
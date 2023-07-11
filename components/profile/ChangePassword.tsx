import React from 'react';
import { Button } from "@/components/ui/button"
import { RotateCw } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

const ChangePassword = () => {

    const [loading, setLoading] = React.useState(false);
    const { toast } = useToast();

    const handleSave = () => {
        setLoading(true);
        setTimeout(function(){
            setLoading(false);
            toast({
                variant: "success",
                description: "Your new password has been updated!",
                title:"Success"
            })
        }, 3000);
    }

    return (
        <div className="bg-red-10 flex flex-col gap-4">
            <div className="p-4 flex flex-col gap-4 transition-all duration-300">
                <div className='w-full flex'>
                    <h1 className='text-lg font-semibold'>Change Password</h1>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="oldpassword">Enter old password</Label>
                        <Input type="password" id="oldpassword" placeholder="Old password" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="newpassword">New password</Label>
                        <Input type="password" id="newpassword" placeholder="Enter new password" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="renewpassword">Re enter new password</Label>
                        <Input type="password" id="renewpassword" placeholder="Re enter new password" />
                    </div>
                    <div>
                        <Button disabled={loading} onClick={() => handleSave()}>
                            <RotateCw className={`mr-2 h-4 w-4 ${loading ? ' animate-spin': 'hidden'}`}/>
                            {
                                loading ? "Updating" : "Update"
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
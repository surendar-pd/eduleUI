import React from 'react'
import SidebarLayout from '@/layouts/SidebarLayout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Account from '@/components/profile/Account'
import ChangePassword from '@/components/profile/ChangePassword'
import Notifications from '@/components/profile/Notifications'


function UserProfilePage() {
    return (
        <SidebarLayout>
            <h1 className="text-2xl font-medium">Account Settings</h1>
            <div className=''>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className='mt-4'>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="notifications">
                            <span className="relative flex h-3 w-3 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                            </span>
                            Notifications
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Account/>
                    </TabsContent>
                    <TabsContent value="password">
                        <ChangePassword/>
                    </TabsContent>
                    <TabsContent value="notifications">
                        <Notifications/>
                    </TabsContent>
                </Tabs>
            </div>
        </SidebarLayout>
    )
}

export default UserProfilePage
import { LayoutDashboard, ListChecks, MessagesSquare, User2, Icon as IconType} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export interface LayoutProps  { 
    children: React.ReactNode
}

interface SidebarData {
    title: string,
    link: string,
    Icon: IconType;
}[];

const SIDEBARDATA: SidebarData[] = [
    {
        title:"Dashboard",
        link:"#",
        Icon: LayoutDashboard
    },
    {
        title:"Tasks",
        link:"#",
        Icon: ListChecks
    },
    {
        title:"Chat",
        link:"#",
        Icon: MessagesSquare
    },
    {
        title:"Profile",
        link:"/profile",
        Icon: User2
    },
] 

const SidebarLayout = ({children}: LayoutProps )=> {
    return (
        <div className="w-full h-screen grid grid-cols-12">
            <div className="col-span-2 max-h-screen flex flex-col border-r border-slate-500/50">
                <div className="px-8 py-4">
                    <h1 className="text-2xl font-medium">Edule</h1>
                </div>
                <div className="flex flex-col gap-4 p-4">
                    {
                        SIDEBARDATA.map(({title, link, Icon}) => (
                            <Link href={link} key={title} className="w-full flex items-center gap-2 p-4 rounded-md transition-all duration-300 hover:bg-slate-600/30 hover:text-white">
                                <Icon size={20} strokeWidth={1.5}/>
                                <h3 className="text-sm font-medium">{title}</h3>
                            </Link>  
                        ))
                    }
                </div>
                <div className="mt-auto flex items-center p-4 gap-2 bg-slate-800/40">
                    <Avatar>
                        <AvatarImage src="https://github.com/surendar-pd.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1>Surendar PD</h1>
                </div>
            </div>
            <main className="col-span-10 p-4 max-h-screen overflow-y-scroll">
                {children}
            </main>
        </div>
    );
};

export default SidebarLayout;

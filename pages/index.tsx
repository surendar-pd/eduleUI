import Image from 'next/image'
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BellRing } from 'lucide-react'
import SidebarLayout from '@/layouts/SidebarLayout'

export default function Home() {

  const { toast } = useToast();

  return (
    <SidebarLayout>
      <main className="">
        <h1>dcsce</h1>
      </main>
    </SidebarLayout>
  )
}

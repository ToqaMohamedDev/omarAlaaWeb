import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Home, Menu,LogIn, } from "lucide-react"
import Link from "next/link"
  
export default function Mobile() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="flex md:hidden" ><Menu/></DropdownMenuTrigger>
    <DropdownMenuContent align="start"   className="px-10 bg-background md:hidden">
    <Link href="/">
        <DropdownMenuItem dir="rtl">
          <Home />
          الصفحة الرئيسية
        </DropdownMenuItem>
      </Link>

      <Link href="/regist">
        <DropdownMenuItem dir="rtl">
          <LogIn />
          عمل حساب
        </DropdownMenuItem>
      </Link>

      <Link href="/login">
        <DropdownMenuItem dir="rtl">
          <LogIn />
          تسجيل دخول
        </DropdownMenuItem>
      </Link>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

"use client"

import * as React from "react"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

import { UserButton } from "@clerk/nextjs";

function OnboardingHeaderComponent() {    
    const { setTheme } = useTheme()
    
    return (        
        <div className="border border-b-zinc-200 dark:border-b-zinc-700" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top', padding: '16px', position: 'sticky', top: '0' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'top', height: '32px'}}>
                <img src="/Quikest Logo.svg" alt="Image description" style={{ height: '32px', width: '32px', marginRight: '4px', marginTop: '4px' }} />
                <div style={{ fontWeight: '700', fontSize: '24px' }}>
                Quikest
                </div>
            </div>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'right', height: '32px' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'right', marginRight: '8px', height: '32px' }}>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div style={{ marginRight: '8px' }}><UserButton afterSignOutUrl="/"/></div>
            </div>
        </div>  
    )
}
export default OnboardingHeaderComponent
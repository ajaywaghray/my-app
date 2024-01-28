"use client"

import * as React from "react"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Input } from "@/components/ui/input"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { UserButton } from "@clerk/nextjs";

function HeaderComponent() {    
    const { setTheme } = useTheme()
    
    return (        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top', padding: '16px', borderBottom: '1px solid #E4E4E7', position: 'sticky', top: '0' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'top', height: '40px'}}>
                <img src="/Quikest Logo.svg" alt="Image description" style={{ height: '32px', width: '32px', marginRight: '4px', marginTop: '4px' }} />
                <div style={{ fontWeight: '700', fontSize: '24px' }}>
                Quikest
                </div>
            </div>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Tabs defaultValue="insights" className="w-[700px]">
                <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="insights">Insights</TabsTrigger>
                <TabsTrigger value="personas">Personas</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
                </TabsList>
                <TabsContent value="insights" style={{ textAlign: 'center' }}></TabsContent>
                <TabsContent value="personas" style={{ textAlign: 'center' }}></TabsContent>
                <TabsContent value="data" style={{ textAlign: 'center' }}></TabsContent>
            </Tabs>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'right', height: '40px' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'right', marginRight: '8px', height: '40px' }}>
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
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="outline">My Workspace</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" style={{ marginTop: '16px', marginRight: '16px' }}>
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                    My Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    Notifications
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    Keyboard shortcuts
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Workspace</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Plans</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </div>
    )
}
export default HeaderComponent
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top', padding: '16px', borderBottom: '1px solid', zIndex: '1000' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'top', height: '50px'}}>
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
                <TabsContent value="insights" style={{ justifyContent: 'center' }}>
                <div style={{ flex: 1, display: 'flex', width: '700px', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                    <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Sign up or Login</CardTitle>
                        <CardDescription>Sign up or login to Quikest.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                            <Input id="email" placeholder="Email address" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                            </div>
                        </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Deploy</Button>
                    </CardFooter>
                    </Card>
                </div>
                </TabsContent>
                <TabsContent value="personas" style={{ textAlign: 'center' }}>Persona creation goes here.</TabsContent>
                <TabsContent value="data" style={{ textAlign: 'center' }}>Data goes here.</TabsContent>
            </Tabs>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'right', height: '50px' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'right', marginRight: '8px', height: '50px' }}>
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
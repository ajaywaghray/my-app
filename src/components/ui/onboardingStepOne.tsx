'use client'

import * as React from "react"

import { useState } from 'react';

import { Checkbox } from "@/components/ui/checkbox"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { UserButton } from "@clerk/nextjs";

const OnboardingStepOne = ({ onNext }: { onNext: () => void; }) => {
  // Add state management and form handling here
  const [state, setState] = React.useState();

  return (
    <main>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top', padding: '16px' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'top', height: '50px'}}>
                <img src="/Quikest Logo.svg" alt="Image description" style={{ height: '32px', width: '32px', marginRight: '4px', marginTop: '4px' }} />
                <div style={{ fontWeight: '700', fontSize: '24px' }}>
                    Quikest
                </div>
                </div>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'right', height: '50px' }}>
                <div style={{ marginRight: '8px' }}><UserButton afterSignOutUrl="/"/></div>
            </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '600', fontSize: '30px' }}>
            Welcome to Quikest!
            </div>
            <div style={{ display: 'flex', height: '50vh', justifyContent: 'center', alignItems: 'top', marginTop: '16px' }}>
            <Card className="w-[700px]">
              <CardHeader>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', height: '75vh', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'left', fontWeight: '600', fontSize: '18px' }}>
                    Lets get to know you, Bonnie.
                  </div>
                  <Button onClick={onNext}>Next</Button>
                </div>
                <div style={{width: '100%', height: '100%', color: '#18181B', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Whats your role?</div>
              </CardContent>
              <CardFooter className="flex justify-between">
              </CardFooter>
            </Card>
        </div>
    </main>
  );
};

export default OnboardingStepOne;

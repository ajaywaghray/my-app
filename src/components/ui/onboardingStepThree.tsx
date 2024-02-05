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

import OnboardingHeaderComponent from "../common/onboardingHeader";

const OnboardingStepThree = ({ onNext }: { onNext: () => void; }) => {
  // Add state management and form handling here
  const [state, setState] = React.useState();

  return (
    <main>
    <OnboardingHeaderComponent></OnboardingHeaderComponent>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '600', fontSize: '30px' }}>
      Set Up Your Company Profile
    </div>
    <div style={{ display: 'flex', height: '50vh', justifyContent: 'center', alignItems: 'top', marginTop: '16px' }}>
      <Card className="w-[700px]">
        <CardContent>

        <div style={{ display: 'flex', height: '48px', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'left', fontWeight: '600', fontSize: '18px' }}>
            Relume
          </div>
          <Button onClick={onNext}>Done</Button>
        </div>
        <div className="text-zinc-500 text-sm font-normal" style={{ display: 'flex', justifyContent: 'left' }}>
          Relume is fascinating! We've summarized their key aspects. Anything to tweak or add?
        </div>
        
        <div className="flex w-full h-6" style={{ fontSize: '16px', fontWeight: '700' }}>
          Company Mission
        </div>

          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="email" placeholder="Company Mission" />
              </div>
              <div className="flex flex-col space-y-1.5">
              </div>
            </div>
          </form>

          <div className="flex w-full h-6" style={{ fontSize: '16px', fontWeight: '700' }}>
            Product Description
          </div>

          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="email" placeholder="Product Description" />
              </div>
              <div className="flex flex-col space-y-1.5">
              </div>
            </div>
          </form>

          <div className="flex w-full h-6" style={{ fontSize: '16px', fontWeight: '700' }}>
            Target Audience
          </div>

          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="email" placeholder="Target Audience" />
              </div>
              <div className="flex flex-col space-y-1.5">
              </div>
            </div>
          </form>

        </CardContent>
      </Card>
    </div>
  </main>
  );
};

export default OnboardingStepThree;

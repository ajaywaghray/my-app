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

import OnboardingHeaderComponent from "../common/onboardingHeader";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { UserButton } from "@clerk/nextjs";

interface OnboardingStepProps {
    onNext: () => void;
    onBack: () => void;
}

const OnboardingStepTwo = ({ onNext }: { onNext: () => void; }) => {
  // Add state management and form handling here
  const [state, setState] = React.useState();

  return (
    <main>
    <OnboardingHeaderComponent></OnboardingHeaderComponent>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '600', fontSize: '30px' }}>
      Set up your company profile
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', marginTop: '16px', marginBottom: '16px' }}>
      <Card className="w-[700px]">
        <CardContent>
          <div style={{ display: 'flex', height: '48px', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'left', fontWeight: '600', fontSize: '18px' }}>
              Fine tuning Quikest to align with your venture
            </div>
            <Button onClick={onNext}>Analyze</Button>
          </div>
          <div className="text-zinc-500 text-sm font-normal" style={{ display: 'flex', justifyContent: 'left' }}>
            Simply enter your company website, and let Quikest do the magic of sourcing essential details to begin generating your personas and propel your research journey forward.
          </div>
          
          <div className="flex grid grid-cols-2 gap-4">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="onboarding_company_name" placeholder="Company Name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                </div>
              </div>
            </form>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="onboarding_company_url" placeholder="Company Website" />
                </div>
                <div className="flex flex-col space-y-1.5">
                </div>
              </div>
            </form>
          </div>
          
          <div className="flex grid grid-cols-2 gap-4">
          <div className="flex-col"> 
              <div className="flex w-full h-6" style={{ fontSize: '16px', fontWeight: '700' }}>
                Company Size
              </div>
              
              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="soloentrepreneur" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="soloentrepreneur"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Solo Entrepreneur
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="micro" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="micro"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Micro (1-10 employees)
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="small" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="small"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Small (11-50 employees)
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="medium" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="medium"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Medium (51-200 employees)
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="large" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="large"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Large (201-500 employees)
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="enterprisesmall" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="enterprisesmall"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Enterprise (501-1000 employees)
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="enterpriselarge" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="enterpriselarge"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Enterprise (1001+ employees)
                </label>
              </div>
              
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  </main>
  );
};

export default OnboardingStepTwo;

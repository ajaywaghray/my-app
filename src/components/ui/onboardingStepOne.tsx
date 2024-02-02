'use client'

import * as React from "react"

import { useState } from 'react';

import { Checkbox } from "@/components/ui/checkbox"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/components/ui/use-toast"

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

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

import { UserButton } from "@clerk/nextjs";
import OnboardingHeaderComponent from "../common/onboardingHeader";

const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
})

const OnboardingStepOne = ({ onNext }: { onNext: () => void; }) => {
  // Add state management and form handling here
  const [state, setState] = React.useState();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: true,
    },
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <main>
      <OnboardingHeaderComponent></OnboardingHeaderComponent>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '600', fontSize: '30px', marginTop: '16px' }}>
        Welcome to Quikest!
      </div>
      <div style={{ display: 'flex', height: '50vh', justifyContent: 'center', alignItems: 'top', marginTop: '16px' }}>
        <Card className="w-[700px]">
          <CardHeader>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', height: '48px', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'left', fontWeight: '600', fontSize: '18px' }}>
                Lets get to know you, Bonnie.
              </div>
              <Button onClick={onNext}>Next</Button>
            </div>
            <div style={{ display: 'flex', height: '24px', fontSize: '16px', fontWeight: '700' }}>
              Whats your role?
            </div>
            
            <div className="flex items-center space-x-2" style={{ padding: '8px' }}>
              <div className="flex items-center space-x-2 border border-border border-rounded-lg" style={{ padding: '8px' }}>  
                <Checkbox id="founder" />
                <label
                  htmlFor="founder"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Founder
                </label>
              </div>

              <div className="flex items-center space-x-2" style={{ border: '1px solid', borderColor: "var(--border)",  borderRadius: '8px', padding: '8px' }}>  
                <Checkbox id="clevel" />
                <label
                  htmlFor="clevel"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  C-Level
                </label>
              </div>

              <div className="flex items-center space-x-2" style={{ border: '1px solid', borderColor: "var(--border)",  borderRadius: '8px', padding: '8px'  }}>  
                <Checkbox id="teamlead" />
                <label
                  htmlFor="teamlead"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Team Lead
                </label>
                </div>
            
              <div className="flex items-center space-x-2" style={{ border: '1px solid', borderColor: "var(--border)",  borderRadius: '8px', padding: '8px' }}>  
                <Checkbox id="ic" />
                <label
                  htmlFor="ic"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Individual Contributor
                </label>
              </div>
            
              <div className="flex items-center space-x-2" style={{ border: '1px solid', borderColor: "var(--border)",  borderRadius: '8px', padding: '8px' }}>  
                <Checkbox id="other" />
                <label
                  htmlFor="other"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Other
                </label>
              </div>
            </div>

          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default OnboardingStepOne;

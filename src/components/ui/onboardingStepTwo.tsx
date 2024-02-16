'use client'

import * as React from "react"

import { useAuth } from "@clerk/nextjs";

import { useUser } from "@clerk/nextjs";

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

  //Create constant for Clerk User ID
  const { isLoaded, orgId, userId, sessionId, getToken } = useAuth();

  // Create constant for Clerk user object
  const { user } = useUser();

  // ************ Company size checkbox states are here *****************
  const [soloEntrepreneurChecked, setSoloEntrepreneurChecked] = useState(false);
  const [microChecked, setMicroChecked] = useState(false);
  const [smallChecked, setSmallChecked] = useState(false);
  const [mediumChecked, setMediumChecked] = useState(false);
  const [largeChecked, setLargeChecked] = useState(false);
  const [enterpriseSmallChecked, setEnterpriseSmallChecked] = useState(false);
  const [enterpriseLargeChecked, setEnterpriseLargeChecked] = useState(false);

  // **************** Company size checkbox handlers ********************
  const handleCheckboxChangeSoloEntrepreneur = () =>{
    setSoloEntrepreneurChecked(!soloEntrepreneurChecked); 
  };
  const handleCheckboxChangeMicro = () =>{
    setMicroChecked(!microChecked); 
  };
  const handleCheckboxChangeSmall = () =>{
    setSmallChecked(!smallChecked); 
  };
  const handleCheckboxChangeMedium = () =>{
    setMediumChecked(!mediumChecked); 
  };
  const handleCheckboxChangeLarge = () =>{
    setLargeChecked(!largeChecked); 
  };
  const handleCheckboxChangeEnterpriseSmall = () =>{
    setEnterpriseSmallChecked(!enterpriseSmallChecked); 
  };
  const handleCheckboxChangeEnterpriseLarge = () =>{
    setEnterpriseLargeChecked(!enterpriseLargeChecked); 
  };

  const onSubmit = async () => {
    // Create array selectedCheckboxes that stores all the selected checkboxes
    const selectedCompanyCheckboxes: string[] = [];

    const onboarding_company_name = "";
    const onboarding_company_url = "";

    console.log(userId);

    // **************** Conditional statements that check each state to see if the checkbox is checked, if true add to selected array ***************
    if(soloEntrepreneurChecked){
      selectedCompanyCheckboxes.push("founder");
    }
    if(microChecked){
      selectedCompanyCheckboxes.push("micro");
    }
    if(smallChecked){
      selectedCompanyCheckboxes.push("small");
    }
    if(mediumChecked){
      selectedCompanyCheckboxes.push("medium");
    }
    if(largeChecked){
      selectedCompanyCheckboxes.push("large");
    }
    if(enterpriseSmallChecked){
      selectedCompanyCheckboxes.push("enterprise small");
    }
    if(enterpriseLargeChecked){
      selectedCompanyCheckboxes.push("enterprise large");
    }
    
    console.log(selectedCompanyCheckboxes);
    console.log("Made it to onSubmit! Sending POST request");

    // Send the selected checkboxes to the API
    const response = await fetch('/api/onboarding-step-two-store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_id: userId, onboarding_company_name: onboarding_company_name, onboarding_company_url: onboarding_company_url, onboarding_company_size: selectedCompanyCheckboxes}),
    });
  };

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
            <Button onClick={async () => {
                await onSubmit();
                onNext();
              }}>Analyze</Button>
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
                <Checkbox onClick={handleCheckboxChangeSoloEntrepreneur} id="soloentrepreneur" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="soloentrepreneur"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Solo Entrepreneur
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeMicro} id="micro" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="micro"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Micro (1-10 employees)
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeSmall} id="small" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="small"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Small (11-50 employees)
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeMedium} id="medium" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="medium"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Medium (51-200 employees)
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeLarge} id="large" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="large"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Large (201-500 employees)
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeEnterpriseSmall} id="enterprisesmall" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="enterprisesmall"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Enterprise (501-1000 employees)
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeEnterpriseLarge} id="enterpriselarge" className="border-2 border-zinc-400 dark:border-zinc-500"/>
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

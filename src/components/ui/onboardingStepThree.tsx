'use client'

export const runtime = 'edge';

import { useCompletion } from 'ai/react';

import OpenAI from 'openai';

import { OpenAIStream, StreamingTextResponse } from 'ai';

import { useAuth } from "@clerk/nextjs";

import { useUser } from "@clerk/nextjs";

import * as React from "react"

import { useState, useCallback, useEffect } from 'react';

import { Textarea } from "@/components/ui/textarea"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
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

  //Create constant for Clerk User ID
  const { isLoaded, orgId, userId, sessionId, getToken } = useAuth();

  // Create constant for Clerk user object
  const { user } = useUser();

  // Create state variables for company name and URL
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");

  // Create a state variable for the company mission
  const [companyMission, setCompanyMission] = useState("");
  const { complete } = useCompletion({
    api: '/api/completion',
  });

  const onLoad = async () => {
    
    console.log("Onboarding Step Three content being loaded");

    const response = await fetch(`/api/onboarding-step-three-store?user_id=${encodeURIComponent(userId ?? '')}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.log("Error fetching company data: " + response.statusText);
      return;
    }
  
    const data = await response.json();
    setCompanyName(data.companyName);
    setCompanyUrl(data.companyUrl);

    console.log("Company Name I get from the GET: " + data.companyName);
    console.log("Company URL I get from the GET: " + data.companyUrl);

    openAiCompanyMission(data.companyName, data.companyUrl);

  };

      const openAiCompanyMission = async (companyName: string, companyUrl: string) => {
        
        const missionPromptToSend = "What is the mission of " + companyName + companyUrl + "?";
        
        console.log("Getting company mission from OpenAI with the question: " + missionPromptToSend);

        const completion = await complete(missionPromptToSend);

        console.log("Company Mission I get from OpenAI: " + completion);

        setCompanyMission(completion as string);
      };

  const onSubmit = async () => {
    
    console.log("Onboarding Step Three content being submitted");

    const response = await fetch('/api/onboarding-step-three-store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_id: userId}),
    });

  };

  useEffect(() => {

    const fetchData = async () => {
      await onLoad();
    };

    fetchData();

  }, []);

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
            { companyName } { companyUrl }
          </div>
          <Button onClick={onNext}>Done</Button>
        </div>
        <div className="text-zinc-500 text-sm font-normal" style={{ display: 'flex', justifyContent: 'left' }}>
        { companyName } is fascinating! We have summarized their key aspects. Anything to tweak or add?
        </div>
        
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Industry Served" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Industry Served</SelectLabel>
              <SelectItem value="webdesignanddevelopment">Web Design and Development</SelectItem>
              <SelectItem value="customerservice">Customer Service</SelectItem>
              <SelectItem value="businessconsulting">Business Consulting</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        
        <div className="flex w-full h-6" style={{ fontSize: '16px', fontWeight: '700' }}>
          Company Mission
        </div>

          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Textarea id="companymission" placeholder= { companyMission } />
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
                <Textarea id="productdescription" placeholder="Product Description" />
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
                <Textarea id="email" placeholder="Target Audience" />
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

'use client'

export const runtime = 'edge';

import { useCompletion } from 'ai/react';

import { useAuth } from "@clerk/nextjs";

import { useUser } from "@clerk/nextjs";

import * as React from "react"

import { useState, useCallback, useEffect, useRef } from 'react';

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

import { Button } from "@/components/ui/button"

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
  const {
    completion: completionDescription,
    complete: completeDescription,
    input: inputDescription,
    stop: stopDescription,
    isLoading: isLoadingDescription,
    handleInputChange: handleInputChangeDescription,
    handleSubmit: handleSubmitDescription,
    setInput: setInputDescription,
  } = useCompletion({
    api: '/api/completion',
  });

  const {
    completion: completionMission,
    complete: completeMission,
    input: inputMission,
    setInput: setInputMission,
  } = useCompletion({
    api: '/api/completion',
  });

  const {
    completion: completionAudience,
    complete: completeAudience,
    input: inputAudience,
    stop: stopAudience,
    isLoading: isLoadingAudience,
    handleInputChange: handleInputChangeAudience,
    handleSubmit: handleSubmitAudience,
    setInput: setInputAudience,
  } = useCompletion({
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

    await openAiMission(data.companyName, data.companyUrl);
    await openAiAudience(data.companyName, data.companyUrl);
    await openAiDescription(data.companyName, data.companyUrl);

  };

  const openAiMission = async (companyName: string, companyUrl: string) => {
    
    const missionPromptToSend = "Analyze the following company and website, identify the company's mission. If these details are not explicitly stated on the website, then infer the answers from the marketing content on the website. Provide response in a concise 2 sentence summary. Here is the company name and URL:" + companyName + companyUrl;
    
    console.log("Getting company mission from OpenAI with the question: " + missionPromptToSend);

    //use setInput to set input to the prompt
    setInputMission(missionPromptToSend);

  };

  const openAiAudience = async (companyName: string, companyUrl: string) => {
    
    const audiencePromptToSend = "Analyze the following company and website, and identify the company's target audience, providing a two sentence summary of what their target audience is. If these details are not explicitly stated on the website, then infer the answers from the marketing content on the website. Here is the company name and URL:" + companyName + companyUrl;
    
    console.log("Getting company Audience from OpenAI with the question: " + audiencePromptToSend);

    //use setInput to set input to the prompt
    setInputAudience(audiencePromptToSend);

  };

  const openAiDescription = async (companyName: string, companyUrl: string) => {
    
    const descriptionPromptToSend = "Analyze the following company and website, and identify the company's product, providing a two sentence summary of what their product does. If these details are not explicitly stated on the website, then infer the answers from the marketing content on the website. Here is the company name and URL:" + companyName + companyUrl;
    
    console.log("Getting company mission from OpenAI with the question: " + descriptionPromptToSend);

    //use setInput to set input to the prompt
    setInputDescription(descriptionPromptToSend);

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

    if (inputMission) {
      completeMission(inputMission);
    }

    if (inputAudience) {
      completeAudience(inputAudience);
    }

    if (inputDescription) {
      completeDescription(inputDescription);
    }

    fetchData();

  }, [inputMission, inputAudience, inputDescription]);

  return (
    <main className="bg-zinc-300 dark:bg-zinc-700">
    <OnboardingHeaderComponent></OnboardingHeaderComponent>
    <div className="flex text-3xl font-semibold pt-4 justify-center items-center">
      Set Up Your Company Profile
    </div>
    <div className="flex pt-4 h-3/4 justify-center">
      <Card className="w-[700px]">
        <CardContent>

        <div className="flex justify-between items-center pt-4 pb-2">
          <div className="flex items-center text-left">
            <div className="flex text-lg font-semibold align-middle text-left pr-4">
              { companyName } 
            </div>
            <div className="flex text-sm font-normal align-middle text-left">
              { companyUrl }
            </div>
          </div>
          <Button onClick={onNext}>Done ➡️</Button>
        </div>
        <div className="flex text-zinc-500 text-sm font-normal pb-4 text-left">
        { companyName } is fascinating! We have summarized their key aspects. Anything to tweak or add?
        </div>
        
        <div className="pb-2">
          <Select>
            <SelectTrigger className="h-14 w-full">
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
        </div>
        
        <div className="pb-2">
          <div className="flex w-full h-6 text-sm font-medium">
            Company Mission
          </div>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Textarea id="companymission" placeholder= "Your company mission is loading..."  value= {completionMission} />
              </div>
              <div className="flex flex-col space-y-1.5">
              </div>
            </div>
          </form>
        </div>

        <div className="pb-2">
          <div className="flex w-full h-6 text-sm font-medium">
            Product Description
          </div>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Textarea id="productdescription" placeholder="Your product description is loading..." value= {completionDescription} />
              </div>
              <div className="flex flex-col space-y-1.5">
              </div>
            </div>
          </form>
        </div>

        <div className="pb-2">
          <div className="flex w-full h-6 text-sm font-medium">
            Target Audience
          </div>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Textarea id="email" placeholder="Your target audience is loading..." value= {completionAudience} />
              </div>
              <div className="flex flex-col space-y-1.5">
              </div>
            </div>
          </form>
        </div>

        </CardContent>
      </Card>
    </div>
  </main>
  );
};

export default OnboardingStepThree;

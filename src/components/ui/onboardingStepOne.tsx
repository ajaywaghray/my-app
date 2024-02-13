'use client'

import { useAuth } from "@clerk/nextjs";

import * as React from "react"

import { FormEventHandler } from "react"

import { useState } from 'react';

import { Checkbox } from "@/components/ui/checkbox"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

import OnboardingHeaderComponent from "../common/onboardingHeader";
import { randomInt } from "crypto";
import { currentUser } from "@clerk/nextjs";

const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
})

const OnboardingStepOne = ({ onNext }: { onNext: () => void; }) => {
  // Add state management and form handling here
  const [state, setState] = React.useState();
  
  //Create constant for Clerk User ID
  const { isLoaded, orgId, userId, sessionId, getToken } = useAuth();

  // What do you do checkbox states are here
  const [founderChecked, setFounderChecked] = useState(false);
  const [clevelChecked, setClevelChecked] = useState(false); 
  const [teamLeadChecked, setTeamLeadChecked] = useState(false); 
  const [icChecked, setICChecked] = useState(false); 
  const [doOtherChecked, setDoOtherChecked] = useState(false); 

  // What do you do checkbox handlers
  const handleCheckboxChangeFounder = () =>{
    setFounderChecked(!founderChecked); 
  };

  const handleCheckboxChangeClevel = () =>{
    setClevelChecked(!clevelChecked); 
  };

  const handleCheckboxChangeTeamLead = () =>{
    setTeamLeadChecked(!teamLeadChecked); 
  };

  const handleCheckboxChangeIC = () =>{
    setICChecked(!icChecked); 
  };

  const handleCheckboxChangeDoOther = () =>{
    setDoOtherChecked(!doOtherChecked); 
  };

  // form handling? Not sure what this is for
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: true,
    },
  })
 
  const onSubmit = async () => {
    // Create array selectedCheckboxes that stores all the selected checkboxes
    const selectedDoCheckboxes: string[] = [];

    console.log(userId);
    console.log(orgId);

    // Conditional statements that check each state to see if the checkbox is checked, if true add to selected array
    if(founderChecked){
      selectedDoCheckboxes.push("founder");
    }
    if(clevelChecked){
      selectedDoCheckboxes.push("clevel");
    }
    if(teamLeadChecked){
      selectedDoCheckboxes.push("teamlead");
    }
    if(icChecked){
      selectedDoCheckboxes.push("ic");
    }
    if(doOtherChecked){
      selectedDoCheckboxes.push("other");
    }
    
    console.log(selectedDoCheckboxes);
    console.log("Made it to onSubmit! Sending POST request");

    // Send the selected checkboxes to the API
    const response = await fetch('/api/onboarding-step-one-store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({workspace_id: orgId, user_id: userId, selections: selectedDoCheckboxes }),
    });
  };

  return (
    <main>
      <OnboardingHeaderComponent></OnboardingHeaderComponent>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '600', fontSize: '30px', marginTop: '16px' }}>
        Welcome to Quikest!
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', marginTop: '16px', marginBottom: '16px' }}>
        <Card className="w-[700px]">
          <CardHeader>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', height: '48px', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'left', fontWeight: '600', fontSize: '18px' }}>
                Lets get to know you, Bonnie.
              </div>

              <Button onClick={async () => {
                await onSubmit();
                onNext();
              }}>Next</Button>

            </div>
            <div style={{ display: 'flex', height: '24px', fontSize: '16px', fontWeight: '700' }}>
              Whats your role?
            </div>
            
            <div className="flex items-center space-x-2" style={{ padding: '8px' }}>
              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px' }}>  
                <Checkbox 
                    onClick={handleCheckboxChangeFounder}
                    id="founder"
                    className="border-2 border-zinc-400 dark:border-zinc-500"
                />
                <label
                  htmlFor="founder"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Founder
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeClevel} id="clevel" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="clevel"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  C-Level
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeTeamLead} id="teamlead" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="teamlead"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Team Lead
                </label>
                </div>
            
                <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px' }}>    
                <Checkbox onClick={handleCheckboxChangeIC} id="ic" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="ic"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Individual Contributor
                </label>
              </div>
            
              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeDoOther} id="other" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="other"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Other
                </label>
              </div>
            </div>
          <div className="flex grid grid-cols-2 gap-4">
            <div className="flex-col">
              
              <div className="flex w-full h-6" style={{ fontSize: '16px', fontWeight: '700' }}>
                What kind of work do you do?
              </div>
              
              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="uiuxdesign" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="uxuidesign"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  UX/UI Design
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="userresearch" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="userresearch"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  User Research
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="productmanagement" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="productmanagement"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Product Management
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="engineering" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="engineering"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Engineering
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="marketing" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="marketing"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Marketing
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="sales" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="sales"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sales
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="businessanalysis" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="businessanalysis"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Business Analysis
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="datascience" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="datascience"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Data Science
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="contentstrategy" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="contentstrategy"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Content Strategy
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="other" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="other"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Other
                </label>
              </div>
              
            </div>
            <div>

              <div className="flex w-full h-6" style={{ fontSize: '16px', fontWeight: '700' }}>
                What are your research goals?
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="analyzeusertestingdata" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="analyzeusertestingdata"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Analyze user testing data
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="understandcustomerfeedback" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="understandcustomerfeedback"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Understand customer feedback
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="gatheruserfeedback" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="gatheruserfeedback"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Gather user feedback
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="identifyuserpainpoints" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="identifyuserpainpoints"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Identify user pain points
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="optimizeproductusability" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="optimizeproductusability"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Optimize product usability
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="validateproductideas" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="validateproductideas"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Validate product ideas
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="exploreuserbehavior" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="exploreuserbehavior"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Explore user behavior
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="understanduserdemographics" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="understanduserdemographics"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Understand user demographics
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="developusercenteredfeatures" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="developusercenteredfeatures"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Develop user-centered features
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox id="other" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="other"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Other
                </label>
              </div>

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

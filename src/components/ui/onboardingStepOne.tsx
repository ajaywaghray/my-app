'use client'

import { useAuth } from "@clerk/nextjs";

import { useUser } from "@clerk/nextjs";

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

const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
})

const OnboardingStepOne = ({ onNext }: { onNext: () => void; }) => {
  // Add state management and form handling here
  const [state, setState] = React.useState();
  
  //Create constant for Clerk User ID
  const { isLoaded, orgId, userId, sessionId, getToken } = useAuth();

  // Create constant for Clerk user object
  const { user } = useUser();

  let userEmailAddress: string | null | undefined;

  // ************ What do you do checkbox states are here *****************
  const [founderChecked, setFounderChecked] = useState(false);
  const [clevelChecked, setClevelChecked] = useState(false); 
  const [teamLeadChecked, setTeamLeadChecked] = useState(false); 
  const [icChecked, setICChecked] = useState(false); 
  const [doOtherChecked, setDoOtherChecked] = useState(false); 

  // ************ Work checkbox states are here *****************
  const [uiuxChecked, setUiuxChecked] = useState(false);
  const [userResearchChecked, setUserResearchChecked] = useState(false);
  const [productManagementChecked, setProductManagementChecked] = useState(false);
  const [engineeringChecked, setEngineeringChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [salesChecked, setSalesChecked] = useState(false);
  const [businessAnalysisChecked, setBusinessAnalysisChecked] = useState(false);
  const [dataScienceChecked, setDataScienceChecked] = useState(false);
  const [contentStrategyChecked, setContentStrategyChecked] = useState(false);
  const [workOtherChecked, setWorkOtherChecked] = useState(false);

   // ************ Goals checkbox states are here *****************
  const [analyzeUserTestingDataChecked, setAnalyzeUserTestingDataChecked] = useState(false);
  const [understandCustomerFeedbackChecked, setUnderstandCustomerFeedbackChecked] = useState(false);
  const [gatherUserFeedbackChecked, setGatherUserFeedbackChecked] = useState(false);
  const [identifyUserPainPointsChecked, setIdentifyUserPainPointsChecked] = useState(false);
  const [optimizeProductUsabilityChecked, setOptimizeProductUsabilityChecked] = useState(false);
  const [validateProductIdeasChecked, setValidateProductIdeasChecked] = useState(false);
  const [exploreUserBehaviorChecked, setExploreUserBehaviorChecked] = useState(false);
  const [understandUserDemographicsChecked, setUnderstandUserDemographicsChecked] = useState(false);
  const [developUserCenteredFeaturesChecked, setDevelopUserCenteredFeaturesChecked] = useState(false);
  const [goalsOtherChecked, setGoalsOtherChecked] = useState(false);

  // **************** What do you do checkbox handlers ********************
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

  // **************** Work checkbox handlers ********************
  const handleCheckboxChangeUiux = () =>{
    setUiuxChecked(!uiuxChecked); 
  };
  const handleCheckboxChangeUserResearch = () =>{
    setUserResearchChecked(!userResearchChecked); 
  }
  const handleCheckboxChangeProductManagement = () =>{
    setProductManagementChecked(!productManagementChecked); 
  }
  const handleCheckboxChangeEngineering = () =>{
    setEngineeringChecked(!engineeringChecked); 
  }
  const handleCheckboxChangeMarketing = () =>{
    setMarketingChecked(!marketingChecked); 
  }
  const handleCheckboxChangeSales = () =>{
    setSalesChecked(!salesChecked); 
  }
  const handleCheckboxChangeBusinessAnalysis = () =>{
    setBusinessAnalysisChecked(!businessAnalysisChecked); 
  }
  const handleCheckboxChangeDataScience = () =>{
    setDataScienceChecked(!dataScienceChecked); 
  }
  const handleCheckboxChangeContentStrategy = () =>{
    setContentStrategyChecked(!contentStrategyChecked); 
  }
  const handleCheckboxChangeWorkOther = () =>{
    setWorkOtherChecked(!workOtherChecked); 
  }

  // **************** Goals checkbox handlers ********************
  const handleCheckboxChangeAnalyzeUserTestingData = () =>{
    setAnalyzeUserTestingDataChecked(!analyzeUserTestingDataChecked); 
  }
  const handleCheckboxChangeUnderstandCustomerFeedback = () =>{
    setUnderstandCustomerFeedbackChecked(!understandCustomerFeedbackChecked); 
  }
  const handleCheckboxChangeGatherUserFeedback = () =>{
    setGatherUserFeedbackChecked(!gatherUserFeedbackChecked); 
  }
  const handleCheckboxChangeIdentifyUserPainPoints = () =>{
    setIdentifyUserPainPointsChecked(!identifyUserPainPointsChecked); 
  }
  const handleCheckboxChangeOptimizeProductUsability = () =>{
    setOptimizeProductUsabilityChecked(!optimizeProductUsabilityChecked); 
  }
  const handleCheckboxChangeValidateProductIdeas = () =>{
    setValidateProductIdeasChecked(!validateProductIdeasChecked); 
  }
  const handleCheckboxChangeExploreUserBehavior = () =>{
    setExploreUserBehaviorChecked(!exploreUserBehaviorChecked); 
  }
  const handleCheckboxChangeUnderstandUserDemographics = () =>{
    setUnderstandUserDemographicsChecked(!understandUserDemographicsChecked); 
  }
  const handleCheckboxChangeDevelopUserCenteredFeatures = () =>{
    setDevelopUserCenteredFeaturesChecked(!developUserCenteredFeaturesChecked); 
  }
  const handleCheckboxChangeGoalsOther = () =>{
    setGoalsOtherChecked(!goalsOtherChecked); 
  }

  // form handling? Not sure what this is for
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: true,
    },
  })
 
  const onSubmit = async () => {
    // Create array selectedCheckboxes that stores all the selected checkboxes
    const selectedCheckboxes: string[] = [];

    //Create random workspace ID
    const workspaceId = Math.floor(Math.random() * (100000000 - 2 + 1)) + 2;

    if (user) {
      userEmailAddress = user.primaryEmailAddress?.emailAddress;
      console.log(userEmailAddress);
    }

    console.log(userId);
    console.log(workspaceId);
    

    // **************** Conditional statements that check each state to see if the checkbox is checked, if true add to selected array ***************
    if(founderChecked){
      selectedCheckboxes.push("founder");
    }
    if(clevelChecked){
      selectedCheckboxes.push("clevel");
    }
    if(teamLeadChecked){
      selectedCheckboxes.push("teamlead");
    }
    if(icChecked){
      selectedCheckboxes.push("ic");
    }
    if(doOtherChecked){
      selectedCheckboxes.push("do_other");
    }
    if(uiuxChecked){
      selectedCheckboxes.push("uiux");
    }
    if(userResearchChecked){
      selectedCheckboxes.push("user_research");
    }
    if(productManagementChecked){
      selectedCheckboxes.push("product_management");
    }
    if(engineeringChecked){
      selectedCheckboxes.push("engineering");
    }
    if(marketingChecked){
      selectedCheckboxes.push("marketing");
    }
    if(salesChecked){
      selectedCheckboxes.push("sales");
    }
    if(businessAnalysisChecked){
      selectedCheckboxes.push("business_analysis");
    }
    if(dataScienceChecked){
      selectedCheckboxes.push("data_science");
    }
    if(contentStrategyChecked){
      selectedCheckboxes.push("content_strategy");
    }
    if(workOtherChecked){
      selectedCheckboxes.push("work_other");
    }
    if(analyzeUserTestingDataChecked){
      selectedCheckboxes.push("analyze_user_testing_data");
    }
    if(understandCustomerFeedbackChecked){
      selectedCheckboxes.push("understand_customer_feedback");
    }
    if(gatherUserFeedbackChecked){
      selectedCheckboxes.push("gather_user_feedback");
    }
    if(identifyUserPainPointsChecked){
      selectedCheckboxes.push("identify_user_pain_points");
    }
    if(optimizeProductUsabilityChecked){
      selectedCheckboxes.push("optimize_product_usability");
    }
    if(validateProductIdeasChecked){
      selectedCheckboxes.push("validate_product_ideas");
    }
    if(exploreUserBehaviorChecked){
      selectedCheckboxes.push("explore_user_behavior");
    }
    if(understandUserDemographicsChecked){
      selectedCheckboxes.push("understand_user_demographics");
    }
    if(developUserCenteredFeaturesChecked){
      selectedCheckboxes.push("develop_user_centered_features");
    }
    if(goalsOtherChecked){
      selectedCheckboxes.push("goals_other");
    }
    
    console.log(selectedCheckboxes);
    console.log("Made it to onSubmit! Sending POST request");

    // Send the selected checkboxes to the API
    const response = await fetch('/api/onboarding-step-one-store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({workspace_id: workspaceId, user_id: userId, user_email_address: userEmailAddress, selections: selectedCheckboxes }),
    });
  };

  return (
    <main>
      <OnboardingHeaderComponent></OnboardingHeaderComponent>
      <div className="w-full h-full bg-zinc-300 dark:bg-zinc-900">
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
              }}>Next ➡️</Button>

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
                <Checkbox onClick={handleCheckboxChangeUiux} id="uiuxdesign" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="uxuidesign"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  UX/UI Design
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeUserResearch} id="userresearch" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="userresearch"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  User Research
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeProductManagement} id="productmanagement" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="productmanagement"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Product Management
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeEngineering} id="engineering" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="engineering"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Engineering
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeMarketing} id="marketing" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="marketing"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Marketing
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeSales} id="sales" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="sales"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sales
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeBusinessAnalysis} id="businessanalysis" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="businessanalysis"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Business Analysis
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeDataScience} id="datascience" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="datascience"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Data Science
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeContentStrategy} id="contentstrategy" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="contentstrategy"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Content Strategy
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeWorkOther} id="other" className="border-2 border-zinc-400 dark:border-zinc-500"/>
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
                <Checkbox onClick={handleCheckboxChangeAnalyzeUserTestingData} id="analyzeusertestingdata" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="analyzeusertestingdata"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Analyze user testing data
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeUnderstandCustomerFeedback} id="understandcustomerfeedback" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="understandcustomerfeedback"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Understand customer feedback
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeGatherUserFeedback} id="gatheruserfeedback" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="gatheruserfeedback"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Gather user feedback
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeIdentifyUserPainPoints} id="identifyuserpainpoints" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="identifyuserpainpoints"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Identify user pain points
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeOptimizeProductUsability} id="optimizeproductusability" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="optimizeproductusability"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Optimize product usability
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeValidateProductIdeas} id="validateproductideas" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="validateproductideas"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Validate product ideas
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeExploreUserBehavior} id="exploreuserbehavior" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="exploreuserbehavior"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Explore user behavior
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeUnderstandUserDemographics} id="understanduserdemographics" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="understanduserdemographics"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Understand user demographics
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeDevelopUserCenteredFeatures} id="developusercenteredfeatures" className="border-2 border-zinc-400 dark:border-zinc-500"/>
                <label
                  htmlFor="developusercenteredfeatures"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Develop user-centered features
                </label>
              </div>

              <div className="flex items-center space-x-2 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg" style={{ padding: '8px', marginTop: '8px' }}>      
                <Checkbox onClick={handleCheckboxChangeGoalsOther} id="other" className="border-2 border-zinc-400 dark:border-zinc-500"/>
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
      </div>
    </main>
  );
};

export default OnboardingStepOne;

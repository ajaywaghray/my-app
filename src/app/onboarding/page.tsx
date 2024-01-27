import * as React from "react"

import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { Checkbox } from "@/components/ui/checkbox"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Onboarding () {
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
    </main>
  )
}
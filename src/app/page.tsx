import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Home() {
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
        <div style={{fontWeight: '700'}}>
          Personas
        </div>
        <Tabs defaultValue="insights" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="insights">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        <Button>+ Create a persona</Button>
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Bonnie's Workspace Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </main>
  )
}

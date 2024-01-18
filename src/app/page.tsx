import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top', padding: '16px' }}>
        <div style={{fontWeight: '700'}}>
          Personas
        </div>
        <Tabs defaultValue="insights" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="personas">Personas</TabsTrigger>
          </TabsList>
          <TabsContent value="insights">Insights go here.</TabsContent>
          <TabsContent value="personas">Persona creation goes here.</TabsContent>
        </Tabs>
        <div style={{ display: 'flex', alignItems: 'top' }}>
          <Avatar style={{paddingRight: '16px'}}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
        </div>
      </div>
    </main>
  )
}

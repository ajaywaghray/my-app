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
        <div style={{ flex: 1, display: 'flex', justifyContent: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: '700' }}>
          <img src="/Quikest Logo.svg" alt="Image description" style={{ marginRight: '4px' }} />
          Quikest
        </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Tabs defaultValue="insights" className="w-[200px]">
            <TabsList>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="personas">Personas</TabsTrigger>
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="surveys">Surveys</TabsTrigger>
            </TabsList>
            <TabsContent value="insights" style={{ textAlign: 'center' }}>Insights go here.</TabsContent>
            <TabsContent value="personas" style={{ textAlign: 'center' }}>Persona creation goes here.</TabsContent>
            <TabsContent value="chat" style={{ textAlign: 'center' }}>Chats go here.</TabsContent>
            <TabsContent value="data" style={{ textAlign: 'center' }}>Data goes here.</TabsContent>
            <TabsContent value="surveys" style={{ textAlign: 'center' }}>Surveys go here.</TabsContent>
          </Tabs>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'right' }}>
          <Avatar style={{ marginRight: '8px' }}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Select>
            <SelectTrigger className="w-[300px]">
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

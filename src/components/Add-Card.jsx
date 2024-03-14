import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"


export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">New Card</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-950">
        <DialogHeader>
          <DialogTitle>Add New Card</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 ">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="number">
              Card Number
            </Label>
            <Input id="number" placeholder="0000 1111 2222 3333 4444" />
          </div>
          <div className="flex items-center justify-left space-x-20 pl-6">
            <Label htmlFor="month">
              Month
            </Label>
            <Label htmlFor="Year">
              Year
            </Label>
            <Label htmlFor="cvv">
              CVV
            </Label>
          </div>
          <div className="flex items-center justify-center space-x-10">
            <Input id="number" placeholder="MM" className="w-20" />
            <Input id="number" placeholder="YYYY" className="w-20" />
            <Input id="number" placeholder="000" className="w-20" />
          </div>
          <div className="flex flex-col items-center space-y-1.5">
            <Label htmlFor="number">
              Balance
            </Label>
            <Input id="number" placeholder="$0.00" className="w-48 text-center"/>
          </div>

          <div className="flex items-center justify-center space-x-10 space-y-2	">
          <Label htmlFor="mode">Personal</Label>
            <Switch id="mode" />
            <Label htmlFor="mode">Profecional</Label>
          </div>

        </div>
        <DialogFooter>
          <Button type="submit">Add Card</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
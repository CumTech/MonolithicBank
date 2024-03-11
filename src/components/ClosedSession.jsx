import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button"
import Image from "next/image";

function ClosedSession() {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent className="bg-black border-black justify-items-center">
          <AlertDialogHeader className="flex flex-col space-y-6">
            <AlertDialogTitle className="self-center flex text-text-default text-end text-xl leading-7">
              Session closed due to inactivity!
              <Image src="/icons/Icon.svg" alt="Image about closed session is like an x" className="absolute top-4 right-4" width={16} height={16}/>
            </AlertDialogTitle>
            <AlertDialogDescription className="text-text-default text-justify text-base font-normal" >
            For your security, you have been automatically logged out due to inactivity. To access again, please log in.
            </AlertDialogDescription>
            <AlertDialogDescription className="text-text-default text-justify text-base font-normal">
            Remember that your safety is our priority. If you have any questions or need assistance, do not hesitate to contact us.
            </AlertDialogDescription>
            <AlertDialogDescription className="text-text-default text-center font-normal text-xl leading-7">
            Thanks for trusting us!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div>
            <Button className="text-center">Sign in again</Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export { ClosedSession };

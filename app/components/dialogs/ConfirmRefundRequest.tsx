import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import seal from "~/assets/images/ph_seal-check-fill.svg";

export default function ConfirmRefundRequest({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[660px] p-[72px] ">
        <DialogHeader>
         <div className=" m-auto ">
            <img src={seal} alt="" />
         </div>
          <DialogTitle className="text-2xl text-center m-auto">
            Refund request received
          </DialogTitle>
        </DialogHeader>
        <div className=" w-full">
          <p className=" text-center max-w-[80%] text-[15px] m-auto ">
            Your donation refund request has been received. You will receive a
            link in your email to verify and confirm your request.
          </p>
        </div>
        <DialogFooter className="mt-5">
          <DialogClose className="m-auto">
            <button className=" m-auto rounded-full border-2 bg-agreen px-[54px] py-2 font-bold hover:bg-agreen/40 text-[#fff]">
               Done
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

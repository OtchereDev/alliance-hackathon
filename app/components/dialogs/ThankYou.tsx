import seal from '~/assets/images/ph_seal-check-fill.svg'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

export default function ThankYou({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-[72px] sm:max-w-[425px] lg:max-w-[660px]">
        <DialogHeader>
          <div className="m-auto">
            <img src={seal} alt="" />
          </div>
          <DialogTitle className="m-auto text-center text-2xl">
            Thank you for Your Donation
          </DialogTitle>
        </DialogHeader>
        <div className="w-full">
          <p className="m-auto max-w-[80%] text-center text-[15px]">
            You just helped <span className=" font-bold ">Annie</span> get closer to her treatment goals. Your
            donation ID is <span className=' font-bold'>D123344455</span> . Keep it safe for future refunds.
          </p>
        </div>
        <div className=" flex justify-center">
          <Checkbox name="newsletter" id='newsletter' />
          <Label htmlFor="newsletter">
            I want to get newsletters from ELBA
          </Label>
        </div>
        <DialogFooter className="mt-5">
          <DialogClose className="m-auto">
            <button className="m-auto rounded-full border-2 bg-agreen px-[54px] py-2 font-bold text-[#fff] hover:bg-agreen/40">
              Done
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

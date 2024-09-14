import { Form } from '@remix-run/react'
import ThankYou from '~/components/dialogs/ThankYou'
import ImageBox from '~/components/ui/imagebox'
import { Label } from '~/components/ui/label'
import NavBar from '~/components/ui/navbar'

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="container m-auto">
        <div className="mt-[7rem] flex w-full items-center justify-center">
          <div className="h-[60] w-[30%]">
            <ImageBox />
          </div>
          <div className="flex w-[50%] items-center justify-center">
            <div>
              <h2 className="text-center text-2xl font-bold text-primary">
                Request Donation Refund
              </h2>
              <p className="mx-auto mt-5 w-[70%] text-center text-base">
                Enter your donation ID and the email you used when making the
                donation
              </p>

              <Form className="mt-[60px] flex w-full flex-col items-center justify-center gap-[15px]">
                <div className="w-[70%] flex-1">
                  <Label htmlFor="name" className="text-right text-base">
                    Donation ID
                  </Label>
                  <input
                    className="rou mt-3 block w-full rounded-[10px] border px-4 py-3 outline-none"
                    placeholder="D123445665"
                  />
                </div>

                <div className="w-[70%] flex-1">
                  <Label htmlFor="name" className="text-right text-base">
                    Email
                  </Label>
                  <input
                    className="rou mt-3 block w-full rounded-[10px] border px-4 py-3 outline-none"
                    placeholder="someone@email.com"
                  />
                </div>

                <div className="mt-[40px] flex w-[70%] justify-center">
                  <ThankYou>
                    <button className="hidden w-full rounded-full border border-primary bg-primary px-[54px] py-2 font-bold text-white lg:block">
                      Request Refund
                    </button>
                  </ThankYou>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

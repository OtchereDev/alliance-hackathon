import { Outlet } from '@remix-run/react'
import {
  FooterLogo,
  Instagram,
  LinkedIn,
  XLogo,
} from '~/components/shared/icons'
import NavBar from '~/components/ui/navbar'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Outlet />
      <div className="mx-auto max-w-[1440px] px-[50px]">
        <footer className="mt-[150px] flex justify-between border-t p-[50px]">
          <FooterLogo className="h-[96px] w-[97px]" />

          <div>
            <h3 className="font-bold text-ablack">Get in touch</h3>
            <a
              href="mailto:info@thebigalliance.org.uk"
              className="mb-[36px] mt-[28px] inline-block text-ablack underline"
            >
              info@thebigalliance.org.uk
            </a>

            <div className="flex gap-5">
              <Instagram className="size-6" />
              <LinkedIn className="size-6" />
              <XLogo className="size-6" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-ablack">Find us</h3>
            <p className="mt-5 max-w-[186px]">
              13 Elliott&apos;s Place, Islington, London N1 8HX
            </p>
          </div>
        </footer>
      </div>
      <div className="border py-10">
        <p className="text-center text-[#4D5061]">
          © 2024 The Alliance Donate Project. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

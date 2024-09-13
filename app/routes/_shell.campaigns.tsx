import { Form } from '@remix-run/react'
import { ChevronLeftCircle, ChevronRightCircle, Search } from 'lucide-react'
import { Filter } from '~/components/shared/icons'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '~/components/ui/pagination'
import { CampaignCard } from './_dashboard.admin.campaigns._index'

export default function Campaigns() {
  return (
    <>
      <div className="mx-auto max-w-[1440px] pt-[100px]">
        <div className="relative mx-auto mt-[60px] flex h-[500px] max-w-[1340px] flex-col items-center justify-center overflow-hidden !rounded-[30px]">
          <img
            src={
              'https://s3-alpha-sig.figma.com/img/6e36/b4e7/f9c7629701bdbf890ecc595d840a1f25?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q5YSNx3KXJNqMW4Au~omtFIYDRhUSXieUmJTPwt5gc17rsMVJhiEtxyYM2vnxdAEbsDqL67QmUpopDQjrkhBMy0QjG8xqmGevwYzT~4weOnCupXVUSxSe3bcNu5fKImHGsJuc~LBCicNXTc4araHwgY2Ae3gUhydXV6SA-bMYL9TADvz2R82OWx4l18K0JIzX5vqzL4TFio45YtOQByisF--d-WC4VhzsP0hwDKwQjngbcqmUyyHQ4hGemrs-WlLxQWYP2kGpw4izIU6MMLGwm3GZB2mM~HOV2LGM4mp0HUVzDvA75ae5GgwO-QJhyo3u-K~gLzF0sXeShxWLQxymg__'
            }
            alt={"Campaign_Image"}
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-20"></div>
          <div className="relative">
            <h2 className="mx-auto max-w-[652px] text-center text-[48px] font-bold text-white">
              Find a cause you’re passionate about
            </h2>
          </div>
        </div>
        <div className="mt-[70px] px-[100px]">
          <h3 className="mb-[50px] text-2xl font-bold">Campaigns</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Form name="search" method="GET" className="flex w-full gap-2">
                <div className="flex max-w-[311px] flex-1 items-center gap-3 rounded-full border border-ablack px-[14px] py-[10px] lg:max-w-[311px]">
                  <Search strokeWidth={2.5} size={18} />
                  <input
                    type="text"
                    name="search"
                    placeholder="Search campaign"
                    className="font-montserrat placeholder:font-montserrat flex-1 outline-none"
                  />
                </div>
              </Form>

              <button className="flex items-center gap-3 rounded-full border border-black px-5 py-3 text-sm">
                <Filter />
                <span className="hidden lg:inline-block">Filter</span>
              </button>
            </div>

            <div className="flex gap-2">
              <ChevronLeftCircle
                className="size-8 cursor-pointer"
                strokeWidth={'1'}
              />
              <ChevronRightCircle
                className="size-8 cursor-pointer"
                strokeWidth={'1'}
              />
            </div>
          </div>

          <div className="mt-[40px] grid grid-cols-1 gap-y-[30px] md:grid-cols-2 md:gap-x-[23px] lg:grid-cols-4 lg:gap-y-[40px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (i) => (
                <CampaignCard key={i} />
              )
            )}
          </div>
          <div className="mt-[60px] flex items-center justify-between">
            <p className="text-gray-600">Showing 1 to 3 of 3</p>
            <Pagination className="mx-0 w-auto rounded-md border">
              <PaginationContent>
                <PaginationItem className="border-r">
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem className="border-l">
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  )
}

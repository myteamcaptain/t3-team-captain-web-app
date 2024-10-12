import Link from "next/link";
import Wrapper from "../Generals/Wrapper";
import { FOOTER_LINKS } from "@/lib/const";
import type { FooterLinks } from "@/lib/types";
import type { LinkAppProps } from "@/lib/types";

export default function Footer() {
  return (
    <div className="w-full bg-secondary text-white">
      <Wrapper className="grid w-full grid-cols-2 items-stretch gap-4">
        {FOOTER_LINKS.map((itemLink: FooterLinks, itemIndex: number) => (
          <div key={`footer_${itemIndex}`} className="space-y-2 py-10">
            <p className="font-[600] uppercase">{itemLink.label}</p>
            <div className="flex flex-col space-y-2">
              {itemLink.list.map((links: LinkAppProps, linksIndex: number) => (
                <Link
                  key={`link_${linksIndex}`}
                  href={links.link}
                  className="hover:underline"
                >
                  {links.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
        {/* <div className='space-y-2 py-10'>
          <p className='uppercase font-[600]'>Follow Us</p>
          <div className='space-y-4'>
            <div className='flex space-x-2 justify-start'>
              <div className='bg-white w-10 h-auto overflow-hidden'>
                <Image
                  src='/social/facebook.png'
                  width={60}
                  height={60}
                  alt='Facebook'
                />
              </div>
              <div className=' w-10 bg-white h-10 overflow-hidden p-1 rounded-md'>
                <Image
                  src='/social/twitter-x.png'
                  width={60}
                  height={60}
                  alt='Twitter'
                />
              </div>
              <div className='w-10 h-auto overflow-hidden'>
                <Image
                  src='/social/youtube.png'
                  width={60}
                  height={60}
                  alt='Youtube'
                />
              </div>
              <div className=' w-10 bg-white h-10 overflow-hidden p-1 rounded-md'>
                <Image
                  src='/social/discord.png'
                  width={60}
                  height={60}
                  alt='Discord'
                />
              </div>
            </div>
            <p>
              Phone: &nbsp;
              <a
                href={`tel:+${BUSINESS_PHONE_NUMBER.replaceAll(' ', '')}`}
                className='hover:underline'
              >
                {BUSINESS_PHONE_NUMBER}
              </a>
            </p>
          </div>
        </div> */}
      </Wrapper>
      <hr className="border-black" />
      <Wrapper className="flex h-14 w-full items-center justify-between">
        <div>Company Name</div>
        <div>© Copyright 2024</div>
      </Wrapper>
    </div>
  );
}

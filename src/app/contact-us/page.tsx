import Image from "next/image";
import Wrapper from "@/components/Generals/Wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LucideMail } from "lucide-react";
import { BUSINESS_EMAIL } from "@/lib/const";
import TriangleBottomShape from "@/components/Generals/TriangleBottomShape";
import PageLayouts from "@/components/Layouts";

export default function ContactUs() {
  return (
    <PageLayouts className="w-full bg-slate-200 dark:bg-primary-foreground">
      <div className="relative">
        <Wrapper className="m-auto flex items-center justify-center py-20">
          <Card className="z-10 w-[70%] shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold tracking-tight first:mt-0">
                Get In Touch
              </CardTitle>
              <CardDescription>
                We are here for you! How can we help?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between space-x-4">
                <form className="basic-1/2 w-full space-y-4">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">Enter your name</Label>
                    <Input type="text" id="name" placeholder="" />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email address</Label>
                    <Input type="email" id="email" placeholder="" />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Your message</Label>
                    <Textarea placeholder="" />
                  </div>
                  <Button
                    type="submit"
                    size={"xl"}
                    className="w-full dark:text-white"
                  >
                    Submit
                  </Button>
                </form>
                <div className="basic-1/2 flex w-full flex-col items-center space-y-8">
                  <Image
                    src="/contact_us.svg"
                    alt="Contact Us image"
                    width={200}
                    height={200}
                    className="w-[250px]"
                  />
                  <div className="w-full space-y-2 px-5">
                    {/* <div className='flex items-center space-x-2'>
                    <span className='p-2 bg-primary rounded-full flex items-center justify-center'>
                      <LucidePhoneCall color='#ffffff' size={24} />
                    </span>
                    <p>{BUSINESS_PHONE_NUMBER}</p>
                  </div> */}
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center justify-center rounded-full bg-primary p-2">
                        <LucideMail color="#ffffff" size={24} />
                      </span>
                      <p>{BUSINESS_EMAIL}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Wrapper>
        <TriangleBottomShape
          svgProps={{
            className: "w-full  h-52 absolute bottom-0",
          }}
          fill="#FFF"
        />
      </div>
    </PageLayouts>
  );
}

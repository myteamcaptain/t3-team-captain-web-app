import Wrapper from "@/components/Generals/Wrapper";
import parse from "html-react-parser";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_LIST } from "@/lib/const";
import type { FaqTypes } from "@/lib/types";
import PageLayouts from "@/components/Layouts";

export default function FAQPage() {
  return (
    <PageLayouts>
      <Wrapper className="flex-col space-y-8 py-20">
        <div className="w-full">
          <h1 className="texts-4xl scroll-m-20 text-center font-extrabold tracking-tight lg:text-5xl">
            Frequently asked
          </h1>
          <p className="texts-4xl scroll-m-20 text-center font-extrabold tracking-tight text-primary lg:text-5xl">
            questions
          </p>
        </div>
        <div className="w-[600px]">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_LIST.map((listItem: FaqTypes, listIndex: number) => (
              <AccordionItem
                value={`item-${listIndex}`}
                key={`faq_${listIndex}`}
              >
                <AccordionTrigger>{parse(listItem.question)}</AccordionTrigger>
                <AccordionContent>{parse(listItem.answer)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Wrapper>
    </PageLayouts>
  );
}

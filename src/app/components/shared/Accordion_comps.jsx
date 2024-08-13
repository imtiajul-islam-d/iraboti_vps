import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export const Accordion_comps = ({ ans, que }) => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="py-0">
                <AccordionTrigger><h4 className="text-gray-300 hover:text-gray-50 transition-colors h5 font-head">{que}</h4></AccordionTrigger>
                <AccordionContent>
                    <p className="xl:text-lg text-left text-white/70">
                        {ans}
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}
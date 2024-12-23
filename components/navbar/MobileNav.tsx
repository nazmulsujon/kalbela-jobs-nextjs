import Link from "next/link"

import { Accordion, AccordionItem } from "@/components/ui/accordion"
import useApiRequest from "@/app/hooks/useApiRequest"

const MobileNav: React.FC = () => {
  const { data, loading, error } = useApiRequest<any>("category", "GET")

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-slate-200">
      <section>
        <Accordion type="single" collapsible className="space-y-3 py-3">
          {data?.data?.map((navigation: any) => (
            <AccordionItem
              className="border-b-0"
              key={navigation._id}
              value={navigation.name}
            >
              <Link href={navigation.slag} className="flex items-center">
                {navigation.name}
              </Link>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}

export default MobileNav

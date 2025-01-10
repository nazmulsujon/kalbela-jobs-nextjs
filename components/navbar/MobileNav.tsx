import Link from "next/link"

import { Accordion, AccordionItem } from "@/components/ui/accordion"
import useApiRequest from "@/app/hooks/useApiRequest"
import PrimaryBtn from "../PrimaryBtn"
import SecondaryBtn from "../SecondaryBtn"
import { useUserData } from "@/utils/encript_decript"

const MobileNav: React.FC = () => {
      const { data, loading, error } = useApiRequest<any>("category", "GET")
      const [user] = useUserData()


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
                              {!user && <Link href="/login" className="flex items-center">
                                    <PrimaryBtn className="py-2 w-full px-4">Login</PrimaryBtn>
                              </Link>}
                              {!user && <Link href="/registration" className="flex items-center">
                                    <SecondaryBtn className="py-2 w-full px-4">Registration</SecondaryBtn>
                              </Link>}

                        </Accordion>
                  </section>
            </div>
      )
}

export default MobileNav

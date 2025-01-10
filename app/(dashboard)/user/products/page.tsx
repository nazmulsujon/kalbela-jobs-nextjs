import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StickyNote, CheckSquare } from 'lucide-react'

export default function Home() {
      return (
            <main className="container mx-auto p-4  flex items-center justify-center">
                  <div className="grid gap-8 md:grid-cols-2 w-full max-w-4xl">
                        <ProductCard
                              title="Sticky Note"
                              description="Capture your thoughts and ideas instantly"
                              icon={<StickyNote className="h-12 w-12" />}
                              href="/user/products/sticky-note"
                              color="bg-yellow-100 hover:bg-yellow-200"
                        />
                        <ProductCard
                              title="Todo Manager"
                              description="Organize your tasks and boost productivity"
                              icon={<CheckSquare className="h-12 w-12" />}
                              href="/user/products/todo"
                              color="bg-blue-100 hover:bg-blue-200"
                        />
                  </div>
            </main>
      )
}

interface ProductCardProps {
      title: string
      description: string
      icon: React.ReactNode
      href: string
      color: string
}

function ProductCard({ title, description, icon, href, color }: ProductCardProps) {
      return (
            <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${color}`}>
                  <CardContent className="p-6">
                        <Link href={href} className="flex flex-col items-center text-center group">
                              <div className="mb-4 p-4 rounded-full bg-white shadow-md transition-transform duration-300 group-hover:scale-110">
                                    {icon}
                              </div>
                              <h2 className="text-2xl font-bold mb-2">{title}</h2>
                              <p className="text-gray-600 mb-4">{description}</p>
                              <Button className="w-full">
                                    Get Started
                              </Button>
                        </Link>
                  </CardContent>
            </Card>
      )
}

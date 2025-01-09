'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Share2 } from 'lucide-react'


interface ShareButtonProps {
      url: string
      title: string
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title }) => {
      const [isShared, setIsShared] = useState(false)

      const handleShare = async () => {
            if (navigator.share) {
                  try {
                        await navigator.share({
                              title: title,
                              url: url,
                        })
                        setIsShared(true)

                  } catch (error) {
                        console.error("Error sharing:", error)

                  }
            } else {
                  navigator.clipboard.writeText(url)
                  setIsShared(true)

            }
      }

      return (
            <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={handleShare}
            >
                  <Share2 className="w-4 h-4" />
                  {isShared ? "Shared!" : "Share"}
            </Button>
      )
}

export default ShareButton

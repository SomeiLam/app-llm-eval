import { useEffect, useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { ScrollArea } from '@/components/ui/scroll-area'

const PostContent = ({ content }: { content: string }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  // Ref to track the scroll position of ScrollArea
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (scrollAreaRef.current) {
      const scrollTop = scrollAreaRef.current.scrollTop
      if (scrollTop > 10) {
        setIsScrolled(true) // Remove padding when scroll position is greater than 10px
      } else {
        setIsScrolled(false) // Add padding when at the top
      }
    }
  }

  const countWords = (text: string) => {
    return text.length
  }

  useEffect(() => {
    setWordCount(countWords(content))
    // Listen to the scroll event within ScrollArea
    const scrollArea = scrollAreaRef.current
    if (scrollArea) {
      scrollArea.addEventListener('scroll', handleScroll)
    }

    // Clean up the event listener on component unmount
    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener('scroll', handleScroll)
      }
    }
  }, [content])

  return (
    <div className="group relative mx-5 rounded-2xl border border-slate-200 bg-slate-50">
      <ScrollArea className="h-[300px]" ref={scrollAreaRef}>
        {/* Post content */}
        <div className={`transition-all ${isScrolled ? 'pt-0' : 'pt-2'} px-3`}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        {/* Word Count */}
        <div
          style={{ backgroundColor: 'rgba(236, 236, 236, 0.899)' }}
          className="absolute opacity-100 group-hover:opacity-0 bottom-px right-px rounded-lg px-2 flex w-fit items-center bg-transparent p-1 text-xs text-[#79869b]"
        >
          {wordCount} characters
        </div>
      </ScrollArea>
    </div>
  )
}

export default PostContent

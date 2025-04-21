import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { ScrollArea } from '@/components/ui/scroll-area'

const PostContent = ({ content }: { content: string }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true) // Remove padding when scroll position is greater than 10px
    } else {
      setIsScrolled(false) // Add padding when at the top
    }
  }

  const countWords = (text: string) => {
    return text.length
  }

  useEffect(() => {
    setWordCount(countWords(content))
    // Listen to the scroll event
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [content])

  return (
    <div className="group relative mx-5 rounded-2xl border border-slate-200 bg-slate-50">
      <ScrollArea className="h-[300px]">
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

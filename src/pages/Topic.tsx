import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { topics } from '@/constants'
import { ChevronLeft } from 'lucide-react'
import TopicCard from '@/components/Topic/TopicCard'

const Topic = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const topic = topics.find((t) => t.id === id)

  if (!topic) {
    return (
      <div className="container mx-auto p-4 sm:p-6">
        <div className="text-center text-muted-foreground">Topic not found</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 sm:p-10">
      <div className="mb-8 flex flex-row gap-2">
        <Button
          variant="ghost"
          size="lg"
          className="border-0 h-10 w-10"
          onClick={() => navigate('/topics')}
        >
          <ChevronLeft style={{ height: '2rem', width: '2rem' }} />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">{topic.prompt}</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {topic.posts.map((post) => (
          <TopicCard post={post} />
        ))}
      </div>
    </div>
  )
}

export default Topic

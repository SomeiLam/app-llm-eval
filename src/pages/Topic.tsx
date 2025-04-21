import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { topics } from '@/constants'
import { HelpCircle, ThumbsDown, ThumbsUp } from 'lucide-react'
import PostContent from '@/components/Post/PostContent'

type Reaction = Record<string, string | null>

const Topic = () => {
  const { id } = useParams()
  const [selectedReactions, setSelectedReactions] = useState<Reaction>({})

  const topic = topics.find((t) => t.id === id)

  if (!topic) {
    return (
      <div className="container mx-auto p-4 sm:p-6">
        <div className="text-center text-muted-foreground">Topic not found</div>
      </div>
    )
  }

  const handleReaction = (postId: string, reaction: string) => {
    setSelectedReactions((prev) => ({
      ...prev,
      [postId]: reaction === prev[postId] ? null : reaction,
    }))
  }

  return (
    <div className="container mx-auto p-4 sm:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{topic.prompt}</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {topic.posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border bg-card shadow-sm flex flex-col h-full justify-between"
          >
            <div className="mb-4 flex flex-col">
              <div className="p-6 sm:px-10">
                <h2
                  className="text-xl font-semibold text-nowrap overflow-hidden overflow-ellipsis"
                  title={post.title}
                >
                  {post.title}
                </h2>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-sm">
                    {post.model.label}
                  </Badge>
                </div>
              </div>

              <PostContent content={post.content} />
            </div>

            <div className="flex justify-between items-center border-t p-4 sm:px-10">
              <Button
                variant={
                  selectedReactions[post.id] === 'like' ? 'like' : 'outline'
                }
                size="lg"
                onClick={() => handleReaction(post.id, 'like')}
              >
                <ThumbsUp className="mr-2 h-5 w-5" />
                Like
              </Button>
              <Button
                variant={
                  selectedReactions[post.id] === 'dislike'
                    ? 'dislike'
                    : 'outline'
                }
                size="lg"
                onClick={() => handleReaction(post.id, 'dislike')}
              >
                <ThumbsDown className="mr-2 h-5 w-5" />
                Dislike
              </Button>
              <Button
                variant={
                  selectedReactions[post.id] === 'unsure' ? 'unsure' : 'outline'
                }
                size="lg"
                onClick={() => handleReaction(post.id, 'unsure')}
              >
                <HelpCircle className="mr-2 h-5 w-5" />
                Not Sure
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topic

import { useState } from 'react'
import { Badge } from '../ui/badge'
import PostContent from '../Post/PostContent'
import { Button } from '../ui/button'
import { HelpCircle, ThumbsDown, ThumbsUp } from 'lucide-react'
import { Post } from '@/types'

type Reaction = 'like' | 'dislike' | 'unsure' | null

const TopicCard = ({ post }: { post: Post }) => {
  const [selectedReaction, setSelectedReaction] = useState<Reaction>(null)

  const handleUpdateReaction = (reaction: Reaction) =>
    setSelectedReaction(reaction)

  return (
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
          variant={selectedReaction === 'like' ? 'like' : 'outline'}
          size="lg"
          onClick={() => handleUpdateReaction('like')}
        >
          <ThumbsUp className="mr-2 h-5 w-5" />
          Like
        </Button>
        <Button
          variant={selectedReaction === 'dislike' ? 'dislike' : 'outline'}
          size="lg"
          onClick={() => handleUpdateReaction('dislike')}
        >
          <ThumbsDown className="mr-2 h-5 w-5" />
          Dislike
        </Button>
        <Button
          variant={selectedReaction === 'unsure' ? 'unsure' : 'outline'}
          size="lg"
          onClick={() => handleUpdateReaction('unsure')}
        >
          <HelpCircle className="mr-2 h-5 w-5" />
          Not Sure
        </Button>
      </div>
    </div>
  )
}

export default TopicCard

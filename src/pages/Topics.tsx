import { useNavigate } from 'react-router-dom'
import { topics } from '@/constants'
import { Badge } from '@/components/ui/badge'

const Topics = () => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto p-4 sm:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Topics</h1>
        <p className="text-muted-foreground mt-1">Description goes here</p>
      </div>

      <div className="space-y-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => navigate(`/topics/${topic.id}`)}
            className="group rounded-lg border bg-card p-4 transition-colors hover:bg-accent cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold group-hover:text-accent-foreground">
                  {topic.prompt}
                </h2>
                <div className="flex gap-2">
                  {topic.posts.map((post) => (
                    <Badge key={post.id} variant="secondary">
                      {post.model.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topics

import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { topics } from '@/constants'

const Topics = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      {topics.map((topic) => (
        <Link
          key={topic.id}
          to={`/topics/${topic.id}`} // Navigates to /topic/:id
          className="w-full" // Ensure the Link takes full width
        >
          <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
            <CardContent className="text-lg">{topic.prompt}</CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default Topics

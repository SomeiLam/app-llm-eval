import Post from '@/components/Post'
import { Card, CardContent } from '@/components/ui/card'
import { topics } from '@/constants'
import { Post as TPost, Topic as TTopic } from '@/types'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Topic = () => {
  const { id } = useParams<{ id: string }>() // Use useParams to extract the id from the URL
  const [topicDetails, setTopicDetails] = useState<TTopic | null>(null) // Assuming topic details are fetched

  // Optionally, you can fetch topic details using the id
  useEffect(() => {
    const findTopicById = (topicId: string) => {
      return topics.find((topic) => topic.id === topicId)
    }

    if (id) {
      const found = findTopicById(id)
      setTopicDetails(found as TTopic)
    }
  }, [id])

  if (!topicDetails) return <div>Loading...</div>

  return (
    <div className="max-w-5xl flex flex-col justify-center items-center gap-10">
      {/* <TopicForm /> */}
      <Card className="w-full">
        <CardContent className="text-lg">{topicDetails.prompt}</CardContent>
      </Card>
      <div className="w-full flex flex-col gap-5">
        {topicDetails.posts.map((post: TPost) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Topic

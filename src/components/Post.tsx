import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Post as TPost } from '../types'

import { ThumbsUp, ThumbsDown, Meh } from 'lucide-react'

interface IPost {
  post: TPost
}

const Post: React.FC<IPost> = ({ post }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.model.label}</CardDescription>
      </CardHeader>
      <CardContent>{post.content}</CardContent>
      <CardFooter className="flex justify-start">
        <div className="flex flex-row items-center gap-1">
          <button className="cursor-pointer group p-2 bg-transparent rounded-full transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
            <ThumbsUp className="w-6 h-6 text-gray-700 transition-all duration-300 ease-in-out group-hover:text-green-500" />
          </button>
          <button className="cursor-pointer group p-2 bg-transparent rounded-full transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
            <ThumbsDown className="w-6 h-6 text-gray-700 transition-all duration-300 ease-in-out group-hover:text-red-500" />
          </button>{' '}
          <button className="cursor-pointer group p-2 bg-transparent rounded-full transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
            <Meh className="w-6 h-6 text-gray-700 transition-all duration-300 ease-in-out group-hover:text-gray-500" />
          </button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Post

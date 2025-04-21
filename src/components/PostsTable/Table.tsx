import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import StackedBar from './StackedBar'
import { topics } from '@/constants'

const PostTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent created posts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Topic</TableHead>
          <TableHead>Post</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Provider</TableHead>
          <TableHead className="text-right">Like Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topics.map((topic) =>
          topic.posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell
                className="font-medium max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap"
                title={topic.prompt}
              >
                {topic.prompt}
              </TableCell>
              <TableCell
                className="font-medium max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap"
                title={post.title}
              >
                {post.title}
              </TableCell>
              <TableCell>{post.model.value}</TableCell>
              <TableCell>{post.model.provider}</TableCell>
              <TableCell className="text-right min-w-[300px]">
                <StackedBar
                  likePercentage={post.likeStatus.likePercentage}
                  dislikePercentage={post.likeStatus.dislikePercentage}
                  notSurePercentage={post.likeStatus.notSurePercentage}
                />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

export default PostTable

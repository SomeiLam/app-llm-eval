import PostsTable from '@/components/PostsTable/Table'

const AllPosts = () => {
  return (
    <div className="container mx-auto p-4 sm:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
        <p className="text-muted-foreground mt-1">Description goes here.</p>
      </div>

      <div className="rounded-lg border bg-card shadow-sm">
        <div className="p-6">
          <PostsTable />
        </div>
      </div>
    </div>
  )
}

export default AllPosts

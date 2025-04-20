export type Topic = {
  id: string
  prompt: string
  posts: Post[]
}

export type Post = {
  id: string
  title: string
  content: string
  model: Model
}

export type Model = {
  value: string
  provider: string
  label: string
}

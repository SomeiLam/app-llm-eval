import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MultiSelect } from '../components/ui/MultiSelect'

type Option = {
  /** The text to display for the option. */
  label: string
  /** The unique value associated with the option. */
  value: string
  /** Optional icon component to display alongside the option. */
  icon?: React.ComponentType<{ className?: string }>
}

const modelsList: Option[] = [
  { value: 'gpt-4.5', label: 'GPT-4.5 by OpenAI' },
  { value: 'claude-3.7-sonnet', label: 'Claude 3.7 Sonnet by Anthropic' },
  { value: 'gemini-2.0-pro', label: 'Gemini 2.0 Pro by Google DeepMind' },
  { value: 'grok-3', label: 'Grok-3 by xAI' },
  { value: 'mistral-large-2', label: 'Mistral Large 2 by Mistral AI' },
  {
    value: 'paLM-2',
    label: 'PaLM 2 by Google',
  },
  {
    value: 'falcon-180b',
    label: 'Falcon 180B by Technology Innovation Institute',
  },
  { value: 'deepseek-r1', label: 'DeepSeek R1 by DeepSeek' },
  { value: 'nova', label: 'Nova by Amazon' },
  { value: 'gemma-3', label: 'Gemma 3 by Google DeepMind' },
]
const TopicForm = () => {
  const [topic, setTopic] = useState('')
  const [selectedModels, setSelectedModels] = useState<Option[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="container mx-auto p-4 sm:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Create Post</h1>
        <p className="text-muted-foreground mt-1">
          Create a new post with your selected topic and models
        </p>
      </div>
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <CardHeader>
            <CardTitle>Create posts</CardTitle>
            {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Topic</Label>
                <Input
                  id="topic"
                  placeholder="Topic of your post"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Models</Label>
                <MultiSelect
                  options={modelsList}
                  onValueChange={(values: string[]) =>
                    setSelectedModels(
                      values.map(
                        (value) =>
                          modelsList.find(
                            (option) => option.value === value
                          ) || {
                            label: value,
                            value,
                          }
                      )
                    )
                  }
                  defaultValue={selectedModels.map((model) => model.value)}
                  placeholder="Select llm models"
                  variant="inverted"
                  animation={2}
                  // maxCount={3}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" size="lg">
              Create Post
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default TopicForm

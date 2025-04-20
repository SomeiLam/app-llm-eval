import { Model, Topic } from './types'

export const modelsList: Model[] = [
  { value: 'gpt-4.5', label: 'GPT-4.5 by OpenAI', provider: 'OpenAI' },
  {
    value: 'claude-3.7-sonnet',
    label: 'Claude 3.7 Sonnet by Anthropic',
    provider: 'Anthropic',
  },
  {
    value: 'gemini-2.0-pro',
    label: 'Gemini 2.0 Pro by Google DeepMind',
    provider: 'Google DeepMind',
  },
  { value: 'grok-3', label: 'Grok-3 by xAI', provider: 'xAI' },
  {
    value: 'mistral-large-2',
    label: 'Mistral Large 2 by Mistral AI',
    provider: 'Mistral AI',
  },
  { value: 'paLM-2', label: 'PaLM 2 by Google', provider: 'Google' },
  {
    value: 'falcon-180b',
    label: 'Falcon 180B by Technology Innovation Institute',
    provider: 'Technology Innovation Institute',
  },
  {
    value: 'deepseek-r1',
    label: 'DeepSeek R1 by DeepSeek',
    provider: 'DeepSeek',
  },
  { value: 'nova', label: 'Nova by Amazon', provider: 'Amazon' },
  {
    value: 'gemma-3',
    label: 'Gemma 3 by Google DeepMind',
    provider: 'Google DeepMind',
  },
]

export const topics: Topic[] = [
  {
    id: 'topic-1',
    prompt: 'Step by step guide of creating a MCP server',
    posts: [
      {
        id: 'post-1',
        title: 'Step-by-Step Guide to Setting Up Your MCP Server',
        content:
          "Creating an MCP server requires careful planning and attention to detail. Start by setting up your environment. Ensure you have the right version of Python installed along with necessary dependencies. Once that’s ready, define your server's architecture, focusing on scalability and security. From there, begin setting up your data pipeline. Ensure that your MCP can ingest and process data in real-time. Next, implement the core logic for your server to handle incoming requests and send processed data to appropriate services. Don’t forget testing—use unit tests to validate the server's performance and ensure data integrity. Finally, deploy your server to a cloud platform like AWS for high availability and scalability.",
        model: {
          value: 'gpt-4.5',
          label: 'GPT-4.5 by OpenAI',
          provider: 'OpenAI',
        },
      },
      {
        id: 'post-2',
        title: 'Building a Reliable MCP Server: A Comprehensive Guide',
        content:
          'Building a reliable MCP server involves a few key steps. First, start by installing the necessary tools like Python and any required libraries for your server. Create a virtual environment for project isolation. Then, set up the server configuration, focusing on modular design. Your server should be able to handle multiple data inputs, such as API requests or batch processes. Implement the data ingestion pipeline, which will parse and process incoming data streams. After the core logic is working, start integrating database services, ensuring data is stored efficiently. Finally, write tests to ensure your server is robust, especially for performance under load. Use CI/CD pipelines to streamline deployment.',
        model: {
          value: 'claude-3.7-sonnet',
          label: 'Claude 3.7 Sonnet by Anthropic',
          provider: 'Anthropic',
        },
      },
      {
        id: 'post-3',
        title:
          'How to Create a High-Performance MCP Server: A Detailed Walkthrough',
        content:
          'In this step-by-step guide, we’ll walk through building a high-performance MCP server. Begin by installing your preferred Python version and necessary dependencies. Organize your project structure by creating separate modules for different tasks like data processing, API interaction, and logging. With your architecture in place, move on to data processing. This is a crucial part of any MCP server, as it handles incoming data streams, filters them, and prepares them for analysis. As you implement the core features, use logging and monitoring tools to track server performance. Once development is complete, thoroughly test your server to ensure its robustness under various conditions. Finally, deploy your server to an environment like AWS for enhanced scalability and uptime.',
        model: { value: 'grok-3', label: 'Grok-3 by xAI', provider: 'xAI' },
      },
    ],
  },
]

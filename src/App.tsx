import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TopicForm from './pages/TopicForm'
import Topics from './pages/Topics'
import Topic from './pages/Topic'
import AllPosts from './pages/AllPosts'
import { Layout } from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/topics" element={<Topics />} />
          <Route path="/create-topic" element={<TopicForm />} />
          <Route path="/topics/:id" element={<Topic />} />
          <Route path="/" element={<AllPosts />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

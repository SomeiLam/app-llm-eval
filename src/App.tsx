import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import TopicForm from './pages/TopicForm'
import Topics from './pages/Topics'
import Topic from './pages/Topic'
import Summary from './pages/Summary'

function App() {
  return (
    <Router>
      <div className="flex space-x-6">
        <Link
          to="/"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/topics"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Topics
        </Link>
        <Link
          to="/create-topic"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Create Topic
        </Link>
      </div>
      <div className="max-w-5xl flex flex-col justify-center items-center p-20 gap-14">
        <Routes>
          <Route path="/topics" element={<Topics />} />
          <Route path="/create-topic" element={<TopicForm />} />
          <Route path="/topics/:id" element={<Topic />} />
          <Route path="/" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

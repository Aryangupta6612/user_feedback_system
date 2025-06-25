import "./App.css";
import FeedbackPage from "./pages/FeedbackPage";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">User Feedback System</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        <FeedbackForm />
        <FeedbackPage />
      </div>
    </div>
    </>
  );
}

export default App;

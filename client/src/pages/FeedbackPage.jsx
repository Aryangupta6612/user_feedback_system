import { useEffect, useState } from 'react';
import axios from 'axios';

function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/feedback', {
        params: { category, sortBy },
        withCredentials: true,
      });
 
      setFeedbacks(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      setFeedbacks([]); 
    }
  };

 
  useEffect(() => {
    fetchFeedbacks();
  }, [category, sortBy]);

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">Feedback Dashboard</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">All</option>
          <option value="suggestion">Suggestion</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="createdAt">Newest</option>
          <option value="userName">Name</option>
        </select>
      </div>

      {/* Feedback list */}
      <ul className="space-y-4">
        {feedbacks.map((fb) => (
          <li key={fb._id} className="border border-gray-200 p-4 rounded hover:bg-gray-50 transition">
            <div className="font-semibold text-green-700">{fb.userName}</div>
            <div className="text-sm text-gray-600">
              ({fb.email}) • {fb.category}
            </div>
            <p className="mt-2 text-gray-800">{fb.text}</p>
            <div className="text-xs text-gray-400 mt-1">
              {new Date(fb.createdAt).toLocaleString()}
            </div>
          </li>
        ))}

        {feedbacks.length === 0 && (
          <p className="text-gray-500">No feedback available for the selected filter.</p>
        )}
      </ul>
    </div>
  );
}

export default FeedbackPage;

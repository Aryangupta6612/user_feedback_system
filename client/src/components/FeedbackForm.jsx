import { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [form, setForm] = useState({ userName: '', email: '', text: '', category: 'suggestion' });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (form.userName.trim().length < 3) newErrors.userName = 'Name must be at least 3 characters';
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
    if (form.text.trim().length < 10) newErrors.text = 'Feedback must be at least 10 characters';
    return newErrors;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setMessage('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post('http://localhost:3000/feedback', form, { withCredentials: true });
      setMessage('Feedback submitted successfully!');
      setForm({ userName: '', email: '', text: '', category: 'suggestion' });
      window.location.reload();
      setErrors({});
    } catch (error) {
      console.error('Submission failed:', error.message);
      setMessage('Failed to submit feedback.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
      <div>
        <input
          name="userName"
          placeholder="Name"
          value={form.userName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName}</p>}
      </div>

      <div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <textarea
          name="text"
          placeholder="Your Feedback"
          value={form.text}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        {errors.text && <p className="text-red-500 text-sm mt-1">{errors.text}</p>}
      </div>

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
      >
        <option value="suggestion">Suggestion</option>
        <option value="bug">Bug Report</option>
        <option value="feature">Feature Request</option>
      </select>

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
      >
        Submit
      </button>

      {message && <p className="text-sm text-center text-gray-600">{message}</p>}
    </form>
  );
}

export default FeedbackForm;

import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="bg-indigo-600 p-6 rounded-xl shadow-lg text-white">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="h-6 w-6" />
        <h3 className="text-xl font-bold">Subscribe to our Newsletter</h3>
      </div>
      {subscribed ? (
        <div className="flex items-center gap-2 text-indigo-100">
          <CheckCircle className="h-5 w-5" />
          <p>Thanks for subscribing! Check your inbox soon.</p>
        </div>
      ) : (
        <>
          <p className="text-indigo-100 mb-6">
            Get the latest articles and news delivered to your inbox weekly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </>
      )}
    </div>
  );
}
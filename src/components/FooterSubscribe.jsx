import React, { useState } from "react";
import { Mail } from "lucide-react";
import { addSubscriber } from "../utils/firebase";
import toast from "react-hot-toast";

export default function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addSubscriber(email);
      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      if (error.message === "Email already subscribed") {
        toast.error("This email is already subscribed");
      } else {
        toast.error("Failed to subscribe. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8 border-t border-gray-200 pt-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Subscribe to our Newsletter
      </h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-1">
          <label htmlFor="footer-email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="footer-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isSubmitting ? (
            "Subscribing..."
          ) : (
            <>
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </>
          )}
        </button>
      </form>
    </div>
  );
}

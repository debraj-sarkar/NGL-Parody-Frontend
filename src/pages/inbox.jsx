import React, { useEffect, useState } from "react";
import GradientHeading from "../components/GradientHeading";
import { ExternalLink } from "lucide-react";
import Button from "../components/Button";
import { getMessages } from "../api/inboxApi";
import { toast, ToastContainer } from "react-toastify";
import SideBar from "../components/SideBar";
import { data } from "react-router-dom";
import { BASE_URL } from "../api/config";

const Inbox = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages();
        setUsername(data.username);
        setEmail(data.email);
        setMessages(data.messages || []);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // build user share link
  const linkId = localStorage.getItem("linkId");
  const userLink = `${BASE_URL}send/${linkId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(userLink);
    toast.success("Linked copied!");
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center text-white px-4 sm:-px-6">
      <div className="flex  gap-2 fixed top-0 left-0 ml-4 mt-4">
        <SideBar username={username} email={email} />
      </div>
      <div className="w-full max-w-2xl flex flex-col py-8 sm:py-10">
        <div className="flex flex-col items-center mb-8">
          <GradientHeading className="text-4xl sm:text-5xl font-bold mb-2">
            Your Messages
          </GradientHeading>
          <p className="text-gray-400 text-sm text-center sm:text-lg">
            All your anonymous messages in one place
          </p>
        </div>

        <div className="border border-gray-800 rounded-lg w-full p-6 mb-4 ">
          <div className="flex mb-4 gap-2 items-center">
            <ExternalLink className="text-orange-500 w-6 h-6" />
            <h4 className="font-semibold text-xl">Your NGL Link</h4>
          </div>
          <div className="flex flex-col sm:flex-row w-full gap-2">
            <input
              type="text"
              className="flex-1 rounded-md bg-gray-900 border border-gray-800 px-4 py-2 text-gray-200 focus:outline-none"
              value={userLink}
              readOnly
            />
            <Button className="font-semibold" onClick={handleCopy}>
              Copy
            </Button>
          </div>
        </div>

        <div className="border border-gray-800 rounded-lg w-full p-6 ">
          <h2 className="font-bold text-xl mb-4">Anonymous Messages</h2>

          {loading ? (
            <p className="text-gray-400">Loading messages...</p>
          ) : messages.length === 0 ? (
            <p className="text-gray-500">No messages yet. Share your link!</p>
          ) : (
            messages.map((message) => (
              <div
                key={message._id}
                className="border border-gray-800 rounded-lg px-4 py-4 mb-4 bg-gray-900"
              >
                <p className="text-gray-200 text-sm sm:text-base break-words">
                  {" "}
                  {message.message}
                </p>
              </div>
            ))
          )}
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default Inbox;

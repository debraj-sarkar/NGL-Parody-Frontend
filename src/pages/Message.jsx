import React, { useState } from "react";
import { CircleUserRound } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { sendMessage } from "../api/sendMessageApi";

const Message = () => {
  const [message, setMessage] = useState("");
  const { linkId } = useParams();

  const handleSend = async () => {
    if (!message.trim()) {
      toast.error("Message cannot be empty");
      return;
    }

    try {
      await sendMessage(message, linkId);
      toast.success("Message sent successfully!");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message!");
    }
  };
  return (
    <div className="border border-gray-600 rounded-xl my-8  w-full max-w-xl flex flex-col px-4 py-6 mx-4">
      <div className="border border-gray-600 rounded-xl px-4 py-4">
        <div className="flex gap-2 h-20 rounded-t-xl items-center">
          <CircleUserRound className="w-10 h-10" />
          <div className="flex flex-col">
            <p>@yourname</p>
            <p>Send me anonymous messages!</p>
          </div>
        </div>
        {/* textarea */}
        <div className="w-full rounded-lg">
          <textarea
            className="w-full border border-gray-400 rounded-lg px-3 py-2 resize-none focus:outline-none"
            rows={5}
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {/* button */}
        <Button className={"mt-4 w-full"} onClick={handleSend}>
          <p className="text-center font-bold">Send!</p>
        </Button>

        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default Message;

import React from "react";
import { MessageCircle } from "lucide-react";
import { Shield } from "lucide-react";
import { Zap } from "lucide-react";

const Features = () => {
  const data = [
    {
      icon: <MessageCircle className="text-orange-500 w-12 h-12" />,
      subText: "Anonymous Messages",
      details:
        "Send and receive messages completely anonymously. No names, no profiles, just pure communication.",
    },
    {
      icon: <Shield className="text-violet-500 w-12 h-12" />,
      subText: "100% Private",
      details:
        "Your privacy is our priority. We don't track, store, or share your personal information.",
    },
    {
      icon: <Zap className="text-orange-500 w-12 h-12" />,
      subText: "Instant & Easy",
      details:
        "Create your link in seconds. Share it anywhere and start receiving anonymous messages instantly.",
    },
  ];
  return (
    <div className="w-full flex-col md:flex-row justify-between items-center flex gap-6 mb-20 px-4">
      {data.map((feature, index) => (
        <div
          key={index}
          className="w-60 flex flex-col text-center justify-center items-center py-4 px-4 border rounded-lg border-gray-800"
        >
          <div className="mb-2">{feature.icon}</div>
          <p className="text-white mb-2 font-semibold text-lg">
            {feature.subText}
          </p>
          <p className="text-gray-400">{feature.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;

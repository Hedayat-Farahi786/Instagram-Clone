import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = Array.from({ length: 20 }, () =>
      faker.helpers.contextualCard()
    );
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile, index) => (
        <Story key={index} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  );
}

export default Stories;

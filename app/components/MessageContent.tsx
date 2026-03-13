import React from "react";
import DynamicIcon from "./Dynamicicon";

interface MessageContentProps {
  content: string;
}

// Emoji to Lucide icon mapping
const EMOJI_TO_ICON: Record<string, string> = {
  "🏭": "Factory",
  "🏗️": "Construction",
  "🏛️": "Landmark",
  "🎓": "GraduationCap",
  "🏥": "Hospital",
  "💼": "Briefcase",
  "👋": "Hand",
  "✔️": "Check",
  "☁️": "Cloud",
  "🖥️": "Monitor",
  "🔀": "Shuffle",
  "📱": "Smartphone",
  "🔒": "Lock",
  "📩": "Mail",
  "📷": "Camera",
  "🔧": "Wrench",
  "💰": "DollarSign",
  "📊": "BarChart3",
  "📋": "ClipboardList",
  "🎨": "Palette",
  "📦": "Package",
  "🧑‍💼": "User",
  "👨‍💼": "User",
  "📄": "FileText",
  "💳": "CreditCard",
  "📞": "Phone",
  "🎫": "Ticket",
};

export default function MessageContent({ content }: MessageContentProps) {
  // Split content by lines
  const lines = content.split("\n");

  const renderLine = (line: string, lineIndex: number) => {
    // Check if line starts with "Hello!"
    if (line.trim().startsWith("Hello!")) {
      return (
        <p key={lineIndex} className="flex items-center gap-2">
          <DynamicIcon
            name="Hand"
            className="w-5 h-5 text-primary inline-block"
          />
          {line.trim()}
        </p>
      );
    }

    // Check if line contains emojis to replace
    let hasEmoji = false;
    for (const emoji in EMOJI_TO_ICON) {
      if (line.includes(emoji)) {
        hasEmoji = true;
        break;
      }
    }

    if (hasEmoji) {
      // Split line by emojis and render with icons
      const parts: React.ReactNode[] = [];
      let remainingText = line;
      let partIndex = 0;

      // Process each emoji
      for (const [emoji, iconName] of Object.entries(EMOJI_TO_ICON)) {
        if (remainingText.includes(emoji)) {
          const splitParts = remainingText.split(emoji);
          for (let i = 0; i < splitParts.length; i++) {
            if (splitParts[i]) {
              // Handle bold text in this part
              const boldRegex = /\*\*([^*]+)\*\*/g;
              if (boldRegex.test(splitParts[i])) {
                const textParts = splitParts[i].split(boldRegex);
                parts.push(
                  <span key={`${partIndex++}`}>
                    {textParts.map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part,
                    )}
                  </span>,
                );
              } else {
                parts.push(<span key={`${partIndex++}`}>{splitParts[i]}</span>);
              }
            }
            if (i < splitParts.length - 1) {
              parts.push(
                <DynamicIcon
                  key={`icon-${partIndex++}`}
                  name={iconName}
                  className="w-4 h-4 inline-block mx-1 text-primary"
                />,
              );
            }
          }
          remainingText = splitParts.join("");
          break; // Process one emoji at a time
        }
      }

      return (
        <p key={lineIndex} className="flex items-start gap-1">
          {parts}
        </p>
      );
    }

    // Handle bold text with **
    const boldRegex = /\*\*([^*]+)\*\*/g;
    if (boldRegex.test(line)) {
      const parts = line.split(boldRegex);
      return (
        <p key={lineIndex}>
          {parts.map((part, i) =>
            i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
          )}
        </p>
      );
    }

    // Regular line
    if (line.trim()) {
      return <p key={lineIndex}>{line}</p>;
    }

    // Empty line (spacing)
    return <br key={lineIndex} />;
  };

  return (
    <div className="space-y-2">
      {lines.map((line, index) => renderLine(line, index))}
    </div>
  );
}

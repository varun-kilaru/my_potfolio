"use client";

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

type ResponsePanelProps = {
  data: any;
  loading: boolean;
};

export function ResponsePanel({ data, loading }: ResponsePanelProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    if (data && !loading) {
      // const formattedJson = `{\n${JSON.stringify(data, null, 2)
      //   .replace(/^{/, '')  // Remove opening brace from stringified data
      //   .replace(/}$/, '')  // Remove closing brace from stringified data
      //   .trim()            // Remove any extra whitespace
      //   .split('\n')       // Split into lines
      //   .map(line => `  ${line}`) // Add extra indentation
      //   .join('\n')}\n}`  // Join lines and add braces with proper formatting
      //   .replace(/"([^"]+)":/g, '"$1":') // Keep the quotes around keys
      //   .replace(/: "([^"]+)"/g, ': "$1"'); // Keep the quotes around values

      const formattedJson = JSON.stringify(data, null, 2)
      
      let i = 0;
      setIsTyping(true);
      
      // Reset the display text
      setDisplayText('');
      
      // Simulate typing effect
      const typingInterval = setInterval(() => {
        if (i < formattedJson.length) {
          setDisplayText((prev) => prev + formattedJson.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 5); // Adjust speed as needed
      
      return () => clearInterval(typingInterval);
    }
  }, [data, loading]);

  return (
    <div className="rounded-md border border-border bg-muted/20 min-h-[300px] md:min-h-[400px] p-4 font-mono text-sm relative overflow-hidden">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <span className="ml-2">Loading response...</span>
        </div>
      ) : displayText ? (
        <pre className="whitespace-pre-wrap break-words text-[#00ff00]">
          {'{'}
          {displayText}
          {isTyping && <span className="animate-pulse">▋</span>}
        </pre>
      ) : (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          <p>Click &quot;Send&quot; to make a request</p>
        </div>
      )}
    </div>
  );
}
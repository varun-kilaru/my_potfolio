"use client";

import { useState } from 'react';
import { ChevronDown, Send } from 'lucide-react';

type RequestBarProps = {
  url: string;
  onUrlChange: (url: string) => void;
  onSend: () => void;
};

export function RequestBar({ url, onUrlChange, onSend }: RequestBarProps) {
  const [method, setMethod] = useState('GET');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSend = () => {
    onSend();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="relative inline-block min-w-[100px]">
        <button
          type="button"
          className="flex items-center justify-between w-full gap-1 px-4 py-2 text-sm font-medium bg-muted/30 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="text-green-400 font-mono">{method}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
        {dropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-popover border border-border rounded-md shadow-lg">
            <div className="py-1">
              {['GET', 'POST', 'PUT', 'DELETE'].map((m) => (
                <button
                  key={m}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-muted/50 ${
                    method === m ? 'bg-primary/10 text-primary' : ''
                  }`}
                  onClick={() => {
                    setMethod(m);
                    setDropdownOpen(false);
                  }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex-1">
        <input
          type="text"
          value={url}
          onChange={(e) => onUrlChange(e.target.value)}
          className="w-full px-4 py-2 bg-muted/30 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary font-mono text-sm"
          placeholder="https://api.example.com/endpoint"
        />
      </div>
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-md flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      >
        <span>Send</span>
        <Send className="h-4 w-4" />
      </button>
    </div>
  );
}
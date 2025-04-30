"use client";

import { CodeIcon, BriefcaseIcon, LayersIcon, PhoneIcon } from 'lucide-react';

type EndpointsProps = {
  activeEndpoint: string;
  onEndpointClick: (endpoint: string) => void;
};

export function Endpoints({ activeEndpoint, onEndpointClick }: EndpointsProps) {
  const endpoints = [
    { path: '/about', icon: CodeIcon, label: 'About' },
    { path: '/skills', icon: BriefcaseIcon, label: 'Skills' },
    { path: '/experience', icon: LayersIcon, label: 'Experience' },
    { path: '/contact', icon: PhoneIcon, label: 'Contact' },
    // { path: '/projects', icon: LayersIcon, label: 'Projects' },
  ];

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-sm font-medium text-muted-foreground mb-2 px-4">ENDPOINTS</h2>
      {endpoints.map((endpoint) => {
        const Icon = endpoint.icon;
        const isActive = activeEndpoint === endpoint.path;
        
        return (
          <button
            key={endpoint.path}
            className={`flex items-center gap-2 px-4 py-3 text-left rounded-md transition-colors ${
              isActive
                ? 'bg-primary/10 text-primary border-l-2 border-primary'
                : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => onEndpointClick(endpoint.path)}
          >
            <Icon size={16} />
            <span className="font-mono">{endpoint.path}</span>
          </button>
        );
      })}
    </div>
  );
}
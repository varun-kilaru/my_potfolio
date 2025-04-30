"use client";

import { useState, useEffect } from 'react';
import { Endpoints } from '@/components/endpoints';
import { RequestBar } from '@/components/request-bar';
import { ResponsePanel } from '@/components/response-panel';
import { getData } from '@/lib/api-data';

export function ApiInterface() {
  const [endpoint, setEndpoint] = useState<string>('/about');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>(`https://varun-kilaru.dev/api${endpoint}`);

  useEffect(() => {
    setUrl(`https://varun-kilaru.dev/api${endpoint}`);
  }, [endpoint]);

  const handleSendRequest = async () => {
    setLoading(true);
    setResponse(null);

    // Simulate network latency
    setTimeout(() => {
      const data = getData(endpoint);
      setResponse(data);
      setLoading(false);
    }, 800);
  };

  const handleEndpointClick = (newEndpoint: string) => {
    setEndpoint(newEndpoint);
    setResponse(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      <div className="md:col-span-1">
        <Endpoints 
          activeEndpoint={endpoint} 
          onEndpointClick={handleEndpointClick} 
        />
      </div>
      <div className="md:col-span-3 flex flex-col gap-4">
        <RequestBar 
          url={url} 
          onUrlChange={setUrl} 
          onSend={handleSendRequest} 
        />
        <ResponsePanel 
          data={response} 
          loading={loading} 
        />
      </div>
    </div>
  );
}
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">API Documentation</h1>
        
        <div className="space-y-4">
          <div className="border border-border rounded-md p-6 bg-card">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to my developer portfolio API. This API allows you to retrieve information about me, my experience, skills, and contact information.
            </p>
            <p className="text-muted-foreground">
              All endpoints return JSON data and are accessible via GET requests.
            </p>
          </div>
          
          <div className="border border-border rounded-md p-6 bg-card">
            <h2 className="text-xl font-bold mb-4">Base URL</h2>
            <code className="bg-muted p-2 rounded-md font-mono block">
              https://varun-kilaru.dev/api
            </code>
          </div>
          
          <div className="border border-border rounded-md p-6 bg-card">
            <h2 className="text-xl font-bold mb-4">Authentication</h2>
            <p className="text-muted-foreground">
              No authentication is required to access this API.
            </p>
          </div>
          
          <div className="border border-border rounded-md p-6 bg-card">
            <h2 className="text-xl font-bold mb-4">Endpoints</h2>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-lg font-bold mb-2">GET /about</h3>
                <p className="text-muted-foreground mb-2">
                  Returns basic information about me.
                </p>
                <div className="bg-muted p-3 rounded-md">
                  <h4 className="font-bold mb-1">Response Format:</h4>
                  <pre className="font-mono text-xs whitespace-pre-wrap text-green-400">
{`{
  "name": "varun-kilaru",
  "role": "Full Stack Developer",
  "bio": "Passionate developer with expertise...",
  "location": "Cincinnati, OH",
  "status": "Available for hire"
}`}
                  </pre>
                </div>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-lg font-bold mb-2">GET /experience</h3>
                <p className="text-muted-foreground mb-2">
                  Returns a list of my professional experiences.
                </p>
                <div className="bg-muted p-3 rounded-md">
                  <h4 className="font-bold mb-1">Response Format:</h4>
                  <pre className="font-mono text-xs whitespace-pre-wrap text-green-400">
{`{
  "experience": [
    {
      "id": 1,
      "company": "Company Name",
      "position": "Position Title",
      "description": "What i did...",
      "technologies": ["Spring Boot", "Kafka", "Azure", ...],
      "startDate": "August 2022",
      "endDate": "August 2023"
    },
    ...
  ]
}`}
                  </pre>
                </div>
              </div>
              
              {/* <div className="border-l-2 border-primary pl-4">
                <h3 className="text-lg font-bold mb-2">GET /projects</h3>
                <p className="text-muted-foreground mb-2">
                  Returns a list of projects I've worked on.
                </p>
                <div className="bg-muted p-3 rounded-md">
                  <h4 className="font-bold mb-1">Response Format:</h4>
                  <pre className="font-mono text-xs whitespace-pre-wrap text-green-400">
{`{
  "projects": [
    {
      "id": 1,
      "name": "Project Name",
      "description": "Project description...",
      "technologies": ["Tech1", "Tech2"],
      "github": "https://github.com/...",
      "liveUrl": "https://...",
      "year": 2023
    },
    ...
  ]
}`}
                  </pre>
                </div>
              </div> */}
              
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-lg font-bold mb-2">GET /skills</h3>
                <p className="text-muted-foreground mb-2">
                  Returns my technical skills categorized by area.
                </p>
                <div className="bg-muted p-3 rounded-md">
                  <h4 className="font-bold mb-1">Response Format:</h4>
                  <pre className="font-mono text-xs whitespace-pre-wrap text-green-400">
{`{
  "skills": [
    {
      "category": "Languages",
      "items": ["JavaScript", "Python", ...]
    },
    ...
  ]
}`}
                  </pre>
                </div>
              </div>
              
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-lg font-bold mb-2">GET /contact</h3>
                <p className="text-muted-foreground mb-2">
                  Returns my contact information.
                </p>
                <div className="bg-muted p-3 rounded-md">
                  <h4 className="font-bold mb-1">Response Format:</h4>
                  <pre className="font-mono text-xs whitespace-pre-wrap text-green-400">
{`{
  "email": "your.email@example.com",
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername",
  "twitter": "https://twitter.com/yourusername",
  "status": "Actively responding",
  "response_time": "Usually within 24 hours"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-border rounded-md p-6 bg-card">
            <h2 className="text-xl font-bold mb-4">Try It Out</h2>
            <p className="text-muted-foreground mb-4">
              You can interact with the API using the interactive interface on the home page.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-primary/80 hover:bg-primary text-primary-foreground px-4 py-2 rounded-md transition-colors"
            >
              Go to API Explorer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
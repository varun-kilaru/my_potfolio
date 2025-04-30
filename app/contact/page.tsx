import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Contact</h1>
        
        <div className="border border-border rounded-md p-6 bg-card">
          <p className="text-muted-foreground mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="mailto:kilarvarun@gmail.com" 
              className="flex items-center gap-4 p-4 border border-border rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">kilarvarun@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/varun-kilaru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-muted-foreground">github.com/varun-kilaru</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/varun-kilaru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">linkedin.com/in/varun-kilaru</p>
              </div>
            </a>
            
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Twitter className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Twitter</h3>
                <p className="text-sm text-muted-foreground">twitter.com/yourusername</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className="border border-border rounded-md p-6 bg-card">
          <h2 className="text-xl font-bold mb-4">Response Time</h2>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p className="font-medium">Status: Actively responding</p>
          </div>
          <p className="text-muted-foreground">
            I usually respond within 24 hours. For urgent inquiries, please mention that in your message.
          </p>
        </div>
        
        <div className="border border-border rounded-md p-6 bg-card">
          <h2 className="text-xl font-bold mb-4">API Access</h2>
          <p className="text-muted-foreground mb-4">
            You can also access my contact information programmatically through the API:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono">
            GET https://varun-kilaru.dev/api/contact
          </div>
          <div className="mt-4">
            <Link 
              href="/" 
              className="inline-block bg-primary/80 hover:bg-primary text-primary-foreground px-4 py-2 rounded-md transition-colors"
            >
              Try in API Explorer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
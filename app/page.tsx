export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-pulse [animation-delay:2s]" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-accent-foreground">Production Ready</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">MCP Server Examples</h1>
        <p className="text-xl text-muted-foreground mb-12 text-pretty">
          Test your MCP client implementation with our server examples
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">SSE</h2>
            <p className="text-sm text-muted-foreground mb-4">Server-Sent Events endpoint for real-time streaming</p>
            <code className="text-xs bg-secondary px-3 py-2 rounded block font-mono text-accent">/api/sse</code>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Streamable HTTP</h2>
            <p className="text-sm text-muted-foreground mb-4">HTTP streaming for continuous data flow</p>
            <code className="text-xs bg-secondary px-3 py-2 rounded block font-mono text-accent">/api/stream</code>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">WebSocket</h2>
            <p className="text-sm text-muted-foreground mb-4">Bidirectional communication channel</p>
            <code className="text-xs bg-secondary px-3 py-2 rounded block font-mono text-accent">
              ws://localhost:3000
            </code>
          </div>
        </div>
      </div>
    </main>
  )
}

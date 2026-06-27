// src/components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode; fallback?: ReactNode; }
interface State { hasError: boolean; error?: Error; }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div style={{
          minHeight: '100vh', background: 'var(--bg)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          color: 'var(--text)', fontFamily: 'Poppins, sans-serif',
          textAlign: 'center', padding: 40,
        }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>⚡</div>
          <h2 style={{ fontFamily: 'Raleway', fontWeight: 900, fontSize: 32, marginBottom: 12 }}>
            Something glitched
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: 'var(--gradient)', color: '#fff', border: 'none',
              padding: '12px 32px', borderRadius: 50, fontFamily: 'Poppins',
              fontWeight: 600, fontSize: 15, cursor: 'pointer',
            }}
          >Reload Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Usage in App.tsx:
// Wrap each section's Suspense in <ErrorBoundary>
// <ErrorBoundary>
//   <Suspense fallback={<SectionLoader />}>
//     <HeroSection preloaderDone={preloaderDone} />
//   </Suspense>
// </ErrorBoundary>

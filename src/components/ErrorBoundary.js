import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error(error, errorInfo.componentStack);
  }

  render() {
    const { error, errorInfo } = this.state;
    if (error) {
      return (
        <div>
          <h3>Stranger things happen here...</h3>
          <p>Keep calm, we called El to fix it.</p>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            {errorInfo && errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

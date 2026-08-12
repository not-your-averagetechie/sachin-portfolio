import React from "react";

/**
 * Error boundary for WebGL canvases. If a context can't be created
 * (old GPU, disabled WebGL, headless), the site degrades gracefully
 * instead of unmounting the whole app.
 */
class CanvasGuard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.warn("3D canvas disabled:", error?.message);
  }

  render() {
    if (this.state.failed) return this.props.fallback ?? null;
    return this.props.children;
  }
}

export default CanvasGuard;

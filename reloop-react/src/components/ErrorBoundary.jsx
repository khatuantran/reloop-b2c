import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { err: null };
  static getDerivedStateFromError(err) { return { err }; }
  render() {
    if (this.state.err) {
      return (
        <main className="pt-[120px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <div className="bg-clay-blush border-2 border-tier-h/40 rounded-2xl p-space-32 shadow-clay">
              <p className="font-display font-bold text-[18px] text-tier-h mb-space-12">Lỗi render trang (auto-conversion cần dọn tay)</p>
              <pre className="font-mono-md text-[12px] text-text-primary whitespace-pre-wrap">{String(this.state.err?.stack || this.state.err)}</pre>
            </div>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}

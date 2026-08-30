type PageLoaderProps = {
  className?: string;
  label?: string;
};

const layers = ['Top server layer', 'Middle server layer', 'Bottom server layer'];

export function PageLoader({ className = '', label = 'Loading content' }: PageLoaderProps) {
  return (
    <section
      className={`page-loader min-h-svh bg-white ${className}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="page-loader__stack" aria-hidden="true">
        {layers.map((layer, index) => (
          <div className="page-loader__layer" key={layer} style={{ animationDelay: `${index * 160}ms` }}>
            <span className="page-loader__line" />
            <span className="page-loader__indicator" />
          </div>
        ))}
      </div>
      <span className="sr-only">{label}</span>
      <style>{`
        .page-loader {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .page-loader__stack {
          display: grid;
          width: 4.75rem;
          gap: 0.45rem;
        }

        .page-loader__layer {
          display: flex;
          height: 1.12rem;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #e5e1dc;
          border-radius: 0.42rem;
          background: #ffffff;
          padding: 0 0.55rem;
          box-shadow: 0 0.45rem 1.2rem rgb(24 24 27 / 0.045);
          animation: page-loader-layer 1.35s ease-in-out infinite;
        }

        .page-loader__line {
          width: 2.2rem;
          height: 0.18rem;
          border-radius: 9999px;
          background: #eee9e4;
        }

        .page-loader__indicator {
          width: 0.38rem;
          height: 0.38rem;
          border-radius: 9999px;
          background: #cfc8c1;
          animation: page-loader-indicator 1.35s ease-in-out infinite;
        }

        .page-loader__layer:nth-child(1) .page-loader__indicator {
          animation-delay: 0ms;
        }

        .page-loader__layer:nth-child(2) .page-loader__indicator {
          animation-delay: 160ms;
        }

        .page-loader__layer:nth-child(3) .page-loader__indicator {
          animation-delay: 320ms;
        }

        @keyframes page-loader-layer {
          0%,
          72%,
          100% {
            border-color: #e5e1dc;
            box-shadow: 0 0.45rem 1.2rem rgb(24 24 27 / 0.045);
            transform: translateY(0);
          }

          28% {
            border-color: rgb(242 90 5 / 0.38);
            box-shadow: 0 0.45rem 1.2rem rgb(242 90 5 / 0.12);
            transform: translateY(-1px);
          }
        }

        @keyframes page-loader-indicator {
          0%,
          72%,
          100% {
            background: #cfc8c1;
            box-shadow: none;
            transform: scale(1);
          }

          28% {
            background: #f25a05;
            box-shadow: 0 0 0 0.28rem rgb(242 90 5 / 0.11);
            transform: scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page-loader__layer,
          .page-loader__indicator {
            animation: none;
          }

          .page-loader__layer:first-child {
            border-color: rgb(242 90 5 / 0.38);
          }

          .page-loader__layer:first-child .page-loader__indicator {
            background: #f25a05;
            box-shadow: 0 0 0 0.28rem rgb(242 90 5 / 0.11);
          }
        }
      `}</style>
    </section>
  );
}

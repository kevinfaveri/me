export default function Work() {
  return (
    <div className="flex flex-col space-y-4 mb-4">
      <a
        href="https://deel.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange flex flex-col space-y-1 no-underline"
      >
        <div className="flex items-center space-x-2">
          <img src="/logos/deel-logo.svg" alt="Deel Logo" className="w-6 h-6" />
          <span>2024 - Present | Staff Software Engineer | Deel K.K.</span>
        </div>
        <span className="text-xs text-gray-400 ml-8">
          Architecting blockchain indexing & DEX orchestration in Rust for Kizzy Labs (Monad)
        </span>
      </a>
      <a
        href="https://magiceden.io"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange flex flex-col space-y-1 no-underline"
      >
        <div className="flex items-center space-x-2">
          <img src="/logos/melogo.png" alt="Magic Eden Logo" className="w-6 h-6" />
          <span>2021 - 2024 | Senior Software Engineer | Magic Eden</span>
        </div>
        <span className="text-xs text-gray-400 ml-8">
          Co-created Bitcoin Ordinals marketplace → 61% market share, $1.79B volume
        </span>
      </a>
      <a
        href="https://soraschools.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange flex flex-col space-y-1 no-underline"
      >
        <div className="flex items-center space-x-2">
          <img src="/logos/sora-logo.png" alt="Sora Schools Logo" className="w-6 h-6" />
          <span>2020 - 2021 | Software Engineer | Sora Schools</span>
        </div>
        <span className="text-xs text-gray-400 ml-8">
          Built core platform for virtual high school ($28.8M funding)
        </span>
      </a>
      <a
        href="https://tc.tradersclub.com.br"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange flex flex-col space-y-1 no-underline"
      >
        <div className="flex items-center space-x-2">
          <img src="/logos/tradersclub-logo.png" alt="Tradersclub Logo" className="w-6 h-6" />
          <span>2020 | Software Engineer | Tradersclub</span>
        </div>
        <span className="text-xs text-gray-400 ml-8">
          E-learning platform for Brazil's trading community (600K+ users)
        </span>
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col space-y-4 mb-4">
      <a
        href="https://github.com/kevinfaveri/solana-candy-factory"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange space-y-1 no-underline"
      >
        <div className="flex justify-start space-x-2">
          <img src="/logos/solana-logo.png" alt="Solana Logo" className="w-6 h-6" />
          <img src="/logos/react-logo.png" alt="React Logo" className="w-6 h-6" />
        </div>
        <span>solana-candy-factory</span>
        <p className="text-xs text-gray-400">
          Early Solana NFT ecosystem boilerplate for NFT mint sites. 900+ forks, 300 stars.
        </p>
      </a>
      <a
        href="https://github.com/diffused-art/diffused-art-core"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange space-y-1 no-underline"
      >
        <div className="flex justify-start space-x-2">
          <img src="/logos/solana-logo.png" alt="Solana Logo" className="w-6 h-6" />
          <img src="/logos/react-logo.png" alt="React Logo" className="w-6 h-6" />
        </div>
        <span>diffused-art-core</span>
        <p className="text-xs text-gray-400">
          AI + Solana before GPT era — platform for creating candy machines that generate NFT art via AI.
        </p>
      </a>
      <a
        href="https://github.com/kevinfaveri/Monrail"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange space-y-1 no-underline"
      >
        <div className="flex justify-start space-x-2">
          <img src="/logos/react-logo.png" alt="React Logo" className="w-6 h-6" />
          <img src="/logos/node-logo.png" alt="Node Logo" className="w-6 h-6" />
        </div>
        <span>Monrail</span>
        <p className="text-xs text-gray-400">
          Cross-chain DEX orchestration with queues — Bun + React + Circle USDC bridge.
        </p>
      </a>
    </div>
  );
}

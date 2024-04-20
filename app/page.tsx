import DeployContract from "./DeployContract";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Deploy ERC20</h1>
        </div>
        <div className="space-y-4 flex justify-center">
          <DeployContract />
        </div>
      </div>
    </div>
  );
}

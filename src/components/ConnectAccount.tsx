import { ArrowCircleUp, ArrowCircleDown } from "iconsax-react";
import { FC, useState } from "react";
import eth from "../assets/ethereum.png";
import ply from "../assets/polygon.png";
import bsc from "../assets/bnb-chain.png";
import ava from "../assets/avalanche.png";
import sol from "../assets/solana.png";
import ast from "../assets/astar.png";
import opt from "../assets/optimism.png";
import metamusk from "../assets/metamaskW.png";
import coinbase from "../assets/coinbaseW.png";
import safepal from "../assets/safepal.png";
import walletConnect from "../assets/walletconnectW.png";
import ConnectError from "./ConnectError";
import ConnectSuccess from "./ConnectSuccess";
import ConnectLoading from "./ConnectLoading";
import RetryLoading from "./RetryLoading";

type network = {
  name: string;
  fullName?: string;
  icon: string;
};

const networks: network[] = [
  {
    name: "Eth",
    fullName: "Ethereum Network",
    icon: eth,
  },
  {
    name: "Ply",
    fullName: "Polygon Network",

    icon: ply,
  },
  {
    name: "Bsc",
    fullName: "Binance Network",
    icon: bsc,
  },
  {
    name: "Ava",
    fullName: "Avalanche Network",
    icon: ava,
  },
  {
    name: "Sol",
    fullName: "Solana Network",
    icon: sol,
  },
  {
    name: "Ast",
    fullName: "Astar Network",
    icon: ast,
  },
  {
    name: "Opt",
    fullName: "Optimism Network",
    icon: opt,
  },
];

const wallet: network[] = [
  {
    name: "Metamask",
    icon: metamusk,
  },
  {
    name: "Coinbase",
    icon: coinbase,
  },
  {
    name: "Safepal",
    icon: safepal,
  },
  {
    name: "Wallet Connect",
    icon: walletConnect,
  },
];

const ConnectAccount: FC = () => {
  const [isNetworkExpanded, setNetworkExpanded] = useState(true);
  const [isWalletExpanded, setWalletExpanded] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState<network | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<network | null>(null);
  const [isConnecting, setConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [isConnected, setConnected] = useState(false);
  const [isRetrying, setRetrying] = useState(false);

  const handleNetworkSelect = (network: network) => {
    setSelectedNetwork(network);
    setNetworkExpanded(false);
    setWalletExpanded(true);
  };

  const handleWalletSelect = (wallet: network) => {
    setSelectedWallet(wallet);
    setConnecting(true);
    // Simulate connection process
    setTimeout(() => {
      setConnecting(false);
      setConnectionError(true); // Simulate an error
    }, 4000);
  };

  const retryConnection = () => {
    setConnectionError(false);
    setConnecting(true);
    setRetrying(true);
    // Simulate connection process
    setTimeout(() => {
      setConnecting(false);
      setConnected(true); // Set connected state to true
    }, 4000);
  };

  const disconnect = () => {
    setConnected(false); // Set connected state to false
    setSelectedNetwork(null);
    setSelectedWallet(null);
    setNetworkExpanded(true);
    setWalletExpanded(false);
    setRetrying(false);
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex p-4 justify-between items-center self-stretch bg-white shadow-[0px_-1px_0px_0px_rgba(0,_0,_0,_0.25)_inset]">
        <h3 className="text-[#212121] font-poppins text-xl">
          {isConnecting && !isRetrying && "Connecting"}
          {isConnecting && isRetrying && "Retrying"}
          {connectionError && "Connection Error"}
          {isConnected && "Account Details"}
          {!isConnecting &&
            !connectionError &&
            !isConnected &&
            "Connect Account"}
        </h3>
      </div>

      {!isConnecting && !connectionError && !isConnected && (
        <div>
          <div className="flex w-[400px] items-center py-4 px-6 flex-col gap-6">
            <div className="flex w-[352px] justify-between items-center bg-white rounded-t-[15px]">
              <p className="text-[#212121] font-mukta font-medium">
                Choose Network
              </p>

              <div
                className="w-6 h-6 bg-brand-purple flex justify-center items-center shadow-[2px_2px_0px_0px_#000] right-5 top-5 hover:bg-contrast-yellow transition-all duration-300 cursor-pointer group"
                onClick={() => setNetworkExpanded(!isNetworkExpanded)}
              >
                {isNetworkExpanded ? (
                  <ArrowCircleUp
                    size="16"
                    className="text-contrast-yellow group-hover:text-brand-purple"
                  />
                ) : (
                  <ArrowCircleDown
                    size="16"
                    className="text-contrast-yellow group-hover:text-brand-purple"
                  />
                )}
              </div>
            </div>

            <div className="flex gap-5 flex-wrap">
              {isNetworkExpanded &&
                networks.map((network, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => handleNetworkSelect(network)}
                      className="flex p-2.5 flex-col gap-2.5 w-[168px] items-center bg-white flex-1 cursor-pointer shrink-0 max-w-[56px] transition-all duration-300 border-white border hover:border-black hover:shadow-[2px_2px_0px_0px_#000] active:bg-contrast-yellow active:shadow-[2px_2px_0px_0px_#000] focus:bg-contrast-yellow focus:shadow-[2px_2px_0px_0px_#000]"
                    >
                      <img
                        src={network.icon}
                        alt={network.name}
                        className="min-w-8 h-8 w-8"
                      />
                      <p className="text-[#212121] text-center font-mukta">
                        {network.name}
                      </p>
                    </button>
                  );
                })}
              {selectedNetwork && !isNetworkExpanded && (
                <div className="flex gap-2.5 items-center w-[352px] bg-white">
                  <img src={selectedNetwork.icon} alt={selectedNetwork.name} />
                  <p className="text-[#212121] text-xl font-poppins">
                    {selectedNetwork.fullName}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex w-[400px] items-center py-4 px-6 flex-col gap-6">
            <div className="flex w-[352px] justify-between items-center bg-white mx-auto pb-6">
              <p className="text-[#212121] font-mukta font-medium">
                Select Wallet
              </p>

              <div
                className="w-6 h-6 bg-brand-purple flex justify-center items-center shadow-[2px_2px_0px_0px_#000] right-5 top-5 hover:bg-contrast-yellow transition-all duration-300 cursor-pointer group"
                onClick={() => setWalletExpanded(!isWalletExpanded)}
              >
                {isWalletExpanded ? (
                  <ArrowCircleUp
                    size="16"
                    className="text-contrast-yellow group-hover:text-brand-purple"
                  />
                ) : (
                  <ArrowCircleDown
                    size="16"
                    className="text-contrast-yellow group-hover:text-brand-purple"
                  />
                )}
              </div>
            </div>

            <div className="flex gap-3.5 flex-wrap w-[350px] items-start">
              {isWalletExpanded &&
                wallet.map((wallet, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => handleWalletSelect(wallet)}
                      className="flex p-2.5 flex-col gap-2.5 items-center bg-white cursor-pointer shrink-0 transition-all duration-300 border-white border hover:border-black hover:shadow-[2px_2px_0px_0px_#000] active:bg-contrast-yellow active:shadow-[2px_2px_0px_0px_#000] focus:bg-contrast-yellow focus:shadow-[2px_2px_0px_0px_#000] flex-1 min-w-[168px] max-w-[168px]"
                    >
                      <img
                        src={wallet.icon}
                        alt={wallet.name}
                        className="min-w-8 h-8 w-8"
                      />
                      <p className="text-[#212121] text-center font-mukta">
                        {wallet.name}
                      </p>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      {isConnecting && !isRetrying && (
        <ConnectLoading wallet={selectedWallet?.name || ""} />
      )}
      {isConnecting && isRetrying && (
        <RetryLoading wallet={selectedWallet?.name || ""} />
      )}
      {connectionError && <ConnectError onConnect={retryConnection} />}
      {isConnected && selectedWallet && (
        <ConnectSuccess
          wallet={selectedWallet.name && selectedWallet.name}
          disconnect={disconnect}
        />
      )}
    </div>
  );
};

export default ConnectAccount;

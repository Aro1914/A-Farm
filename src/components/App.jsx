import React, { useState } from "react";
import { useReach, cf } from "../hooks";
import s from "../styles/Shared.module.css";
// import a from '../styles/App.module.css'
import p from "../styles/Pool.module.css";
import Pool from "./Pool";

const ConnectWallet = () => {
  const { connectToWallet } = useReach();
  return (
    <div className={cf(s.wMax, s.flex, s["flex_dColumn"], s.g10)}>
      <button
        className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
        onClick={() => {
          connectToWallet("MyAlgoConnect");
        }}
      >
        My Algo
      </button>
      <button
        className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
        onClick={() => {
          connectToWallet("WalletConnect");
        }}
      >
        WalletConnect
      </button>
      <button
        className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
        onClick={() => {
          connectToWallet("Mnemonic");
        }}
      >
        Mnemonic
      </button>
    </div>
  );
};

const Launch = () => {
  const { launch, attach } = useReach();
  const [ctcInput, setCtcInput] = useState("");
  const handleChange = (e) => {
    setCtcInput(e.currentTarget.value);
  };

  return (
    <div className={cf(s.wMax, s.flex, s.flexCenter)}>
      <button
        className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
        onClick={() => {
          launch();
        }}
      >
        Launch
      </button>
      <span className={cf(s.wMax, s.flexCenter, s.tCenter, s.dInlineBlock)}>
        ---OR---
      </span>
      <label className={cf(s.flex, s.flex_dColumn, s.wMax)} htmlFor="appID">
        <input
          id="appID"
          name="appID"
          type="number"
          onChange={handleChange}
          className={cf(s.wMax, s.dInlineBlock, p.input)}
        />
        <button
          className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
          disabled={!ctcInput}
          onClick={() => {
            attach(ctcInput);
          }}
        >
          Attach
        </button>
      </label>
    </div>
  );
};

const Mint = () => {
  const { mint } = useReach();
  const [tokenInfo, setTokenInfo] = useState({});

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setTokenInfo({
      ...tokenInfo,
      [name]: value,
    });
  };

  return (
    <div className={cf(s.wMax, s.flex, s.flexCenter, s.tCenter)}>
      Mint Token
      <label className={cf(s.flex, s.flex_dColumn, s.wMax)} htmlFor="name">
        <span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>Name</span>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          className={cf(s.wMax, s.dInlineBlock, p.input)}
        />
      </label>
      <label className={cf(s.flex, s.flex_dColumn, s.wMax)} htmlFor="symbol">
        <span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>Symbol</span>
        <input
          id="symbol"
          name="symbol"
          type="text"
          onChange={handleChange}
          className={cf(s.wMax, s.dInlineBlock, p.input)}
        />
      </label>
      <label className={cf(s.flex, s.flex_dColumn, s.wMax)} htmlFor="supply">
        <span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>Supply</span>
        <input
          id="supply"
          name="supply"
          type="number"
          onChange={handleChange}
          className={cf(s.wMax, s.dInlineBlock, p.input)}
        />
      </label>
      <button
        onClick={() => {
          mint(tokenInfo);
        }}
        className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
        disabled={!tokenInfo.name || !tokenInfo.symbol || !tokenInfo.supply}
      >
        Mint
      </button>
    </div>
  );
};

const Create = () => {
  const { create } = useReach();
  const [farmInfo, setFarmInfo] = useState({});

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setFarmInfo({
      ...farmInfo,
      [name]: value,
    });
  };

  return (
    <div className={cf(s.wMax, s.flex, s.flexCenter, s.tCenter)}>
      Create Farm
      <label
        className={cf(s.flex, s.flex_dColumn, s.wMax)}
        htmlFor="stakeToken"
      >
        <span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
          Stake Token ID
        </span>
        <input
          title="The token users are required to stake in order to attract rewards"
          id="stakeToken"
          name="stakeToken"
          type="text"
          onChange={handleChange}
          className={cf(s.wMax, s.dInlineBlock, p.input)}
        />
      </label>
      <label
        className={cf(s.flex, s.flex_dColumn, s.wMax)}
        htmlFor="rewardToken"
      >
        <span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
          Reward Token ID
        </span>
        <input
          title="The token to be distributed as non-network token reward"
          id="rewardToken"
          name="rewardToken"
          type="text"
          onChange={handleChange}
          className={cf(s.wMax, s.dInlineBlock, p.input)}
        />
      </label>
      <label
        className={cf(s.flex, s.flex_dColumn, s.wMax)}
        htmlFor="beginBlock"
      >
        <span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
          Begin Block
        </span>
        <input
          title="The block at which the farm starts distributing rewards to users. In essense, the block in which rewards are assigned to users"
          id="beginBlock"
          name="beginBlock"
          type="number"
          onChange={handleChange}
          className={cf(s.wMax, s.dInlineBlock, p.input)}
        />
      </label>
      <label className={cf(s.flex, s.flex_dColumn, s.wMax)} htmlFor="endBlock">
        <span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>End Block</span>
        <input
          title="The block at which the farm stops distributing rewards to users. In essense, the block in which rewards are to be exhausted"
          id="endBlock"
          name="endBlock"
          type="number"
          onChange={handleChange}
          className={cf(s.wMax, s.dInlineBlock, p.input)}
        />
      </label>
      <label
        className={cf(s.flex, s.flex_dColumn, s.wMax)}
        htmlFor="totalAlgoRewardAmount"
      >
        <span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
          Total Algo Rewards
        </span>
        <input
          title="The total amount of ALGO to be deposited into the pool which would be later distributed as ALGO rewards to users"
          id="totalAlgoRewardAmount"
          name="totalAlgoRewardAmount"
          type="number"
          onChange={handleChange}
          className={cf(s.wMax, s.dInlineBlock, p.input)}
        />
      </label>
      <label
        className={cf(s.flex, s.flex_dColumn, s.wMax)}
        htmlFor="totalRewardAmount"
      >
        <span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
          Total Reward Token Amount
        </span>
        <input
          title="The total amount of Reward tokens to be deposited into the pool which would be later distributed as non-network token rewards to users"
          id="totalRewardAmount"
          name="totalRewardAmount"
          type="number"
          onChange={handleChange}
          className={cf(s.wMax, s.dInlineBlock, p.input)}
        />
      </label>
      <label
        className={cf(s.flex, s.flex_dColumn, s.wMax)}
        htmlFor="lockLengthBlocks"
      >
        <span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
          Lock Period
        </span>
        <input
          title="For this period in blocks from the begin block, rewards cannot be claimed"
          id="lockLengthBlocks"
          name="lockLengthBlocks"
          type="number"
          onChange={handleChange}
          className={cf(s.wMax, s.dInlineBlock, p.input)}
        />
      </label>
      <button
        onClick={() => {
          create(farmInfo);
        }}
        className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
        disabled={
          !farmInfo.stakeToken ||
          !farmInfo.rewardToken ||
          !farmInfo.beginBlock ||
          !farmInfo.endBlock ||
          !farmInfo.totalRewardAmount ||
          !farmInfo.totalAlgoRewardAmount ||
          !farmInfo.lockLengthBlocks
        }
      >
        Create
      </button>
    </div>
  );
};

const App = () => {
  const { contract, user, pools } = useReach();

  return (
    <div className={cf(s.window)}>
      {!user.address ? (
        <ConnectWallet />
      ) : !contract.appID ? (
        <Launch />
      ) : (
        <div className={cf(s.window, s.wMax, s.flex, s.flexCenter)}>
          {pools.map((el, i) => (
            <Pool key={i} poolInfo={el.poolCtc} />
          ))}
          <Mint />
          <Create />
        </div>
      )}
    </div>
  );
};

export default App;

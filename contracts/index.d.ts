/**
 * This package contains deployed contract addresses, ABIs, and Typechain types
 * for the Dark Forest game.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @darkforest_eth/contracts
 * ```
 * ```bash
 * yarn add @darkforest_eth/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@darkforest_eth/contracts'
 * ```
 *
 * ## Typechain
 *
 * The Typechain types can be found in the `typechain` directory.
 *
 * ## ABIs
 *
 * The contract ABIs can be found in the `abis` directory.
 *
 * @packageDocumentation
 */
/**
 * The name of the network where these contracts are deployed.
 */
export declare const NETWORK = 'wagmi';
/**
 * The id of the network where these contracts are deployed.
 */
export declare const NETWORK_ID = 11111;
/**
 * The block in which the DarkForestCore contract was deployed.
 */
export declare const START_BLOCK = 44091;
/**
 * The address for the DarkForestUtils library.
 */
export declare const UTILS_LIBRARY_ADDRESS = '0x98Fe96238DEe8D19F62039b5EEca349645F962b4';
/**
 * The address for the DarkForestPlanet library.
 */
export declare const PLANET_LIBRARY_ADDRESS = '0x0c9bC872F2C2Cb90322b800724d55e3AB28567e1';
/**
 * The address for the DarkForestArtifactUtils library.
 */
export declare const ARTIFACT_UTILS_LIBRARY_ADDRESS = '0x37e0FCcF25AC65b635130E79735542a023E521d2';
/**
 * The address for the Verifier library.
 */
export declare const VERIFIER_LIBRARY_ADDRESS = '0x527D3fe612bE982AB55F8DeFDA1426f43fB549DC';
/**
 * The address for the DarkForestInitialize library.
 */
export declare const INITIALIZE_LIBRARY_ADDRESS = '0x0c5302D52674A5c22907308C46256ED60Ed9Fa6F';
/**
 * The address for the DarkForestLazyUpdate library.
 */
export declare const LAZY_UPDATE_LIBRARY_ADDRESS = '0xbf95B53a9dFb59213E48D23720b825A43c619Ce1';
/**
 * The address for the DarkForestCore contract.
 */
export declare const CORE_CONTRACT_ADDRESS = '0x4f620A7F2DF5Dd33F3509e0502B65b4Bcd69426f';
/**
 * The address for the DarkForestTokens contract.
 */
export declare const TOKENS_CONTRACT_ADDRESS = '0x8b3147E55ACb6acb0E5Ba10D981130F4b2E00371';
/**
 * The address for the DarkForestGetters contract.
 */
export declare const GETTERS_CONTRACT_ADDRESS = '0x1C284C88abdFc89d83bdAA5D4A08e7E1e06b65c4';
/**
 * The address for the DarkForestGPTCredit contract.
 */
export declare const GPT_CREDIT_CONTRACT_ADDRESS = '0x0cA89e9B23D11D31eC4E34172A2cD2F37f714900';
/**
 * The address for the DarkForestScoring contract.
 */
export declare const SCORING_CONTRACT_ADDRESS = '';

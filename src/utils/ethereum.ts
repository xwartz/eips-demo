declare global {
  interface Window {
    ethereum: any
  }
}

const ethereum = window.ethereum

export default ethereum

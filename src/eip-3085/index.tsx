import React from 'react'
import CodeBlock from '~cps/CodeBlock'
import { ethereum, simpleToast } from '~utils/index'

const alert = (msg: string) => {
  simpleToast('success', msg)
}

const alertErr = (err: Error) => {
  simpleToast('error', err.message)
}

const NETWORK_MAINNET = {
  chainId: '0x1',
  chainName: 'Ethereum Mainnet',
  rpcUrls: ['https://cloudflare-eth.com/'],
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrls: ['https://etherscan.io/'],
}

const NETWORK_XDAI = {
  chainId: '0x64',
  chainName: 'xDAI Chain',
  rpcUrls: ['https://dai.poa.network'],
  iconUrls: [
    'https://xdaichain.com/fake/example/url/xdai.svg',
    'https://xdaichain.com/fake/example/url/xdai.png',
  ],
  nativeCurrency: {
    name: 'xDAI',
    symbol: 'xDAI',
    decimals: 18,
  },
  blockExplorerUrls: ['https://blockscout.com/poa/xdai/'],
}

const wallet_addEthereumChain_Mainnet = () => {
  return ethereum
    .request({
      method: 'wallet_addEthereumChain',
      params: [NETWORK_MAINNET],
    })
    .then(() => {
      alert('Add Ethereum Chain Successful')
    })
    .catch(alertErr)
}

const wallet_addEthereumChain_xDAI = () => {
  return ethereum
    .request({
      method: 'wallet_addEthereumChain',
      params: [NETWORK_XDAI],
    })
    .then(() => {
      alert('Add Ethereum Chain Successful')
    })
    .catch(alertErr)
}

const methods = [
  {
    onClick: wallet_addEthereumChain_Mainnet,
    name: 'wallet_addEthereumChain_Mainnet',
    code: `
      ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [NETWORK_MAINNET],
      })
    `,
  },
  {
    onClick: wallet_addEthereumChain_xDAI,
    name: 'wallet_addEthereumChain_xDAI',
    code: `
      ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [NETWORK_XDAI],
      })
    `,
  },
]

const EIP3085: React.FC<{}> = () => {
  return (
    <div className="page">
      <h3 id="h1">EIP-3085</h3>
      {methods.map(method => {
        return <CodeBlock key={method.name} {...method} />
      })}
    </div>
  )
}
export default EIP3085

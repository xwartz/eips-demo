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
}

const NETWORK_xDAI = {
  chainId: '0x64',
}

const wallet_switchEthereumChain_Mainnet = () => {
  return ethereum
    .request({
      method: 'wallet_switchEthereumChain',
      params: [NETWORK_MAINNET],
    })
    .then(() => {
      alert('Success Switch!')
    })
    .catch(alertErr)
}
const wallet_switchEthereumChain_xDAI = () => {
  return ethereum
    .request({
      method: 'wallet_switchEthereumChain',
      params: [NETWORK_xDAI],
    })
    .then(() => {
      alert('Success Switch!')
    })
    .catch(alertErr)
}

const methods = [
  {
    onClick: wallet_switchEthereumChain_Mainnet,
    name: 'wallet_switchEthereumChain_Mainnet',
    code: `
      ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [NETWORK_MAINNET],
      })
    `,
  },
  {
    onClick: wallet_switchEthereumChain_xDAI,
    name: 'wallet_switchEthereumChain_xDAI',
    code: `
      ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [NETWORK_xDAI],
      })
    `,
  },
]

const EIP3326: React.FC<{}> = () => {
  return (
    <div className="page">
      <h3 id="h1">EIP-3326</h3>
      {methods.map(method => {
        return <CodeBlock key={method.name} {...method} />
      })}
    </div>
  )
}
export default EIP3326

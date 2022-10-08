import './styles.css'

declare global {
  interface Window {
    ethereum: any
    imToken: any
    tronWeb: any
  }
}

const ethereum = window.ethereum
const imToken = window.imToken
export const APPROVE_METHOD_ID = '0x095ea7b3'
export const INCREASE_ALLOWANCE_METHOD_ID = '0x39509351'
export const DECREASE_ALLOWANCE_METHOD_ID = '0xa457c2d7'
export const DECREASE_APPROVAL_METHOD_ID = '0x66188463'
export const INCREASE_APPROVAL_METHOD_ID = '0xd73dd623'
export const alert = imToken
  ? function (s: string) {
      imToken.callAPI('native.toastInfo', JSON.stringify(s))
    }
  : window.alert
export const alertErr = (err: Error) => {
  alert(err.message)
}

let account: string
const to = '0xE6F4142dfFA574D1d9f18770BF73814df07931F3'
const lon = '0x0000000000095413afC295d19EDeb1Ad7B71c952'
const EOA_ADDRESS = to.substring(2).toLowerCase()
const LON_ADDRESS = lon.substring(2).toLowerCase()

const eth_requestAccounts = () => {
  return ethereum
    .request({ method: 'eth_requestAccounts' })
    .then((accounts: any) => {
      account = accounts[0]
      alert(account)
    })
    .catch(alertErr)
}

const eth_Approve = () => {
  const data = `${APPROVE_METHOD_ID}000000000000000000000000${LON_ADDRESS}00000000000000000000000000000000000000000000000000044364c5bb0000`
  const params = [
    {
      from: account,
      to: lon,
      data,
      gas: '200000',
      gasPrice: '1000000',
    },
  ]

  ethereum
    .request({
      method: 'eth_sendTransaction',
      params,
    })
    .then((result: any) => {
      alert(result)
    })
    .catch(alertErr)
}

const eth_Approve_EOA = () => {
  const data = `${APPROVE_METHOD_ID}000000000000000000000000${EOA_ADDRESS}00000000000000000000000000000000000000000000000000044364c5bb0000`
  const params = [
    {
      from: account,
      to: lon,
      data,
      gas: '200000',
      gasPrice: '1000000',
    },
  ]

  ethereum
    .request({
      method: 'eth_sendTransaction',
      params,
    })
    .then((result: any) => {
      alert(result)
    })
    .catch(alertErr)
}

const eth_decrease_Approve = () => {
  const data = `${DECREASE_ALLOWANCE_METHOD_ID}000000000000000000000000${LON_ADDRESS}00000000000000000000000000000000000000000000000000044364c5bb0000`
  const params = [
    {
      from: account,
      to: lon,
      data,
      gas: '200000',
      gasPrice: '1000000',
    },
  ]

  ethereum
    .request({
      method: 'eth_sendTransaction',
      params,
    })
    .then((result: any) => {
      alert(result)
    })
    .catch(alertErr)
}

const eth_increase_Approve = () => {
  const data = `${INCREASE_ALLOWANCE_METHOD_ID}000000000000000000000000${LON_ADDRESS}00000000000000000000000000000000000000000000000000044364c5bb0000`
  const params = [
    {
      from: account,
      to: lon,
      data,
      gas: '200000',
      gasPrice: '1000000',
    },
  ]

  ethereum
    .request({
      method: 'eth_sendTransaction',
      params,
    })
    .then((result: any) => {
      alert(result)
    })
    .catch(alertErr)
}

const methods = [
  {
    func: eth_requestAccounts,
    name: 'eth_requestAccounts',
    code: eth_requestAccounts.toString(),
  },
  {
    func: eth_Approve,
    name: 'eth_Approve',
    code: eth_Approve.toString(),
  },
  {
    func: eth_Approve_EOA,
    name: 'eth_Approve_EOA',
    code: eth_Approve_EOA.toString(),
  },
  {
    func: eth_increase_Approve,
    name: 'eth_increase_Approve',
    code: eth_increase_Approve.toString(),
  },
  {
    func: eth_decrease_Approve,
    name: 'eth_decrease_Approve',
    code: eth_decrease_Approve.toString(),
  },
]

export default function App() {
  return (
    <div className="App">
      <h3 id="h1">Eth Approve example in imToken</h3>
      {methods.map(method => {
        return (
          <section key={method.name}>
            <button onClick={method.func}>{method.name}</button>
            <details>
              <summary>show code</summary>
              <pre>{method.code}</pre>
            </details>
          </section>
        )
      })}
    </div>
  )
}

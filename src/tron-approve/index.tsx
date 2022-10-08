import './styles.css'
import { alert, alertErr } from '../eth-approve'

const ethereum = window.ethereum
const tronWeb = window.tronWeb
let account: string
const trc20ContractAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
const spender = 'TNNxU7Jez9Q4bXREBrBxrmTLnzpAtKDRhw'

const requestAccounts = () => {
  return ethereum
    .request({ method: 'eth_requestAccounts' })
    .then((accounts: any) => {
      account = accounts[0]
      alert(account)
    })
    .catch(alertErr)
}

const tron_approve = async () => {
  const amount = 1000
  try {
    const contract = await tronWeb.contract().at(trc20ContractAddress)

    await contract.approve(spender, amount).send({
      feeLimit: 100000000,
    })
  } catch (err) {
    alertErr(err as Error)
  }
}

const tron_approve_EOA = async () => {
  const spender = 'TBEqWyspTESSFSx3Gg8vwwa6xZjZZpenN9'
  const amount = 1000
  try {
    const contract = await tronWeb.contract().at(trc20ContractAddress)
    await contract.approve(spender, amount).send({
      feeLimit: 100000000,
    })
  } catch (err) {
    alertErr(err as Error)
  }
}

const tron_decrease_approve = async () => {
  const amount = 1000
  try {
    const contract = await tronWeb.contract().at(trc20ContractAddress)

    await contract.decreaseApproval(spender, amount).send({
      feeLimit: 1000000000,
    })
  } catch (err) {
    alertErr(err as Error)
  }
}

const tron_increase_approve = async () => {
  const amount = 100000000
  try {
    const contract = await tronWeb.contract().at(trc20ContractAddress)

    await contract.increaseApproval(spender, amount).send({
      feeLimit: 1000000000,
    })
  } catch (err) {
    alertErr(err as Error)
  }
}

const methods = [
  {
    func: requestAccounts,
    name: 'requestAccount',
    code: requestAccounts.toString(),
  },
  {
    func: tron_approve,
    name: 'tron_approve',
    code: tron_approve.toString(),
  },
  {
    func: tron_approve_EOA,
    name: 'tron_approve_EOA',
    code: tron_approve_EOA.toString(),
  },
  {
    func: tron_decrease_approve,
    name: 'tron_decrease_approve',
    code: tron_decrease_approve.toString(),
  },
  {
    func: tron_increase_approve,
    name: 'tron_increase_approve',
    code: tron_increase_approve.toString(),
  },
]

export default function App() {
  return (
    <div className="App">
      <h3 id="h1">Tron Approve example in imToken</h3>
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

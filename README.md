# Truffle-Vyper-Example

Example project to test/compile/deploy smart contracts written in Vyper using Truffle.

## 🛠 Built With

<div align="left">
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/nodejs.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://docs.python.org/3/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/python.svg" width="36" height="36" alt="Python" /></a>
<a href="https://docs.vyperlang.org/en/stable/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/vyper.svg" width="36" height="36" alt="Vyper" /></a>
<a href="https://trufflesuite.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/truffle.svg" width="36" height="36" alt="Truffle" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/javascript.svg" width="36" height="36" alt="JavaScript" /></a>
</div>

## ⚙️ Run Locally

Clone the repository

```bash
git clone https://github.com/DEMYSTIF/truffle-vyper-example
cd truffle-vyper-example
```

Install Truffle globally

```bash
npm install -g truffle
```

Install Vyper using pip

```bash
pip install vyper
```

Test the contract

```bash
truffle test
```

Deploy the contract (edit truffle-config.js at first)

```bash
truffle migrate
```

Debug transaction

```bash
truffle debug <transactionHash>
```

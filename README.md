## Inspiration
In the light the last data leaks we were inspired to help people take control of their data. Furthermore, patients in third world countries can't pay for their healthcare. This brought us to build a decentralised platform for medical records management using the Ethereum blockchain.

## What it does
The platform enables doctors to manage medical records without a third party. It also give research institutes the ability to directly acquire data from patients.

## How we built it
With implemented a decentralised application of the Ethreum blockchain, where we store the medical records, offer a selling platform and automatically distribute ether coin between patients. We used web3.js library to have node integration with blockchain and truffle framework to facilitate our interactions with the ethereum interface. With also use Metamask injection to link the clients wallets and our smart contract for the payment. The smart contract is implemented using solidity programming language and manipulated using a react.js client.

## Challenges we ran into
- The solidity programming language is not mature yet. 
- Wiring the blockchain with a React app wasn't intuitive.

## Accomplishments that we're proud of
- Proposed a solution to a problem that we live our selfs.
- Proposed a solution to improve the healthcare situation in developing countries
- Implemented a decentralised application for the first time
- Enjoyed learning one of the next generation technologies (Web 3.0)
- Worked in a team and had fun learning from each other

## What we learned
- There is a big chance to disrupt the healthcare industry
- Blockchain is cool, but the technology is still new and immature ;)

## What's next for hexchain
- Keep in touch and improve our proof of concept by having more secured platform and deploy the client in the interplanetary file system (IPFS). This way our Dapp will be fully decentralised.


## CLI-Commands
|                			|                        		|
|---------------------------|-------------------------------|
|Install all dependencies	|`yarn install`            		|
|Debug          			|`yarn start`            		|
|Analyse Code Style			|`yarn run lint`				|
|Analyse Flow				|`yarn run flow`				|
|Deploy contract in blockchain				|`truffle migrate --reset`				|

### <h1>Title - Blockchain based E-commerce warranty system using NFTs</h1>

### <h1> 👩🏻‍💻 To run on local host </h1>
#### (Local setup)
To run this project locally, follow these steps "CAREFULLY".

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/raaghavgupta2020/Warrantify-stable.git

# Open new terminal

cd frontend

npm i

# Open new terminal

cd frontend/src/blockchain

npm i

```

2. Start the local Hardhat node 

```sh

# Open new terminal

cd frontend/src/blockchain

npx hardhat node
```

Around 20 accounts with private keys will be provided by hardhat 

### Connect development blockchain accounts to Metamask
If you have not added "localhost" to the list of networks on your metamask, 
open up a browser, 
click the fox icon, 
then click the top center dropdown button that lists all the available networks then click add networks. 
A form should pop up. For the "Network Name" field enter "localhost". 
For the "New RPC URL" field enter "http://127.0.0.1:8545/". 
For the chain ID enter "1337". 
For currency symbol , enter "ETH"
Then click save

Now , Copy the private key of any of the provided accounts by the previous command "npx hardhat node" and Import an account using "Import Account" option in the metamask wallet. 

3. Next, keep the node running and open a separate terminal window to deploy the contract.
In a separate window, run the following command:

```sh
# Open new terminal

cd frontend/src/blockchain

npx hardhat run scripts/deploy.js --network localhost
```

4. Start the app

```
# Open new terminal

cd frontend

npm start 

or 

npm run dev
```

### Configuration (POLYGON)

To deploy to Polygon test or main networks, update the configurations located in __hardhat.config.js__ to use a private key and, optionally, deploy to a private RPC like Infura.

```javascript
require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

// infuraId is optional if you are using Infura RPC
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
```


## 🧐 Problem at hand 
- The blockchain smart contract should allow users to prove ownership 
- Provide the purchasing history, warranty period, and other item information
- The warranty card should include the item’s serial number and upon purchase be sent to the customer’s smartphone.
- The NFTs should be decaying in nature, in that, after a certain period their use for the redemption of warranty benefits offered by the brand/retailer will expire
- Bonus - GUI-based tool that doesn’t require knowledge of any Blockchain programming to use by Brands and Retailers.
- Bonus - Usage of Soulbound NFTs
- Bonus - Add any engagement/gamification construct to the loyalty program


## ⚒️ Use Cases
P0 - Authentication : Enables you to check who minted the NFT, when, and how many people owned it. So that you're buying the real NFT, and not a knockoff version.
 
P1 - Impossible falsification : NFTs cannot be falsified because of the tokenURI (Each NFT will be having a different token URI , i.e , the unique serial number for each product’s warranty

P2 - Standardisation :An NFT warranty on Warrantify is standardized, no matter who issued it or when.

P3 - Number of transfers permitted : The number of warranty transfers of a product can be limited and controlled. Some warranties are non-transferable to new owners whereas others offer unlimited transfers. Tokenized warranties can accurately enforce these rules.

P4 - Easy tracking and handling : A product's exact ownership chain can be traced.

P5 - Ownership : Token of ownership. Details such as previous owner , current owner , time left for warranty to expire 

P6 - Protection against tampering : NFTs can be used to protect ownership/warranty records from tampering. Using NFTs and blockchain allow for an efficient way to check ownership history. 

P7 - Reduce warranties on expired products: A bad acting authorized dealer could issue warranty cards for expired products "under the table", Finding bad-acting dealers will be simpler since it is easier to scan the blockchain for anomalous behaviors such as multiple warranty NTFs for the same product serial number.

P8 - Donation: Buyers can also help their favourite brands to grow by Donating any amount to the company . This use case can literally change lives . Many of the brands are doing good work in association with certain NGOs , such as Save Dogs merchandise , Climate change issues merchandise , This feature will help them gain the required funds faster than ever before.


## 🙌🏻 Our Solution
Eliminating the physical receipt or warranty card as the warranty document is easily falsifiable, is not necessarily standard among different sellers and a bad acting authorized dealer might issue warranty cards for expired products "under the table" - Sellers can use a very simple GUI for listing their companies and uploading various products along with inputs like product image , product video , description , amount , warranty period and much more . Buyers can view all the companies and the products under each company along with all the details attached to the product . As soon as the buyer buys a product , a digital NFT warranty card will be created itself with the remaining warranty time. This will be the symbol of ownership for each buyer. It’ll contain information such as the previous owner (i.e , the company’s wallet address) , new owner (i.e, the buyer’s wallet address) and it will symbolize the remaining time for which the product’s warranty is valid.

Made the reselling and returning of products easier than never before - The digital warranty cards will be containing the time period remaining for the warranty to expire . Till the time warranty is “Valid”, buyers can return the product with a single click without any hassle.Once the buyer clicks on “return the product” , the buyer can just state the reason of returning the product and an Email will be sent to the buyer from the company side regarding the return of the product.

Product Video - A product video can be uploaded of any duration , it will itself be converted to a small video of 10 seconds if the highlights option is selected and that will be then used as the nft on the digital nft warranty card.This can help the buyers to get more visuals of the product.

Decentralized storage means less restrictions and more ownership perks - Decentralized storage allows users to be free from the restrictions of any one particular platform and makes Warrantify kind of platform independent.

Transfer of Ownership - Transfer of ownership can be done using a simple GUI . A buyer (user) can transfer the NFT Warranty card to another user by putting the wallet address of the other user and the other user will then


## 👩🏻‍💻Tech Stack
Solidity (Writing Smart Contract)</br>
Javascript (React & Testing)</br>
Ethers (Blockchain Interaction)</br>
Hardhat (Development Framework)</br>
Ipfs (Metadata storage)</br>
React routers (Navigational components)</br>
ERC721 NFT standard </br>
React  , Tailwind CSS , EmailJS , styled components ,... </br>
Polygon (for deploying smart contracts)</br>
Symbl.ai (for video shortening )</br>
Metamask Wallet</br>

 
## ✨ Future Scope
Gas fee Tokens for customers - We can give some frequent exclusive buyers , some amount of ethereum in their profiles on the Warrantify website so that they can use these tokens for paying the gas fee applied on each transaction .This will be like a token voucher for regular users/buyers. This can be a type of loyalty program.

No listing price for most selling product companies and the companies associated with NGOs- The listing price can be made 0 for the best product selling companies and the companies associated with NGOs upon getting their factual information. Also, we are already providing a “Donate” option for these type of companies

Soulbound Tokens - Soulbound tokens are the token which are non-transferable and can be burnt only by the owner . If someone’s product is damaged and cannot be repaired or returned in the warranty T&Cs , then the owners can themselves burn the warranty cards.

Delivery time period -  Delivery period has not been taken into account in Warratify hence as soon as the product is bought , the warranty starts to decay. Hence this can be implemented using some information such as estimated time of delivery(so that decaying is started after that 

Return time period - Return time period can be taken into consideration similar to the Delivery time period.

Extended Warranty - Buyers can pay some extra amount to extend the warranty of the products. For this the warranty period will be increased on the digital warranty card and the buyer will then be able to return and resell the card. An email will be sell regarding this.

Another way of releasing new products - NFT can provide a new format for releasing latest product model’s images and videos by the sellers. 

 
## 👫 Contributors 
* [Raghav Gupta](https://github.com/raaghavgupta2020)
* [Hardik Nagpal](https://github.com/hardik0517)
* [Manmeet Singh](https://github.com/manmeetsingh089)

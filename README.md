### <h1>Title - Blockchain based E-commerce warranty system using NFTs</h1>

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
ERC721 NFT standard
React Tailwind CSS
IPFS
Solidity
Smart Contracts 
Polygon (for deploying smart contracts)
Ethereum Ecosystem
Symbl.ai (for video shortening )
nltk
Metamask
Netlify (for hosting)

 
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

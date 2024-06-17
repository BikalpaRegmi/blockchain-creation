const {GENESIS} = require('./config.js')
const {cryptoHash} = require('./crypto-hash.js')

class Block {
    constructor({timeStamps, prevHash, hash, data}) {
        this.timeStamps = timeStamps;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
    }
    static genesis() {
        return new this(GENESIS)
    }
    static mineBlock({prevBlock,data}) {
        const timeStamps = Date.now();
        const prevHash = prevBlock.hash;
        return new this({
          timeStamps,
            prevHash,
            data,
          hash:cryptoHash(timeStamps,prevHash,data),
        });
                
        
    }
}

const block1 = new Block({
    timeStamps: '7:14pm',
    prevHash: '0b124',
    hash: '0b125',
    data: 'Hola como estas'
});

const block2 = new Block({
   timeStamps: "7:16pm",
   prevHash: "0b125",
   hash: "0b126",
    data: "whats uppp"
});
   
const Genesis = Block.genesis();

const result = Block.mineBlock({ prevBlock: block1, data: "Biksss" });


console.log(result)
// console.log(block1);
// console.log(block2);
// console.log(Genesis);
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy rifle ridge purity harvest inflict slot gate'; 
let testAccounts = [
"0xc52b74cfba1e46b236963c6d59f7cc553d42fcda43e48d7ba45ac50368276338",
"0x30345c089e59cbaa0283f7838d4ef069035f63803831dbf112e1c7fbcb9bde59",
"0x8140c6e8c9557c0fe3e93d3ea3f841b503626a44be84ec84b123b1f1ee7e9ef8",
"0x1dd4c9ba6561b0db0e431cc2c5f7f8684e379bc1cb5e9e7b41718c966c1c392a",
"0xbfed8f4593cdd7fa06d7ce1463437f0157468de213fbf59e1240b4dabe093ff4",
"0x6dfc39f8cbc552c87d66fc44ad18169a7e2ff7200fdf20d53f4f668e155c6860",
"0xa320142da4dfde3931b9129fca20a1023cae165335e4aef520f9993ee6bb166c",
"0x9e989b7f6706c3d1daf538f6486e45888be173d1b0d3e3c2e078991b3a51d311",
"0x11271c875001e3e7a9a9f30aa0d1329cd6d19b686c27a5cd6deac29ad77e2c31",
"0x117a3fb98a3b665b7f13bfa5ec9ee21f85c11f006e85062f5f83b49ddb924d86"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth pitch upgrade grid entry army gas'; 
let testAccounts = [
"0xf802b91ccdeed769a0a51e73235b15b5fd3811ff55231f64a1e2c27b903dad86",
"0xa5e7e8d49b5151ac502330ea5aa6ceefee5e728ae7b391bf929e7d9b265378ce",
"0x818e33e3fc5e9c764c634f15e7f858464cdb3bbeced21c64993016249c7b91a4",
"0xdc3e549627f7aeb5442d9e99b2e52b23129cbe02225004b524e6494b78d814b9",
"0x03110521ec763b9894eca84632ddc7fad30734b52f581418fee9a60635f0a066",
"0x9ad9645525ed8b069a3a2635b01f24671f9f81a0d8678b7fecc1c6c8ec38c45c",
"0xe1d76771e1b52aeaadb44157dd6e6802ac3e6e21d669678eadcbc5bbf85f4203",
"0x07ede750f29b8dc77052ac8f24216c35023460e7a5de87ad7a82f46fc2626697",
"0x18e17a33f02fe1248b97d5d4f5cb974d8f085082d08536f235a39e3c607850d5",
"0xbd7403ac2817f83c517e46eba531009d47b2ff39ae2caf04b6c8b17e8241f362"
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
            version: '^0.5.11'
        }
    }
};

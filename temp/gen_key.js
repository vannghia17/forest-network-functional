const { Keypair } = require('stellar-base');

const key = Keypair.random();
console.log(key.secret());
console.log(key.publicKey());

// S: SAKBEYMQESXCX63OC7EZ7WYUJ6CGW5TWEOJIREHRLXTSG5AWRKSO7YFP
// P: GDMBJ447Y5XLBI2AHPR42NBCM46TIZQPHPPNCJJP25MJ3X6TLXO5KKSX

// S: SC32SP3CEPY45DXAARE3YAQONQLAPEWZ4NCYLHUVHPTJZOCQL2VSARNK
// P: GBWUF2JNJ7WGBREPBIFQIJFTQM3BLX65OD5CGDJWI3AH3JBGNFHTNM4O

// S: SCXGVZE5DALD2EM5ABYNAICEKVBQATI4IDKSMMEKAQECQBKRMTIDCTM4
// P: GBSTUEUOHBBJKM5NNOT7J4NPPFMBSTGA5AG2SXSRBM2TAKVJYI4JNVUO

// S: SDKDTYZLUMXGEYSEQQDGDZYANXNUOP25WETCYCOAHW4PLSZLZVVQBT4E
// P: GCXER67PAE2R3LQFTOARJHOTRYMI4KE4UICTZHBSUL7KEV2SJDVTPBQ4
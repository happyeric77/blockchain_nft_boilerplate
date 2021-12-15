export const networkCollections = {
    "0x13881": [
      //Add Your Collections here
        {
            image:
            "https://lh3.googleusercontent.com/BWCni9INm--eqCK800BbRkL10zGyflxfPwTHt4XphMSWG3XZvPx1JyGdfU9vSor8K046DJg-Q8Y4ioUlWHiCZqgR_L00w4vcbA-w=s0",
            name: "Test Mages",
            addr: "0x275d553f426355c20b134D944B5b28D31CDb83DA",
        },
        {
            image:
            "https://ipfs.moralis.io:2053/ipfs/QmfLbpeVHxReWKNLaXTPcWiafi49eoAL4gRwMGuXtx2Eqe/images/14.png",
            name: "Pixel Show",
            addr: "0xCA34404dD8Bd6537BE76F3A51B379F8949bD7973",
        },
    ],
    "0x1": [
        {
            image:
            "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130",
            name: "Bored Ape Yacht Club",
            addr: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
        },
        {
            image:
            "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130",
            name: "Crypto Punks",
            addr: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        },
        {
            image:
            "https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s0",
            name: "Bored Ape Kennel Club",
            addr: "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
        },
        {
            image:
            "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
            name: "Doodles",
            addr: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
        },
        {
            image:
            "https://lh3.googleusercontent.com/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s=s0",
            name: "0N1 Force",
            addr: "0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D",
        },
        {
            image:
            "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s0",
            name: "Mutant Ape Yacht Club",
            addr: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
        },
        {
            image:
            "https://lh3.googleusercontent.com/LIpf9z6Ux8uxn69auBME9FCTXpXqSYFo8ZLO1GaM8T7S3hiKScHaClXe0ZdhTv5br6FE2g5i-J5SobhKFsYfe6CIMCv-UfnrlYFWOM4=s0",
            name: "CyberKongz",
            addr: "0x57a204AA1042f6E66DD7730813f4024114d74f37",
        },
        {
            image:
            "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s0",
            name: "Cool Cats NFT",
            addr: "0x1A92f7381B9F03921564a437210bB9396471050C",
        },
    ],
    "0x4": [
        {
            image: "",
            name: "",
            addr: "",
        }
    ],
    "0x61": [
        {
            image: "https://bafybeibuwxhdfhnz55tovo33rspvqrdghvttabrwauofkdgxweoz2cr4sy.ipfs.infura-ipfs.io/",
            name: "Mars Panda Dev",
            addr: "0x63fe98C97c19f29C7582e983E61CdCE08423BE55",
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0574/9551/9406/files/20.png",
            name: "ALOHA",
            addr: "0xC90a513d92C2e03E5D99796e9CC0379718B31F25"
        }
    ]
  };
  
  export const getCollectionsByChain = (chain) => networkCollections[chain];
import Web3Context from "../../src/Web3Context"
import { useContext, useEffect, useState, useRef } from "react"
import { useNFTBalances, useWeb3ExecuteFunction } from "react-moralis";
import { Card, Image, Tooltip, Modal, Input } from "antd";
import { FileSearchOutlined,  ShoppingCartOutlined } from "@ant-design/icons"
import { supportedChains } from "../../src/networkProvider";
import contractJson from "../../src/contracts/marketPlaceBoilerPlate.json"
// import IERC721Json from "../../src/contracts/IERC721.json"


export default function NFTBalance() {
    // Moralis Hooks
    const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();
    const contractProcessor = useWeb3ExecuteFunction();

    const web3Context = useContext(Web3Context)
    const mktPlaceContract = useRef()

    const { Meta } = Card
    const [isVisible, setIsVisible] = useState()
    const [nftToSell, setNftToSell] = useState()
    const [listPrice, setListPrice] = useState()

    useEffect(()=>{
        mktPlaceContract.current = web3Context.web3 && web3Context.chainId && new web3Context.web3.eth.Contract(contractJson.abi, supportedChains[web3Context.chainId].mktPlaceAddr)
        console.log(web3Context)
        console.log(web3Context.chainId && supportedChains[web3Context.chainId].explorer)
        getNFTBalances()
    }, [web3Context.user, web3Context.chainId])

    function list(nft) {
        setIsVisible(true)
        setNftToSell(nft)
    }
    async function sell(nftToSell, listPrice) {
        // let token = new web3Context.web3.eth.Contract(IERC721Json.abi, nftToSell.token_address)
        // await token.methods.approve(mktPlaceContract.current._address, nftToSell.token_id).send({from: web3Context.addr})
        // await mktPlaceContract.current.methods.createMarketItem(nftToSell.token_address, nftToSell.token_id, web3Context.web3.utils.toWei(listPrice)).send({from: web3Context.addr})
        await contractProcessor.fetch({
            params: {
                contractAddress: supportedChains[web3Context.chainId].mktPlaceAddr,
                functionName: "createMarketItem",
                abi: contractJson.abi,
                params: {
                    nftContract: nftToSell.token_address,
                    tokenId: nftToSell.token_id,
                    price: web3Context.web3.utils.toWei(listPrice.toString()),
                },
            },
            onError: (e)=>{console.log(e)} 
        });
        
        
        setIsVisible(false)
    }
    return <>
    
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            {data && data.result.map((nft, id)=>{
                return <Card
                        key={id}
                        hoverable
                        actions={[
                            <Tooltip key={0}  title="View On Blockexplorer">
                                <FileSearchOutlined
                                    onClick={() => window.open(`${web3Context.chainId && supportedChains[web3Context.chainId].explorer}address/${nft.token_address}`, "_blank")}
                                />
                            </Tooltip>,
                            <Tooltip key={1} title="List NFT">
                                <ShoppingCartOutlined onClick={() => list(nft)} />
                            </Tooltip>,
                        ]}
                        style={{ width: 240 , margin: "10px"}}
                        cover={<Image
                            preview={false}
                            src={nft?.image || "error"}
                            fallback="data:image/png;base64,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"
                            alt=""
                            style={{ height: "300px" }}
                        />}>
                        <Meta title={nft.name} description={<a href={`/nft-tokenids/#${nft.token_address}`}>{nft.token_address}</a>} />
                    </Card>
            })}
            <Modal
                title={`List ${nftToSell?.name} #${nftToSell?.token_id}`}
                visible={isVisible}
                onCancel={() => setIsVisible(false)}
                onOk={() => {sell(nftToSell, listPrice)}}
                okText="List"
            >   
                <Image preview={false} src={nftToSell?.image || "error"} style={{ height: "300px" }}/>
                <Input autoFocus placeholder={`Input price in ${web3Context.chainId && supportedChains[web3Context.chainId].symbol}`} onChange={(e)=>{setListPrice(e.target.value)}}/>
            </Modal>
        </div>
    </>
}
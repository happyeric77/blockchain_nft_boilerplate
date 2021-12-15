import { useContext, useEffect, useState } from "react";
import NFTTokenIds from "../components/app/NFTTokenIds";
import Web3Context from "../src/Web3Context";

export default function Home() {
    const web3Context = useContext(Web3Context)
    const [tokenAddr, setTokenAddr] = useState()
    useEffect(()=>{
        fetchTokenAddr()
    }, [])
    function fetchTokenAddr() {
        if (window.location.href.split("#").length == 2) {
            let [, tokenAddr] = window.location.href.split("#")
            web3Context.web3.utils.isAddress(tokenAddr) && setTokenAddr(tokenAddr)
        }
    }
    return (
        <div>
            <NFTTokenIds data={{addr: tokenAddr ?  tokenAddr : "0x09Fc1ed2532ae1bcECEA5FFfD0De67bE3250183b"}}/>
        </div>
    )
}
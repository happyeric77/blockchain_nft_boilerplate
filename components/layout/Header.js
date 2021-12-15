
import Class from "./Header.module.sass"
import router from 'next/router'
import { Button, Avatar, Tooltip, Menu, Dropdown } from 'antd';
import { WalletOutlined, DisconnectOutlined, UserOutlined, DownOutlined } from '@ant-design/icons'
import Link from "next/link"

function Header({userAddr, chain, login, logout, isAuthenticated, supportedChains, switchNetwork}) {
    const { SubMenu } = Menu;
    
    const chainMenu = (
        <Menu>
            {Object.keys(supportedChains).map((chain, id)=>{
                return <Menu.Item key={id}><a onClick={()=>{switchNetwork(chain)}}>{supportedChains[chain].chainName}</a></Menu.Item>
            })}
        </Menu>
    );

    return <>
        <div className={Class.header}>

            <div className={Class.imgs} onClick={()=>{router.push("/")}} ></div>


            { <Dropdown overlay={chainMenu} trigger={['click']} >
                <div className="ant-dropdown-link" style={{marginRight: "10px"}}>
                    Select Network <DownOutlined />
                </div>
            </Dropdown>}

            {userAddr && 
                <Avatar.Group /*size="large"*/ className={Class.userInfo} >
                    <Avatar icon={<UserOutlined/>} style={{ backgroundColor: '#f56a00' }}></Avatar>
                    <Tooltip title= {userAddr.slice(0,6)+ "...."+userAddr.slice(-4)} placement="top">
                        <div className="chain">{userAddr && chain}</div>
                    </Tooltip>
                </Avatar.Group>
            }  

            <div className={Class.buttons}>
                {!userAddr ? 
                    <Button icon={<WalletOutlined />} className={Class.button} onClick={login}> Connect </Button>:
                    <Button icon={<DisconnectOutlined />} className={Class.button} onClick={logout}> Disconnect </Button>
                }
            </div>
            
        </div>

        <Menu onClick={(e)=>{console.log(e)}} selectedKeys={['mail']} mode="horizontal" theme="dark" className={Class.navBar}>
            <Menu.Item key="balance" icon={<WalletOutlined />}>
                <Link href="/nft-balance">My Collection</Link>
            </Menu.Item>
            <Menu.Item key="balance" icon={<WalletOutlined />}>
                <Link href="/nft-tokenids">Explorer</Link>
            </Menu.Item>
        </Menu>
    </>
}
export default Header
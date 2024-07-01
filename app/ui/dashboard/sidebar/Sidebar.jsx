import Image from "next/image"
import MenuLinks from "./menuLink/menuLinks"
import styles from "./sidebar.module.css"
import {MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork} from "react-icons/md"
const menuItems = [
    {
        title:"Pages",
        list:[
            {
                title:"Dashboard",
                path:"/dashboard",
                icon:<MdDashboard />
            },{
                title:"Users",
                path:"/dashboard/users",
                icon:<MdSupervisedUserCircle />
            },{
                title:"Products",
                path:"/dashboard/products",
                icon:<MdShoppingBag />
            },{
                title:"Transactions",
                path:"/dashboard/transactions",
                icon:<MdAttachMoney/>
            }
        ]
    },
    {
        title:"Analytics",
        list:[
            {
                title:"Revenue",
                path:"/dashboard/revenue",
                icon:<MdWork/>
            },{
                title:"Report",
                path:"/dashboard/report",
                icon:<MdAnalytics/>
            },{
                title:"Teams",
                path:"/dashboard/teams",
                icon:<MdPeople/>
            }
        ]
    },
    {
        title:"User",
        list:[
            {
                title:"Settings",
                path:"/dashboard/settings",
                icon:<MdOutlineSettings/>
            },{
                title:"Help",
                path:"/dashboard/help",
                icon:<MdHelpCenter/>
            }
        ]
    }
]
function Sidebar() {
  return (
    <div className={styles.container}>
        <div className={styles.user}>
            <Image className={styles.userImage} src="/noavatar.png" alt="logo" width={50} height={50}/>
            <div className={styles.userDetail}>
                <span className={styles.userName}>John Doe </span>
                <span className={styles.userTitle}>Administrator </span>
            </div>
        </div>
        <ul className={styles.list}>
        {menuItems.map((cat)=>{
            return <li key={cat.title}>
                <span className={styles.cat}>
                    {cat.title}
                </span>
                {
                    cat.list.map((item)=>(
                        <MenuLinks key={item.title} item={item}/>
                    ))
                }
            </li>
        })}
        </ul>
        <button className={styles.logout}>
            <MdLogout/>
            Logout
        </button>
    </div>
  )
}

export default Sidebar
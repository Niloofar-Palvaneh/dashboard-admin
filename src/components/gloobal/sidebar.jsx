import React, { useState } from 'react'


function Sidebar() {
    const [itemId, setItemId] = useState(1)
    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const sidebarItems = [
        {
            id: 1,
            href: "/",
            title: "Dashboard",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        },
        {
            id: 2,
            href: "/users",
            title: "Users",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
        },
        {
            id: 3,
            href: "/admins",
            title: "Admins",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>

        },
        {
            id: 4,
            href: "/Subscriptions",
            title: "Subscriptions",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 0 1 1.422 0l.655.218a2.25 2.25 0 0 0 1.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        }
    ]
    return (
        <div className={` transition-all  ${isShowSidebar ? "w-[250px] sm:w-[200px]" : "w-[60px]"} h-screen shadow bg-white sticky p-2 overflow-hidden`}>
            <div className='relative'>
                {
                    isShowSidebar ? (
                        <svg
                            onClick={() => setIsShowSidebar(!isShowSidebar)}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-6 h-6 absolute right-0 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            onClick={() => setIsShowSidebar(!isShowSidebar)}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-6 h-6 absolute right-2 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    )
                }
            </div>
            {
                isShowSidebar ? (
                    <ul className='mt-12 w-full '>
                        {
                            sidebarItems.map(item => (
                                <li key={item.id}
                                    onClick={() => setItemId(item.id)}
                                    className={`transition-all ease-out hover:bg-white border mt-6 cursor-pointer w-full
                            ${itemId === item.id ? "bg-white" : "bg-gray-100"}
                            rounded-xl flex items-center justify-start gap-6 p-2 shadow`}>
                                    <div className='sm:hidden'>
                                        {item.icon}
                                    </div>
                                    <span className='text-lg sm:text-sm'>{item.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <ul className='mt-12 w-max'>
                        {
                            sidebarItems.map(item => (
                                <line to={item.href}>
                                    <li key={item.id}
                                        onClick={() => setItemId(item.id)}
                                        className={`transition-all ease-out hover:bg-white border mt-6 cursor-pointer w-full
                            ${itemId === item.id ? "bg-white" : "bg-gray-100"}
                            rounded-xl flex items-center justify-start sm:p-1 p-2 shadow`}>
                                        {item.icon}
                                    </li>
                                </line>
                            ))
                        }
                    </ul>
                )
            }


        </div>
    )
}

export default Sidebar
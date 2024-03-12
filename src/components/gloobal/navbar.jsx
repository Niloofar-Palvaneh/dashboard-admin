import React, { useState } from "react"

function Navbar() {
    const [isShowSidebarSettingMenu, setIsShowSidebarSettingMenu] = useState(false)
    const [showTodosOrNotifs, setShowTodosOrNotifs] = useState(false)
    const setIsShowSidebarSettingMenuHandler = () => {
        setIsShowSidebarSettingMenu(!isShowSidebarSettingMenu)
    }
    const setShowTodosOrNotifsHandler = () => {
        setShowTodosOrNotifs(!showTodosOrNotifs)
    }
    const showTodosOrNotifsHandler = ()=>{
        setIsShowSidebarSettingMenu(!isShowSidebarSettingMenu)
        setShowTodosOrNotifs(!showTodosOrNotifs)
    }
    return (
        <>
            <div className="overflow-hidden">
                <div className="w-full flex items-center justify-between bg-white sticky top-0 px-8 py-2 shadow-md sm:px-2 md:justify-center md:gap-12 z-50 ">
                    <div className="flex items-center justify-center gap-24">
                        <img src="/img/logo.svg" alt="logo" className="w-[150px] sm:hidden " />
                        <img src="/img/logo-mini.svg" alt="logo" className="w-[40px] hidden sm:inline " />
                        <div className="flex items-center justify-center gap-8 sm:hidden md:hidden">
                            <div className="flex items-center justify-center gap-2 w-max p-2 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <input type="text" placeholder="Search now ..." className="bg-transparent border-none outline-none" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6 flex-row-reverse">
                        <svg
                            onClick={() => setIsShowSidebarSettingMenuHandler()}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <img src="/img/1.png" alt="profile" className="w-12 h-12 rounded-full " />
                        <div
                        onClick={()=>showTodosOrNotifsHandler()}
                        className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                            <div className="w-[8px] h-[8px] bg-blue-500 rounded-full absolute top-0 right-0"></div>
                        </div>
                    </div>
                </div>
                <div className={`transition-all w-[280px] h-screen border shadow bg-white absolute ${isShowSidebarSettingMenu ? "right-0" : "right-[-1800px]"}`}>
                    <div className="w-full flex items-center justify-between p-4 border-b ">
                        <p onClick={() => setShowTodosOrNotifsHandler()} className={`cursor-pointer transition-all hover:text-blue-700 ${showTodosOrNotifs ? "" : "text-blue-700"}`}>TODOS</p>
                        <p onClick={() => setShowTodosOrNotifsHandler()} className={`cursor-pointer transition-all hover:text-blue-700 ${showTodosOrNotifs ? "text-blue-700" : ""}`}>NOTIFS</p>
                        <svg
                            onClick={() => setIsShowSidebarSettingMenuHandler()}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    {
                        showTodosOrNotifs ? (
                            <div className="px-2 mt-2">
                                 <div className="mt-4 flex items-center justify-between shadow p-2 transition hover:bg-gray-50 rounded gap-1">
                                    <div className="flex items-center justify-center gap-1">
                                        <p className="text-sm text-gray-800">hellow dear, i have a question.... how old are you ?</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600 cursor-pointer">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <div className="px-2 mt-2">
                                <div>
                                    <input className="outline-none border-none" type="text" placeholder="ADD TODO..." />
                                    <button className="px-4 py-1 rounded border-blue-500 border-2 text-white bg-blue-500 transition-all hover:bg-white hover:text-blue-500">ADD</button>
                                </div>
                                <div className="mt-4 flex items-center justify-between shadow p-2 transition hover:bg-gray-50 rounded">
                                    <div className="flex items-center justify-center gap-1">
                                        <div className="border shadow w-[15px] h-[15px] rounded"></div>
                                        <p className="text-sm text-gray-800">I want create an admin panel</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-600 cursor-pointer">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    );
}

export default Navbar;
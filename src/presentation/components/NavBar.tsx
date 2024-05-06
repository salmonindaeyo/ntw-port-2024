import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Observer } from 'mobx-react-lite'
import { useStore } from 'src/data/providers/app_store_provider'
export function NavBar() {
  const router = useRouter()
  const pathname = usePathname()
  const { userStore } = useStore()
  const menuList = [
    // { name: 'หน้าหลัก', link: '/' },
    { name: 'ระบบจัดการผู้ลงทะเบียนอบรม', link: '/round' },
    { name: 'ระบบจัดการผู้ขอเข้ารับอิสลาม', link: '/manage' },
  ]
  function checkLogin() {
    const storedUserDetail = localStorage.getItem('issaramUser')
    let userDetail = null
    if (storedUserDetail) {
      userDetail = JSON.parse(storedUserDetail)
    }

    if (!userDetail) {
      router.push('/login')
    } else {
      const loginData = {
        token: userDetail.token,
        user: userDetail.user,
      }
      userStore.UpdateUserDetail(userDetail)
    }
  }
  const logout = () => {
    localStorage.removeItem('issaramUser')
    router.push('/login')
  }

  useEffect(() => {
    checkLogin()
  }, [])

  useEffect(() => {
    if (pathname === '/') {
      router.push('/round')
    }
  }, [])

  return (
    <Observer>
      {() => (
        <div className="w-2/12  border-r-2 pt-16  flex flex-col md:h-screen justify-between items-center">
          <div className="flex  flex-col space-y-4 w-full items-center justify-center">
            <img src="/logo.png" className="mt-10 mb-8 w-28" />
            {menuList.map((item, index) => (
              <div
                key={index}
                onClick={() => router.push(item.link)}
                className={
                  (pathname === item.link ? 'text-white bg-[#3F5371] w-full text-center  ' : 'text-[#3D434A]') +
                  ' font-medium  cursor-pointer select-none py-4'
                }
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className=" bottom-0">
            <div className="text-[14px] text-[#3D434A] p-1 flex">
              <div> user :</div> <div className="font-bold ml-1">{userStore.userDetail && userStore.userDetail.username}</div>
            </div>
            <div
              onClick={logout}
              className="  flex mb-4 cursor-pointer px-8 hover:bg-gray-700 bg-[#3F5371] text-white p-1  justify-center items-center py-2"
            >
              <div className="font-bold mr-2">log out </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-log-out"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </Observer>
  )
}

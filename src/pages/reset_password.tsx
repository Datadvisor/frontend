import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Reset() {
    return(
        <div className="bg-gray-100 relative mx-auto h-full">
            <div className="p-12 2xl:w-3/12 h-screen bg-white rounded-lg shadow-md lg:shadow-lg">
            <Image src={logo} alt="Logo" className="h-8 w-auto sm:h-10" width={70} height={70} />
            <h1 className="text-2xl font-bold">Reset your Password</h1>
            <div className="text-xs text-gray-400">clean your data accross the web</div>
            <form className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                    <div className="">new password</div>
                    <input placeholder="new password" 
                        className="block w-full py-3 px-3 mt-2
                        text-gray-800 appearance-none
                        border-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-600 rounded-xl"
                    ></input>
                </div>
                <div>
                    <div>confirm new password</div>
                    <input placeholder="confirm new password"
                        className="block w-full py-3 px-3 mt-2
                        text-gray-800 appearance-none
                        border-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-xl"
                        ></input>
                </div>
                <button type="submit"
                className=" whitespace-nowrap justify-center px-20 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-505"
                >RESET YOUR PASSWORD</button>
            </form>
            <a>go back to login</a>
            </div>
        </div>
    )
}
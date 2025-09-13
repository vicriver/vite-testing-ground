function Navbar() {
  return (
    <div className='bg-[whitesmoke] text-[#242424] font-bold w-screen h-8 flex flex-row gap-10 px-10 items-center justify-between z-99'>
        <div>Logo</div>
        <div className='flex flex-row gap-2'>
        <div>Settings</div>
        <div>Login</div>
        </div>
    </div>
  )
}

export default Navbar

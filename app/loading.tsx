export default function AppLoading() {
    return (
        <div className={`bg-light-codgray dark:bg-dark-codgray w-full h-screen fixed z-20 left-0 transition-all bottom-0`}>
            <div className="container mx-auto flex items-center justify-center h-full">
                <h1 className="font-bold text-3xl text-light-nero dark:text-dark-nero tracking-[20px] animate-bounce uppercase">Loading</h1>
            </div>
        </div>
    )
}
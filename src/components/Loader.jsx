const Loader = () => {
    return (
 <div className="fixed inset-0 flex items-center justify-center bg-slate-900 z-[9999]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-solid"></div>
    <span className="ml-4 text-white text-xl font-bold">LOADING...</span>
 </div>
    );
}

export default Loader
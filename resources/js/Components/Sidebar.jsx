export default function Sidebar({children}) {
    return (
        <aside className="hidden w-3/5 mx-auto text-center border-l md:flex bg-slate-400">
            {children}
        </aside>
    );
}

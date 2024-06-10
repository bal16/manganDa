export default function Header({children}) {
    return (
        <header className="flex justify-between items-center h-12 p-2 border-b-[0.1px] border-marshland-950 bg-ecru-white-100">
            <span className="text-xl">madangnda</span>
            {children}
        </header>
    );
}

export default function MenuLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="app__menu__container">
            {children}
        </div>
    )
};
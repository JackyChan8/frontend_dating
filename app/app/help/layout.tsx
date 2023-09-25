export default function HelpLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="app__help__container">
            {children}
        </div>
    )
};
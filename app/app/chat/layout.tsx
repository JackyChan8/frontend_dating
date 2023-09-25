export default function ChatLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="app__chat__container">
            {children}
        </div>
    )
};
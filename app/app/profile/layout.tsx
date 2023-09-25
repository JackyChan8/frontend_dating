export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="app__profile__container">
            {children}
        </div>
    )
};
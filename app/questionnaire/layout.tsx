export default function QuestionnaireLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="questionnaire__container">
            {children}
        </div>
    )
};
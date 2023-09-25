import { ReduxProvider } from '@/app/redux/provider';

export default function AppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ReduxProvider>{children}</ReduxProvider>
        </>
    )
};
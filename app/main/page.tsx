import Header from '@/components/Main/Header/Header';
import Footer from '@/components/Main/Footer/Footer';
import Team from '@/components/Main/Content/Team/Team';
import Welcome from '@/components/Main/Content/Welcome/Welcome';
import Friends from '@/components/Main/Content/Friends/Friends';
import Benefits from '@/components/Main/Content/Benefits/Benefits';
import Sidebar from '@/components/Main/Header/Sidebar/Sidebar';

export default function MainPage() {
    return (
        <div className='container'>
            <Header />
            <Welcome />
            <Benefits />
            <Team />
            {/* <Friends /> */}
            <Footer />
            <Sidebar />
        </div>
    )
}
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Content from '@/components/content/Content';
import '@/styles/globals.css';

export default function App() {
    return (
        <main>
            <div className="container mx-auto">
                <Header />
            </div>
            <Banner />
            <div className="container mx-auto">
                <Content />
            </div>
        </main>
    );
}

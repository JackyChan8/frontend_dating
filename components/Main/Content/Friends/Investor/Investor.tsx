import Link from 'next/link';

import Image from 'next/image';
import companyOne from '@/public/main/friends/company-1.png';

const Investor = () => {
    return (
        <Link href='#'>
            <Image src={companyOne} alt='company-logo'></Image>
        </Link>
    )
}

export default Investor;
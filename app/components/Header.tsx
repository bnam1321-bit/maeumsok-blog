'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                {/* Logo - 실제 로고 이미지 사용 */}
                <Link href="/" className="logo flex items-center gap-2 no-underline">
                    <Image
                        src="/images/logo.png"
                        alt="마음속내과"
                        width={180}
                        height={50}
                        className="logo-image"
                        priority
                    />
                </Link>

                {/* Navigation */}
                <nav className="main-nav">
                    <Link href="/blog" className="nav-link">건강정보</Link>
                    <a href="https://map.naver.com/p/search/마음속내과의원 계양구" target="_blank" rel="noopener noreferrer" className="nav-link">오시는 길</a>
                </nav>
            </div>
        </header>
    );
}

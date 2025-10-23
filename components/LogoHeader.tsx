import Link from "next/link";

const LogoHeader = () => {
  return (
    <div className="site-header">
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/rcc_planet_black.png"
          alt="RCC logo"
          style={{ width: 180, height: 101 }}
        />
      </Link>
    </div>
  );
};

export default LogoHeader;

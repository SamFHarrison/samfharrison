import Image from "next/image";
import LinkedInQRImage from "../../../../public/images/qr-code.png";
import "./page.css";

export default function LinkedInQR() {
  return (
    <>
      <Image
        alt="QR code that navigates you to Sam's LinkedIn"
        src={LinkedInQRImage}
        width={400}
        height={400}
      />
    </>
  );
}

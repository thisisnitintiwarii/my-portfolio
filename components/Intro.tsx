import Image from "next/image";
import ProfilePic from "@/public/images/itsme.jpg";

export default function Intro() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
      <div className="flex flex-col gap-2 w-full lg:w-4/5">
        <h1 className="text-4xl font-bold mb-4">Hi! I&apos;m Nitin.</h1>
        <p className="text-base text-gray-800 dark:text-gray-300 dark:text-white-100">
          Final-year student with strong DSA skills and growing
          full-stack development experience. Passionate about building
          real-world applications, learning new technologies, and contributing
          to impactful software projects.
        </p>
      </div>
      <div className="flex items-center justify-center md:mb-0">
        <Image
          src={ProfilePic}
          alt="Nitin"
          width={160}
          height={160}
          className="border-2 border-gray-100 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

function ContactMe() {
  return (
    <div className="flex flex-col gap-4 mb-20">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Want to chat? Just shoot me a dm with a{" "}
        <Link
          href="https://www.linkedin.com/in/thisisnitintiwari/"
          target="_blank"
          className="text-blue-500"
        >
          direct question on LinkedIn
        </Link>{" "}
        or email me directly at{" "}
        <Link
          href="mailto:thisisnitintiwari@gmail.com"
          className="text-blue-500"
        >
          thisisnitintiwari@gmail.com{" "}
        </Link>
      </p>
    </div>
  );
}

export default ContactMe;

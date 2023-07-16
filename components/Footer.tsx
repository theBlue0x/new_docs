import { useRouter } from "next/router";
import { useState, ReactNode, FormEvent } from "react";
import {getPagesUnderRoute} from "nextra/context";

export function Footer() {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <div className=" mx-auto max-w-7xl">
        <SubmitForm />
      </div>
    </footer>
  );
}

function SubmitForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();

    const params = {
      
    }

    await fetch(
      `https://cloudquery.us1.list-manage.com/subscribe/post-json?${params.toString()}`,
      { mode: "no-cors" }
    );

    router.push("/");
  };

  return (
    <div className="sm:flex sm:max-w-md items-center text-center">
      <span className="inline-flex items-center text-green-500">
        <span className="w-3 h-3 mr-3 bg-green-500 rounded-full"></span>
          All Systems Operational
      </span>
    </div>
  );
}
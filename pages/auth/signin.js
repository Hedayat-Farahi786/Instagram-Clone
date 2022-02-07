import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-40 px-14 text-center">
          <img
          className="w-80"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
           alt="Instagram" />
      <div className="mt-40">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="p-3 bg-blue-500 rounded-lg text-white flex items-center justify-center"
            onClick={() => signIn(provider.id, {callbackUrl: "/"})}
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-3 h-7" />
            <p>Sign in with {provider.name}</p>
          </button>
        </div>
      ))}
      </div>
      </div>
      
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

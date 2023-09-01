import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1 className="font-bold text-3xl text-black">Oops!</h1>
      <h2 className="font-bold text-3xl text-black">Something went wrong!!</h2>
      <h3 className="font-bold text-3xl text-black">
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;

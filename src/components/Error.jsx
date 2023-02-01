const Error = ({ children }) => {
  return (
    <div className="text-center my-4 bg-red-500 text-white font-bold p-3 uppercase rounded-md">
      {children}
    </div>
  );
};

export default Error;

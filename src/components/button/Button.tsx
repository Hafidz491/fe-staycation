type ButtonProps = {
  children: string;
  variant: string;
};

export const Button = (props: ButtonProps) => {
  const { children, variant } = props;

  return (
    <button
      className={`bg-firstColor text-white drop-shadow-lg rounded-md hover:bg-blue-800 ${variant}`}
    >
      {children}
    </button>
  );
};

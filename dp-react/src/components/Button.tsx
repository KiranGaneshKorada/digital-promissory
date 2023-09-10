interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  return <button className="button btn btn-info" {...props} />;
};

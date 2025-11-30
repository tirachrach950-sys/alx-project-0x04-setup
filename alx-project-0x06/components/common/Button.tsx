interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor }) => {
  return (
    <button className={`py-2 px-4 rounded font-semibold text-white bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600`}>
      {buttonLabel}
    </button>
  );
};

export default Button;


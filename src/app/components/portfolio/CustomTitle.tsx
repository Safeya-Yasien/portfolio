type TCustomTitleProps = {
  title: string;
};

const CustomTitle = ({ title }: TCustomTitleProps) => {
  return (
    <h2 className="mb-6 text-2xl  capitalize tracking-widest font-bold ">
      {title}
    </h2>
  );
};

export default CustomTitle;

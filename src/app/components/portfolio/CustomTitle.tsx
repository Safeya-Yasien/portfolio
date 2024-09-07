type TCustomTitleProps = {
  title: string;
};

const CustomTitle = ({ title }: TCustomTitleProps) => {
  return (
    <h2 className="mb-12 text-white text-2xl text-center uppercase tracking-widest border-b-2 border-blue-600 shadow-custom w-fit mx-auto  p-2">
      {title}
    </h2>
  );
};

export default CustomTitle;

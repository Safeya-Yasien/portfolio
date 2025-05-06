type TCustomTitleProps = {
  title: string;
};

const CustomTitle = ({ title }: TCustomTitleProps) => {
  return (
    <h2 className="mb-12 text-white text-2xl text-center uppercase tracking-widest w-fit mx-auto px-6 py-2 rounded-xl shadow-md shadow-blue-500/30 bg-white/5 ">
      {title}
    </h2>
  );
};

export default CustomTitle;

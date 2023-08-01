import NextIcon from "../../assets/NextIcon";

type ReloadProps = {
  onClick: () => void;
};

const Reload: React.FC<ReloadProps> = ({ onClick }) => {
  return (
    <div>
      <button
        className="btn btn-circle btn-lg"
        title="Next Quote"
        onClick={onClick}
      >
        <NextIcon size={40} />
      </button>
    </div>
  );
};

export default Reload;

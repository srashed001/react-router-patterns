import AddColorPage from "./AddColorPage";
import ColorLinks from "./ColorLinks";
import "./ColorHomePage.css"

const ColorHomePage = ({ colors }) => {
  return (
    <>
      <div className="ColorHomePage-addColor">
        <AddColorPage />
      </div>
      <div>
          <ColorLinks colors={colors} />
      </div>
    </>
  );
};

export default ColorHomePage

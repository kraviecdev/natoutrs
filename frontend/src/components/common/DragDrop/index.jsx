import { DragDropWrapper } from "./styled.js";
import Img from "../Img/index.jsx";

const DragDrop = ({
  src,
  alt,
  name,
  type,
  accept,
  multiple,
  onChange,
  handleDrop,
}) => {
  return (
    <DragDropWrapper onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
      {src && <Img src={src} alt={alt} $round $settings />}
      <input
        name={name}
        type={type}
        accept={accept}
        multiple={multiple}
        onChange={onChange}
      />
      <span>Add or drop your file here</span>
    </DragDropWrapper>
  );
};

export default DragDrop;

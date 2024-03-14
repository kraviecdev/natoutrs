import { ContextHeading, SecondaryHeading } from "../common/Title/index.js";
import List from "../common/List/index.jsx";

const ManageList = ({ title, input }) => {
  return (
    <>
      <SecondaryHeading>{title}</SecondaryHeading>
      {input.length === 0 ? (
        <ContextHeading>There is nothing to show</ContextHeading>
      ) : (
        <List data={input} />
      )}
    </>
  );
};

export default ManageList;

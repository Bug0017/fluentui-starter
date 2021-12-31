import { mergeStyleSets } from "@fluentui/react";

export default () => {
  const {root} = getClassNames()
  return <div className={root}>Footer</div>;
};

function getClassNames() {
  return mergeStyleSets({
    root: {
      position:'absolute',
      bottom: 0,
      width:'100vw',
      backgroundColor: "lightgray",
      padding: "2rem",
      textAlign: "center",
      boxSizing:"border-box"
    },
  });
}
import { mergeStyleSets } from "@fluentui/react";

export default () => {
    const { root } = getClassNames();

  return <div className={root}>Header</div>;
};


function getClassNames(){
    return mergeStyleSets({
      root: {
        backgroundColor: "lightgray",
        padding:'2rem',
        textAlign:'center'
      },
    });
}
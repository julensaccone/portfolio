import "./_insertion.scss";

const Insertion = ({ id, classe, type, height, color, padding, children }) => {
  //type 1: container oblique to the left
  if (type === 1) {
    return (
      <>
        {/* <div id={id} className='upper-board left'></div> */}
        <div
          id={id}
          className={"insertion oblique-left " + classe}
          style={{ height: height }}
        >
          {children}
        </div>
        {/* <div className='bottom-board left'></div> */}
      </>
    );
  }
  //type 2: container v shape
  else if (type === 2) {
    return (
      <>
        {/* <div className='upper-board right'></div> */}
        <div
          id={id}
          className={"insertion v-shape " + classe}
          style={{ height: height }}
        >
          {children}
        </div>
        {/* <div className='bottom-board right'></div> */}
      </>
    );
  }
  //type 3: horizontal container
  else {
    return (
      <div
        id={id}
        className={"insertion " + classe}
        style={{ height: height, padding: padding }}
      >
        {children}
      </div>
    );
  }
};

export default Insertion;

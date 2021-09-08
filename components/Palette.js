const colorRgb = function (color) {
  let rgbColor = `rgba(${color.r}, ${color.g} ,${color.b})`;
  return rgbColor;
};

const Circle = (c) => {
  return <div class="circle" style={{ backgroundColor: colorRgb(c) }}></div>;
};

const Palette = (props) => {
  let colors = props.designColors.map((c) => {
    return Circle(c);
  });

  return (
    <div>
      <div class="palette">{colors}</div>
    </div>
  );
};

export default Palette;

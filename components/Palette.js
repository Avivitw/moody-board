const colorRgb = function (color) {
  let rgbColor = `rgba(${color.r}, ${color.g} ,${color.b})`;
  return rgbColor;
};

const Palette = (props) => {
  let colors = props.colors.map((c) => {
    return (
      <div
        class="rounded-full h-24 w-24 flex items-center justify-center mx-8"
        style={{ backgroundColor: colorRgb(c) }}
      ></div>
    );
  });
  return (
    <div>
      <div class="flex flex-row bg-secondaryA rounded-lg">{colors}</div>
    </div>
  );
};

export default Palette;

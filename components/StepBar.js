const StepBar = (props) => {
  const steps = props.steps.map((step) => {
    let stepClasses =
      "p-2 m-4  hover:bg-primary hover:text-white transition ease-out duration-200";
    if (props.selectedStep === step) {
      stepClasses += " border-b-2 border-solid border-primary";
    }
    return (
      <li
        className={stepClasses}
        onClick={() => {
          props.setSelectedStep(step);
        }}
      >
        {step}
      </li>
    );
  });
  return (
    <div>
      <ul className="flex py-1 text-gray-800 text-sm lg:text-base">{steps}</ul>
    </div>
  );
};

export default StepBar;

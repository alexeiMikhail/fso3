export const Total = ({ parts }) => {
  const exercises = parts.reduce(
    (accumulator, element) => accumulator + element.exercises, 0);

  return (
    <div>
      <p>
        <strong>
          Total exercises {exercises}
        </strong>
      </p>
    </div>
  );
};

export interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (
  dailyHours: number[],
  target: number
): Result => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter((day) => day > 0).length;
  const average =
    dailyHours.reduce((acc, curr) => acc + curr, 0) / periodLength;

  let rating;
  let ratingDescription;

  if (average >= target) {
    rating = 3;
    ratingDescription = 'Great job, you met your target!';
  } else if (average >= target / 2) {
    rating = 2;
    ratingDescription = 'Not too bad but could be better!';
  } else {
    rating = 1;
    ratingDescription = 'You need to work harder to meet your target!';
  }

  return {
    periodLength,
    trainingDays,
    success: average >= target,
    rating,
    ratingDescription,
    target,
    average,
  };
};

const target = Number(process.argv[2]);
const dailyHours = process.argv.slice(3).map((hours) => Number(hours));

console.log(calculateExercises(dailyHours, target));

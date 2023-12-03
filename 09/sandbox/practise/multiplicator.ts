type Operation = 'multiply' | 'add' | 'divide';
type Result = number | string;

export const calculatora = (a: number, b: number, op: Operation): Result => {
  if (op === 'multiply') return a * b;
  else if (op === 'add') return a + b;
  else if (op === 'divide') return b === 0 ? "can't divide by 0" : a / b;
  else throw new Error('Invalid operation');
};

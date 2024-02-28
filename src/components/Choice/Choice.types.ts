export type ChoiceProps = {
  key: number;
  choice: number | null;
  setChoice: React.Dispatch<React.SetStateAction<number | null>>;
  value: number;
};

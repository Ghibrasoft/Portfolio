import { useEffect, useState } from "react";

type LocalStorageProps = {
  key: string;
  fallback: boolean;
};

function useLocaleStorage({ key, fallback }: LocalStorageProps) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key) ?? "null") ?? fallback
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export { useLocaleStorage };

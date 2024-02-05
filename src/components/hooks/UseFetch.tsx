import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../../global";

export type TUseFetchResponse = {
  data: any;
  isPending: Boolean;
  error: null | string;
};


export const useFetch = (url: string): TUseFetchResponse => {
  const [data, setData] = useState<User[] | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        const userData: User[] = json.users.map((u: any, i: number) => {
          return {
            id: uuidv4(),
            name: `${u.firstName} ${u.lastName}`,
            age: (u.age as number).toString(),
            gender: u.gender,
            email: u.email,
            phone: u.phone,
            username: u.username,
            birthDate: u.birthDate,
          }
        })
        setIsPending(false);
        setData(userData);
        setError(null);
      } catch (error) {
        setError(`${error} Data fetch error`);
        setIsPending(false);
      }
    };

    fetchData();

  }, [url]);

  return { data, isPending, error };
};
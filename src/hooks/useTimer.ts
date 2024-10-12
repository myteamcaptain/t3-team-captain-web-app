import { useEffect,useState } from "react";

export default function useTimer(pendingVerification: boolean){
    const [seconds, setSeconds] = useState<number>(100);
    const [retry, setTry] = useState<boolean>(false);
    useEffect(() => {
        if (seconds > 0 && pendingVerification) {
          const timer = setTimeout(() => {
            setTry(false);
            setSeconds(seconds - 1);
          }, 1000);
    
          return () => clearTimeout(timer);
        } else {
          setTry(true);
        }
      }, [seconds, pendingVerification]);

      return {
        seconds,
        retry
      }
}
//import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

// pages/index.js
export async function getServerSideProps() /*= async () =>*/ {
  const res = await fetch("http://localhost:8081/api/my10y");
  const my10y = await res.json();
  return {
    props: { my10y },
  };
};

export function MY10YTest(props: { my10y: any[]/*{ DateTime: Key | null | undefined; Value: string | null | undefined; }*/; }) {
  return (
    <div>
      {props.my10y.map((p/*: { DateTime: Key | null | undefined; Value: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }*/) => {
        return (
          <div key={p.DateTime}>
            <p>
              {p.Value}%
            </p>
          </div>
        );
      })}
    </div>
  );
};
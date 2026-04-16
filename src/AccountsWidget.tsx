import { useEffect, useState } from "react";

type AccountData = {
  balance: number;
};

const AccountsWidget = () => {
  const [data, setData] = useState<AccountData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fake API
    setTimeout(() => {
      setData({ balance: 12450 });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Accounts loading...</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 12 }}>
      <h3>Accounts Widget</h3>
      <p>Balance: {data?.balance} AZN</p>
    </div>
  );
};

export default AccountsWidget;

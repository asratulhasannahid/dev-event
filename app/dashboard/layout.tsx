import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ul className="mt-10">
        <li className="text-2xl">
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>
        <li className="text-2xl">
          <Link href="/dashboard/users">Users</Link>
        </li>
      </ul>
      {children}
      footer
    </div>
  );
};

export default layout;

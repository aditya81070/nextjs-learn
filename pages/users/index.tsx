import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { User } from "../../types/user";

export const getStaticProps: GetStaticProps = async function (context) {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const data = await res.json();
  const users: User[] = data.data;
  return {
    props: {
      users,
    },
  };
};

export default function Posts({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!users.length) return "No users found";
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a>
              {user.first_name} {user.last_name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

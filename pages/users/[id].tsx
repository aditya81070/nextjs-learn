import { User } from "../../types/user";
import styles from "../../styles/user.module.css";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
export default function UserComponent({ user }: { user: User }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading user...</p>;
  }
  if (!user) return "No user with this id is present";
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name} profile`} className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <p>
          {user.first_name} {user.last_name}
        </p>
        <p>Contact: {user.email}</p>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async function () {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const data = await res.json();
  const users: User[] = data.data;
  const paths = users.map((user) => ({ params: { id: user.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const res = await fetch(`https://reqres.in/api/users/${params.id}`);
  const data = await res.json();
  const user: User = data.data;
  return {
    props: {
      user,
    },
  };
};

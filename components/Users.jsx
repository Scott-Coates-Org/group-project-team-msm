import { useSelector } from 'react-redux';
import styles from './users.module.css';

const Users = () => {
  const { users, loading } = useSelector((state) => state.users);

  return (
    <div>
      {loading === "succeeded" && (
        <div>
          <table className={styles.users}>
            <thead>
              <tr>
                <td>name</td>
                <td>username</td>
                <td>email</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;

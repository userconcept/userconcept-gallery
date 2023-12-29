import React, { useEffect } from 'react';
// import { useTypedSelector } from './../../hooks/useTypedSelector';
// import { useActions } from './../../hooks/useActions';
import UsersItem from '../UsersItem';
import { Container } from './styles';

const UsersList: React.FC = () => {
    // const state = useTypedSelector((state) => state.user);
    // console.log('state', state.users);
    // const { users, loading, error } = useTypedSelector((state) => state.user);
    // const { fetchUsers } = useActions();

    // useEffect(() => {
    //     fetchUsers();
    // }, []);

    // if (loading) {
    //     return <h2>Loading...</h2>;
    // }

    // if (error) {
    //     return <h2>{error}</h2>;
    // }

    return (
        <Container>
            {/* {users.map((obj) => (
                <UsersItem obj={obj} key={obj.id} />
            ))} */}
        </Container>
    );
};

export default UsersList;

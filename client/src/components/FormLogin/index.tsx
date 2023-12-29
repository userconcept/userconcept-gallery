// import React, { useState } from 'react';
// import FormItem from './../FormItem';
// import Button from './../Button';
// import { Container } from './styles';

// const FormLogin: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     return (
//         <Container>
//             <FormItem
//                 obj={{ label: 'Email', type: 'email', onChangeHandler: setEmail, value: email }}
//             />
//             <FormItem
//                 obj={{
//                     label: 'Password',
//                     type: 'password',
//                     onChangeHandler: setPassword,
//                     value: password,
//                 }}
//             />
//             <Button>Log in</Button>
//         </Container>
//     );
// };

// export default FormLogin;

// import React, { useState } from 'react';
// import FormItem from './../FormItem';
// import Button from './../Button';
// import { Container } from './styles';

// const FormLogin: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     console.log(email);

//     return (
//         <Container>
//             <FormItem label="Email" type="email" onChangeHandler={setEmail} value={email} />
//             <FormItem
//                 label="Password"
//                 type="password"
//                 onChangeHandler={setPassword}
//                 value={password}
//             />
//             <Button>Log in</Button>
//         </Container>
//     );
// };

// export default FormLogin;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user';
import FormItem from './../FormItem';
import Button from './../Button';
import { Container } from './styles';

const FormLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    console.log(email);

    return (
        <Container>
            <FormItem label="Email" type="email" onChangeHandler={setEmail} value={email} />
            <FormItem
                label="Password"
                type="password"
                onChangeHandler={setPassword}
                value={password}
            />
            <Button onClickHandler={() => dispatch(login(email, password))}>Log in</Button>
        </Container>
    );
};

export default FormLogin;

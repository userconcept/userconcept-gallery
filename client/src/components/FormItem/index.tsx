// import React from 'react';
// import { IFormItem } from './../../interfaces';
// import { Container, FormLabel, FormInput } from './styles';

// interface Props {
//     obj: IFormItem;
// }

// const FormItem: React.FC<Props> = ({ obj }) => {
//     return (
//         <Container>
//             <FormLabel>{obj.label}</FormLabel>
//             <FormInput
//                 type={obj.type}
//                 onChange={(event) => obj.onChangeHandler(event.target.value)}
//                 value={obj.value}
//             />
//         </Container>
//     );
// };

// export default FormItem;

// import React from 'react';
// import { IFormItem } from './../../interfaces';
// import { Container, FormLabel, FormInput } from './styles';

// const FormItem: React.FC<IFormItem> = (props) => {
//     return (
//         <Container>
//             <FormLabel>{props.label}</FormLabel>
//             <FormInput
//                 type={props.type}
//                 onChange={(event) => props.onChangeHandler(event.target.value)}
//                 value={props.value}
//             />
//         </Container>
//     );
// };

// export default FormItem;

import React from 'react';
import { IFormItem } from './../../interfaces';
import { Container, FormLabel, FormInput } from './styles';

const FormItem: React.FC<IFormItem> = ({ label, type, onChangeHandler, value }) => {
    return (
        <Container>
            <FormLabel>{label}</FormLabel>
            <FormInput
                type={type}
                onChange={(event) => onChangeHandler(event.target.value)}
                value={value}
            />
        </Container>
    );
};

export default FormItem;

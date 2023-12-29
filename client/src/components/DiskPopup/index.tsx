import React, { useState } from 'react';
import { createDir } from '../../actions/file';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { setPopupDisplay } from '../../reducers/fileReducer';
import { Container, Center, Top, TopTitle, TopButton, Body, BodyInput, BodyButton } from './styles';

const DiskPopup: React.FC = () => {
    const [dirName, setDirName] = useState('');
    const popupDisplay = useTypedSelector((state) => state.files.popupDisplay);
    const currentDir = useTypedSelector((state) => state.files.currentDir);
    const dispatch = useDispatch();

    function createHandler() {
        dispatch(createDir(currentDir, dirName));
    }

    return (
        <Container
            onClick={() => dispatch(setPopupDisplay('none'))}
            style={{ display: popupDisplay }}>
            <Center onClick={(event) => event.stopPropagation()}>
                <Top>
                    <TopTitle>Create New Directory</TopTitle>
                    <TopButton onClick={() => dispatch(setPopupDisplay('none'))}>Close</TopButton>
                </Top>
                <Body>
                    <BodyInput
                        type={'text'}
                        placeholder={'Enter name of new folder'}
                        value={dirName}
                        onChange={(event) => setDirName(event.target.value)}
                    />
                    <BodyButton onClick={() => createHandler()}>Create</BodyButton>
                </Body>
            </Center>
        </Container>
    );
};

export default DiskPopup;

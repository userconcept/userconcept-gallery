import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { getFiles, createDir } from './../../actions/file';
import Button from './../../components/Button';
import DiskList from '../../components/DiskList';
import DiskPopup from '../../components/DiskPopup';
import { Container, Center, DiskButtons } from './styles';
import { setPopupDisplay } from '../../reducers/fileReducer';

const Disk: React.FC = () => {
    const dispatch = useDispatch();
    const currentDir = useTypedSelector((state) => state.files.currentDir);

    useEffect(() => {
        dispatch(getFiles(currentDir));
    }, [currentDir]);

    function showPopupHandler() {
        dispatch(setPopupDisplay('block'));
    }

    return (
        <Container>
            <Center>
                <DiskButtons>
                    <Button>Go back</Button>
                    <Button onClickHandler={() => showPopupHandler()}>Create directory</Button>
                </DiskButtons>
                <DiskList />
                <DiskPopup />
            </Center>
        </Container>
    );
};

export default Disk;

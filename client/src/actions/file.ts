import axios from 'axios';
import { setFiles, addFile } from '../reducers/fileReducer';

export function getFiles(dirId: string) {
    return async (dispatch: any) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/files${dirId ? '?parent=' + dirId : ''}`,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                },
            );
            dispatch(setFiles(response.data));
        } catch (e: any) {
            alert(e.response.data.message);
        }
    };
}

export function createDir(dirId: string, name: string) {
    return async (dispatch: any) => {
        try {
            const response = await axios.post(
                'http://localhost:5000/api/files',
                {
                    name,
                    parent: dirId,
                    type: 'dir',
                },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                },
            );
            dispatch(addFile(response.data));
        } catch (e: any) {
            alert(e.response.data.message);
        }
    };
}

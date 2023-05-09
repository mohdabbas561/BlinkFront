import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Blinken`;
        } else {
            document.title = 'Blinken';
        }
    }, [title]);

    return null;
};

export default useDocTitle;

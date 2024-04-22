import react from 'react';
import { useState } from 'react';

// If state value is not set then we set the initial valse to false
export const useVisible = (initial=false) => {
    const [visibility, setVisibility] = useState(initial);

    const toggle = () => {
        visibility ? setVisibility(false) : setVisibility(true);
        // Another solution
        // setVisibility((prev) => !prev);
    };

    return [visibility, toggle]
}
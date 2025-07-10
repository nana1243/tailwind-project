import React, {useState} from 'react';
import lamp_on from '../../assets/images/lamp_on.png';
import lamp_off from '../../assets/images/lamp_off.png';

function Lamp() {
    const [isOn, setIsOn] = useState<boolean>(false);

    const handleClick = () => {
        setIsOn((prevState)=> !prevState);
    }

    return (
        <div>
            <img
                src={isOn ? lamp_on  : lamp_off}
                alt="Lamp"
                onClick={handleClick}
                className="cursor-pointer w-48 h-48"
            />
        </div>
    );
}

export default Lamp;
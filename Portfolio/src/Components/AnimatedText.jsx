import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
    return (
        <TypeAnimation
            sequence={[
                " MERN stack",
                2000,
                "",
                500,
                " Next.js",
                2000,
                "",
                500,
                " Flutter",
                2000,
                "",
                500
            ]}
            wrapper="span"
            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
            deletionSpeed={{ type: "keyStrokeDelayInMs", value: 80 }}
            className='text-2xl lg:text-4xl font-bold text-selected text-Shadow-Glow'
            repeat={Infinity}
        />
    );
};

export default AnimatedText;

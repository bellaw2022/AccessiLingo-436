import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Sketch = () => {
    const sketchRef = useRef();

    useEffect(() => {
        let myP5;

        const sketch = (p) => {
            p.setup = () => {
                p.createCanvas(400, 400);
                p.background(220);
            };

            p.draw = () => {
                p.ellipse(p.width / 2, p.height / 2, 70, 70);
            };
        };

        myP5 = new p5(sketch, sketchRef.current);

        return () => {
            myP5.remove();
        };
    }, []);

    return <div ref={sketchRef} />;
};

export default Sketch;

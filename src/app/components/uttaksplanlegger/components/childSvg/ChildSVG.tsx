import * as React from 'react';
import classnames from 'classnames';
import BEMHelper from 'common/util/bem';

import './child.less';

const bem = BEMHelper('child');

export interface Props {
    face?: 'happy' | 'sad' | 'lookLeft' | 'lookRight' | 'animated';
}

const ChildSVG: React.StatelessComponent<Props> = (props) => {
    const { face = 'animated', ...svgProps } = props;
    return (
        <svg
            width={120}
            height={120}
            viewBox="0 0 120 120"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...svgProps}
            className={classnames(bem.block, bem.modifier(face))}>
            <title>Kid</title>
            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g id="child-2-">
                    <g id="Head">
                        <circle id="Oval" fill="#A190B8" cx={60} cy={60} r={60} />
                        <g id="Dress" transform="translate(39.000000, 87.000000)">
                            <path
                                d="M42.5,29 C35.6,31.6 28.3,33 21,33 C14,33 7.1,31.8 0.5,29.4 L0.5,14.4 C0.5,9.1 7.4,3 12,0.5 L31.1,0.5 C35.7,3 42.6,9.1 42.6,14.4 C42.5,14.4 42.5,29 42.5,29 Z"
                                id="d"
                                fill="#5C4378"
                            />
                            <path
                                d="M36.5,4.3 C38.5,6.1 40.5,8.2 41.6,10.4 C41,10.8 38,10.8 37.6,9.9 C38,10.8 37.7,11.9 36.9,12.5 C36,13.3 34.6,13.2 33.8,12.3 C34.3,13.4 33.9,14.7 32.9,15.3 C32.1,15.8 31.1,15.7 30.4,15.2 C30.6,16.3 29.9,17.3 28.9,17.7 C28.1,18 27.3,17.8 26.7,17.4 C26.4,18.2 25.8,18.7 25,18.9 C24.3,19 23.5,18.8 23,18.2 C22.6,19 21.8,19.5 21,19.5 C20.2,19.5 19.4,19.1 19,18.4 C18.5,18.8 17.8,19 17.1,18.9 C16.3,18.8 15.6,18.2 15.4,17.5 C14.8,18 14,18.1 13.2,17.8 C12.2,17.4 11.6,16.4 11.7,15.3 C11,15.8 10,15.9 9.2,15.4 C8.2,14.8 7.8,13.5 8.3,12.4 C7.5,13.3 6.1,13.4 5.2,12.6 C4.4,12 4.2,10.9 4.5,10 C3.8,10.3 3.1,9.1 2.4,8.7 C3.4,7.2 4.9,5.7 6.5,4.4 C7.8,9.4 14,13.2 21.5,13.2 C29,13.1 35.2,9.3 36.5,4.3 Z"
                                id="Path"
                                fill="#FA96A0"
                            />
                        </g>
                        <path
                            d="M31.9,58.8 C32.9,43.8 45.3,32 60.5,32 C75.7,32 88.1,43.8 89.1,58.8 L89.2,58.8 C91.3,58.8 93,60.5 93,62.6 L93,66.4 C93,68.5 91.3,70.2 89.2,70.2 C88.7,70.2 88.2,70.1 87.7,69.9 C84.9,78.2 78.4,84.8 70.1,87.7 C70,92.9 65.7,97 60.5,97 C55.3,97 51.1,92.9 50.9,87.7 C42.6,84.8 36.1,78.2 33.3,69.9 C31.4,70.7 29.1,69.8 28.3,67.9 C28.1,67.4 28,66.9 28,66.4 L28,62.6 C28,60.5 29.7,58.8 31.9,58.8 C31.8,58.8 31.9,58.8 31.9,58.8 Z"
                            fill="#E7E5E2"
                        />
                        <g className="leftRight">
                            <path
                                d="M52.9,74.1 C52.9,77.3 50.3,79.8 47.2,79.8 C44,79.8 41.5,77.2 41.5,74.1 C41.5,74.1 41.5,74.1 41.5,74.1 C41.6,70.9 44.2,68.4 47.4,68.5 C50.3,68.6 52.8,71 52.9,74.1 M79.6,74.1 C79.6,77.3 77,79.8 73.9,79.8 C70.7,79.8 68.2,77.2 68.2,74.1 C68.2,74.1 68.2,74.1 68.2,74.1 C68.3,70.9 70.9,68.4 74.1,68.5 C77.1,68.6 79.5,71 79.6,74.1"
                                id="Blush"
                                fill="#E8CCC8"
                                fillRule="nonzero"
                            />
                            <path
                                d="M62.1,65.5 C61.6,65.6 61.1,65.3 61,64.8 C60.9,64.3 61.2,63.8 61.7,63.7 C63,63.4 64.1,63.6 64.7,64.6 C65.8,66.5 65.4,68.8 63.6,70.3 C62.5,71.2 61.1,71.5 60,70.9 C59.6,70.6 59.4,70 59.7,69.6 C60,69.2 60.5,69 61,69.3 C61.2,69.4 61.8,69.3 62.3,68.9 C63.4,68 63.6,66.8 63,65.6 C62.9,65.5 62.7,65.4 62.1,65.5 Z"
                                id="Nose"
                                fill="#D1BFA3"
                            />
                        </g>
                        <path
                            d="M47.4,63.5 C47,62.9 46.4,62.3 45.5,61.7 C44.2,60.7 41.9,61 41.7,62.3 C41.4,63.6 42.8,64.1 43.5,64.3 C44,64.4 45.3,64.1 47.4,63.5 Z M74.2,63.5 C74.6,62.9 75.1,62.3 75.9,61.7 C77.1,60.7 79.3,61 79.5,62.4 C79.8,63.7 78.5,64.2 77.8,64.3 C77.4,64.4 76.2,64.1 74.2,63.5 Z"
                            id="Tears"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                        />
                        <path
                            d="M54.2,34.4 C54.3,33.9 54.9,33.6 55.4,33.7 C55.9,33.8 56.2,34.4 56.1,34.9 C56.1,34.9 56.1,34.9 56.1,34.9 C55.9,35.6 56.1,35.9 57.3,37 C58.6,38.1 58.8,39.6 58.2,41.2 C58,41.7 57.4,41.9 56.9,41.7 C56.4,41.5 56.2,40.9 56.4,40.4 C56.4,40.4 56.4,40.4 56.4,40.4 C56.8,39.5 56.7,38.9 56,38.4 C54.3,36.9 53.8,36.1 54.2,34.4 Z M59.9,33.9 C60.2,33.5 60.8,33.4 61.2,33.7 C61.6,34 61.7,34.6 61.4,35 C61,35.6 61,36 61.8,37.5 C62.6,39 62.3,40.5 61.1,41.7 C60.7,42.1 60.1,42.1 59.7,41.7 C59.3,41.3 59.3,40.7 59.7,40.3 C60.4,39.6 60.5,39 60.1,38.3 C59,36.2 58.8,35.3 59.9,33.9 Z M65.4,33.9 C65.8,33.6 66.4,33.7 66.7,34.1 C67,34.5 66.9,35.1 66.5,35.4 C65.9,35.8 65.9,36.2 66.1,37.8 C66.4,39.5 65.7,40.8 64.1,41.6 C63.6,41.8 63.1,41.7 62.8,41.2 C62.6,40.7 62.7,40.2 63.2,39.9 C64,39.5 64.3,38.9 64.2,38.1 C63.8,35.8 64,34.9 65.4,33.9 Z"
                            id="Hair"
                            fill="#78706A"
                            fillRule="nonzero"
                        />
                        <g className="leftRight">
                            <g id="Eyes" transform="translate(46.000000, 57.000000)" fill="#635E59">
                                <g id="EyesLookingLeft" className="eyes" transform="translate(0.000000, 2.000000)">
                                    <path
                                        d="M3.1,8.3 C0.3,8.5 -0.4,4.8 0.4,2.5 C0.6,2 1.5,-7.10542736e-15 3.1,-7.10542736e-15 C4.7,-7.10542736e-15 5.4,1.1 5.5,1.3 C6.7,3.6 6.1,8.1 3.1,8.3"
                                        id="Path"
                                    />
                                    <path
                                        d="M29.5,4.80263475 C29.6,5.30263475 29.2,5.70263475 28.7,5.80263475 C28.2,5.90263475 27.7,5.50263475 27.6,5.10263475 C27.6,5.10263475 27.6,5.10263475 27.6,5.10263475 C27.5,4.20263475 26.7,3.50263475 25.2,3.00263475 C23.7,2.50263475 22.7,2.70263475 21.9,3.30263475 C21.5,3.60263475 20.9,3.60263475 20.5,3.30263475 C20.1,3.00263475 20.1,2.40263475 20.5,2.10263475 C21.8,0.902634746 23.6,0.702634746 25.7,1.40263475 C28,1.90263475 29.3,3.10263475 29.5,4.80263475 Z"
                                        id="Path"
                                    />
                                </g>
                                <g id="OpenEyes" className="eyes">
                                    <g id="OpenEyesContent" transform="translate(2.000000, 0.000000)">
                                        <g id="OpenEyeLeft">
                                            <path
                                                d="M2.8,10.5 C0.4,10.7 -0.3,6.4 0.4,3.6 C0.5,3.1 1.3,0.6 2.8,0.6 C4.3,0.6 4.8,1.9 4.9,2.2 C6,5 5.5,10.3 2.8,10.5"
                                                className="openEye"
                                            />
                                        </g>
                                        <g id="OpenEyeRight">
                                            <path
                                                d="M23.3,10.5 C21,10.7 20.3,6.4 21,3.6 C21.1,3.1 21.9,0.6 23.3,0.6 C24.7,0.6 25.3,1.9 25.3,2.2 C26.3,5 25.8,10.3 23.3,10.5"
                                                className="openEye"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g
                                    id="SadEyes"
                                    className="eyes"
                                    transform="translate(0.000000, 3.000000)"
                                    fillRule="nonzero">
                                    <g id="SadEyeLeft">
                                        <path d="M0.0154261199,4.29727314 C-0.0845738801,4.79727314 0.31542612,5.29727314 0.81542612,5.39727314 C1.31542612,5.49727314 1.81542612,5.09727314 1.91542612,4.59727314 C2.01542612,3.59727314 2.81542612,2.79727314 4.31542612,2.29727314 C5.81542612,1.79727314 6.81542612,1.89727314 7.61542612,2.59727314 C8.01542612,2.99727314 8.61542612,2.99727314 9.01542612,2.59727314 C9.41542612,2.19727314 9.41542612,1.59727314 9.01542612,1.19727314 C7.71542612,-0.102726862 5.91542612,-0.302726862 3.81542612,0.397273138 C1.51542612,1.19727314 0.21542612,2.49727314 0.0154261199,4.29727314 Z" />
                                    </g>
                                    <g id="SadEyeRight">
                                        <path d="M29.5154261,4.29727314 C29.6154261,4.79727314 29.2154261,5.29727314 28.7154261,5.39727314 C28.2154261,5.49727314 27.7154261,5.09727314 27.6154261,4.59727314 C27.6154261,4.59727314 27.6154261,4.59727314 27.6154261,4.59727314 C27.5154261,3.59727314 26.7154261,2.79727314 25.2154261,2.29727314 C23.7154261,1.79727314 22.7154261,1.89727314 21.9154261,2.59727314 C21.5154261,2.99727314 20.9154261,2.99727314 20.5154261,2.59727314 C20.1154261,2.19727314 20.1154261,1.59727314 20.5154261,1.19727314 C21.8154261,-0.102726862 23.6154261,-0.302726862 25.7154261,0.397273138 C28.0154261,1.19727314 29.3154261,2.49727314 29.5154261,4.29727314 Z" />
                                    </g>
                                </g>
                            </g>
                            <g id="Mouth" transform="translate(53.000000, 74.000000)">
                                <g id="HappyMouth" transform="translate(2.000000, 0.000000)">
                                    <path
                                        d="M0.1,0.3 L12.5,0.3 C12.5,4.9 9.7,8.6 6.3,8.6 C2.8,8.6 0.1,4.9 0.1,0.3 Z"
                                        id="Path"
                                        fill="#593A32"
                                    />
                                    <path
                                        d="M6.1,8.6 C4.5,8.6 3.2,8 2.1,6.5 C2.3,4.4 3.9,2.4 6.1,2.4 C8.3,2.4 10.2,4.4 10.4,6.5 C9.4,8.1 7.7,8.6 6.1,8.6 Z"
                                        id="Path"
                                        fill="#FA96A0"
                                    />
                                </g>
                                <g id="SadMouth">
                                    <path
                                        d="M16.4,6 C16.4,9.5 12.4,8.9 11.5,8 C10.9,7.4 10.2,7 8.2,6.9 C6.6,6.8 5.7,7.1 4.8,8 C3.9,8.9 -1.0658141e-14,9.5 -1.0658141e-14,6 C-1.0658141e-14,2.5 4.7,0.3 8.2,0.3 C11.7,0.3 16.4,2.4 16.4,6 Z"
                                        id="Path"
                                        fill="#593A32"
                                    />
                                    <path
                                        d="M11.5,8.1 C11.1,7.7 9.5,7.1 8.2,7 C7.1,6.9 5,8 4.8,8.1 C4.2,7.5 3.7,6.7 3.9,6 C4.2,4.6 6.1,3.8 8.2,4.3 C10.3,4.7 12.7,6.5 12.4,7.9 C12.4,8 11.8,8.3 11.5,8.1 Z"
                                        id="Path"
                                        fill="#FA96A0"
                                    />
                                </g>
                                <path
                                    d="M13.9,4 C13.9,4.8 12.5,4.7 11.8,4.4 C11.4,4.2 9.6,3.6 8.3,3.6 C7.2,3.6 5.1,4.5 4.5,4.7 C3.9,4.9 2.7,4.8 2.7,4 C2.7,3.2 5.9,2.6 8.3,2.6 C10.7,2.6 13.9,3.1 13.9,4 Z"
                                    id="ClosedMouth"
                                    fill="#593A32"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default ChildSVG;
declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from 'react-naive-svg';
    const content: React.FC<SvgProps>;
    export default content;
}
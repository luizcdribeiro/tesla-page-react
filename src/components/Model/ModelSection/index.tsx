import React, { ReactNode, useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles';

interface ModelSectionProps extends React.HTMLAttributes<HTMLDivElement>{
  overlayNode: React.ReactNode;
  modelName: string;
}

const ModelSection: React.FC<ModelSectionProps> = ({modelName, overlayNode, children, ...props}) => { 
  const {registerModel} = useModel(modelName);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(sectionRef.current) {
      registerModel({
        modelName,
        overlayNode, 
        sectionRef
      })
    }
  } ,[]);

  return (
    <Container ref={sectionRef} {...props}>
      <h1>{modelName}</h1>
      {overlayNode}
    </Container>
  );
};

export default ModelSection;

import React, { useEffect, useState } from 'react';

interface IUseApplicationProps {
  isLoading: boolean;
};

const useApplication: (() => IUseApplicationProps) = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {}, []);

  return {
    isLoading,
  };
};

export default useApplication;
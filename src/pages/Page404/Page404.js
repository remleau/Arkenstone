import React from 'react';
import { useLocation } from 'react-router-dom';

const Page404 = () => {

  const { pathname } = useLocation();

  return (
      <div>
        <p>Page <code className="px-2 py-1 bg-primaryLightMedium">{pathname}</code> not found</p>
      </div>
  );
}

export default Page404;

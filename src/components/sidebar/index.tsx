import logo from '@/assets/icons/logo.svg';
import { Fragment } from 'react';
import { Link } from '@/components/router-link';
import navConfig from './sidebar-config';

export const Sidebar = () => {
  const renderLinks = (space: string) => {
    return navConfig?.map((item) => {
      if (item?.space === space) {
        return <Link key={item?.title} path={item?.path} title={item?.title} icon={item?.icon} />;
      }
      return null;
    });
  };
  return (
    <Fragment>
      <aside className="sidebar z-10 bg-white w-[250px] overflow-y-auto pl-4 pr-3 pt-4 shadow-[10px_10px_50px_0px_#64748B0A] h-screen fixed top-0">
        <img className="ml-4" src={logo} alt="Logo" />

        <div className="line"></div>

        <p className="text-xs mb-4 text-[#94A3B8] font-medium mt-8 leading-[19px] tracking-[1px] text-left">MENU</p>

        {renderLinks('top')}

        <div className="line mt-6"></div>

        <div className="y-center x-between mt-6 mb-3">
          <p className="text-xs  text-[#94A3B8] font-medium leading-[19px] tracking-[1px] text-left uppercase">space</p>
          <img src="src/assets/icons/plus.svg" alt="Plus Icon" />
        </div>

        {renderLinks('middle')}

        <div className="mt-[192px]"></div>
        {renderLinks('bottom')}
      </aside>
    </Fragment>
  );
};

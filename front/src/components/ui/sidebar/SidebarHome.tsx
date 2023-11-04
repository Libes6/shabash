import Link from 'next/link';
import React, { FC } from 'react';
import {
  FcBookmark,
  FcDataProtection,
  FcFilm,
  FcHome,
  FcIdea,
  FcManager,
  FcOpenedFolder,
  FcRules,
  FcSurvey,
  FcTimeline,
  FcTwoSmartphones,
} from 'react-icons/fc';

interface ISidebarList {
  label: string;
  link: string;
  icon: React.ReactNode;
}
const list: ISidebarList[] = [
  {
    label: 'Home',
    link: 'home',
    icon: <FcHome size={24} />,
  },
  {
    label: 'Bookmarks',
    link: 'home',
    icon: <FcBookmark size={24} />,
  },
  {
    label: 'Video',
    link: 'home',
    icon: <FcFilm size={24} />,
  },
  {
    label: 'Tags',
    link: 'home',
    icon: <FcTimeline size={24} />,
  },
  {
    label: 'FAQ',
    link: 'home',
    icon: <FcIdea size={24} />,
  },
  {
    label: 'About',
    link: 'home',
    icon: <FcManager size={24} />,
  },
  {
    label: 'Contact',
    link: 'home',
    icon: <FcTwoSmartphones size={24} />,
  },
];

const otherList: ISidebarList[] = [
  {
    label: 'Code of Conduct',
    link: 'home',
    icon: <FcRules size={24} />,
  },
  {
    label: 'Privacy Policy',
    link: 'home',
    icon: <FcDataProtection size={24} />,
  },
  {
    label: 'Terms of use',
    link: 'home',
    icon: <FcSurvey size={24} />,
  },
];
const SidebarHome: FC = () => {
  return (
    <div className={''}>
      <ul>
        {list.map((item: ISidebarList) => (
          <li key={item.label}>
            <Link
              href={'/home'}
              className="flex gap-2 items-center py-2 px-4 rounded-[8px] hover:bg-blue/[0.1] hover:text-blue/[0.6]"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
        <ul className="mt-2">
          <h3 className="py-2 px-4 font-bold">Other</h3>
          {otherList.map((item: ISidebarList) => (
            <li key={item.link}>
              <Link
                href={'/home'}
                className="flex gap-2 items-center py-2 px-4 rounded-[8px] hover:bg-blue/[0.1] hover:text-blue/[0.6]"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default SidebarHome;

import React from 'react';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
  {
    title: '홈',
    path: '/',
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: 'nav-text'
  },
  {
    title: '로그인',
    path: '/login',
    icon: <BsIcons.BsPersonBoundingBox />,
    cName: 'nav-text'
  },
  {
    title: '회원가입',
    path: '/register',
    icon: <BsIcons.BsFillInfoCircleFill />,
    cName: 'nav-text'
  },
  {
    title: '신고',
    path: '/report',
    icon: <BsIcons.BsEnvelopeFill />,
    cName: 'nav-text'
  },
  {
    title: '매칭하기',
    path: '/match',
    icon: <BsIcons.BsFillChatFill />,
    cName: 'nav-text'
  }
];
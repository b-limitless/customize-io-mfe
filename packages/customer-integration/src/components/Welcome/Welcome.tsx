import React, { useState } from 'react';
import styles from './welcome.module.scss';
import logo from '@assets/images/logo.png'
import smallAvatar from '@assets/images/small-avatar.png'
import Star from '@assets/icons/star.svg';
import Button from '@components/common/Button';
import { Skeleton } from '@mui/material';
import { CircularSkleton, TextSkleton } from '../common/Skleton';
import { Link } from 'react-router-dom';
import Template from './Template';
type Props = {}

export default function Welcome({ }: Props) {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([{ hello: 'world' }]);

  const styles = {
    position:'fixed', 
    right: '1rem'
  }

  const count = new Array(3).fill(0); 

  return (
    <Template loading={loading} data={userData} addStyles={styles} welcome/>
  )
}
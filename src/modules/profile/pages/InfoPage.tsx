import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setListInfo, updateInfo } from '../redux/profileReducer';
import { getInfo } from 'utils/api';

import Info from '../components/Info';
// import { number } from 'yup';
interface Props {}

const InfoPage = (props: Props) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await getInfo(page);
        dispatch(setListInfo(response));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, [dispatch, page]);

  // const onConfirm = (id: number, value: string) => {
  //   dispatch(updateInfo({id, value}))
  // }
  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage(page + 10);
    }
  };
  return (
    <div>
      <Info isLoading={isLoading} />
    </div>
  );
};

export default InfoPage;

import React from 'react';
import styles from './Backdrop.module.css';
const Backdrop = (props) => {
	return <div onClick={props.onClick} className={styles.backdrop}></div>;
};

export default Backdrop;

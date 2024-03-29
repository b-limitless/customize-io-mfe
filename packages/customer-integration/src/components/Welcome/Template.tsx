import Star from '@assets/icons/star.svg';
import logo from '@assets/images/logo.png';
import smallAvatar from '@assets/images/small-avatar.png';
import Button from '@components/common/Button';
import React from 'react';
import { CircularSkleton, TextSkleton } from '../common/Skleton';
import { componentEnum as newComponentEnum } from '../type';
import styles from './template.module.scss';
type Props = {}
interface style {
    [x: string]: string;
}
interface TemplateInterface {
    loading: boolean;
    welcome?: boolean;
    data: any[];
    addStyles: style
    [x: string]: any
}
export default function Template({ selectedComponent, setSeletedComponent, welcome, loading, data, addStyles }: TemplateInterface) {
    const count = new Array(3).fill(0);
    const test = {
        id: 123,
        name: 'John Doe',
    };
    return (
        <div className={styles.welcome} style={addStyles}>
            <div className={styles.row}>
                <div className={styles.col}>
                    {loading && <CircularSkleton width='40px' height='40px' />}
                    {!loading && data.length > 0 &&
                        <div className={styles.logo}>
                            <img src={logo} />
                            <span className={styles.online}></span>
                        </div>}
                </div>
                <div className={styles.col + ' ' + styles.details}>
                    <div className={styles.child__row}>
                        <div className={styles.title}>
                            {loading && <TextSkleton width='200px' />}
                            {!loading && data.length > 0 && 'Marketing Conference'}
                        </div>
                        <div className={styles.sub__title}>
                            {loading && <TextSkleton width='200px' />}
                            {!loading && data.length > 0 && 'Lorem ipsum is a dummy text'}
                        </div>
                    </div>
                    {welcome && <div className={styles.user__details}>
                        <div className={styles.child__col}>
                            <div className={styles.title}>Agents</div>
                            <div className={styles.numbers}>
                                {loading && <TextSkleton width='5px' />}
                                {!loading && data.length > 0 && 10}
                            </div>
                        </div>
                        <div className={styles.child__col}>
                            <div className={styles.title}>Speakers</div>
                            <div className={styles.avatars}>
                                {loading && count.map((key) => <CircularSkleton key={key} width='20px' height='20px' />)}
                                {!loading && data.length > 0 && <>
                                    <img src={smallAvatar}></img>
                                    <img src={smallAvatar}></img>
                                    <img src={smallAvatar}></img>
                                    <span className={styles.more__available}>+15</span>
                                </>}
                            </div>
                        </div>
                        <div className={styles.child__col}>
                            <div className={styles.title}>
                                {loading && <TextSkleton width='60px' />}
                                {!loading && data.length > 0 && 'Rating'}
                            </div>
                            <div className={styles.stars}>
                                {loading && <TextSkleton width='60px' />}
                                {!loading && data.length > 0 && <>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star /></>}
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            <div className={styles.row}>
                {loading && <TextSkleton width='60px' />}
                {!loading && data.length > 0 && <> {!welcome &&
                        <Button text={'Book an appointment'} variant='secondary' onClick={() => setSeletedComponent(newComponentEnum.bookAnAppointment)}/>
                }
                    {}
                    <Button 
                       text={welcome ? 'Contact us' : 'Make a call'} variant='primary' onClick={() => welcome ? setSeletedComponent(newComponentEnum.agents) : setSeletedComponent(newComponentEnum.makeACall)} />
                </>}
            </div>
        </div>
    )
}
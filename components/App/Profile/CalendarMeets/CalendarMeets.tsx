'use client';
import style from './CalendarMeets.module.scss';

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import Link from 'next/link';
import Image from 'next/image';

import CalendarIcon from './Calendar/Calendar';

import ImageOne from '@/public/app/profile/men-3.jpeg';
import ImageTwo from '@/public/app/profile/men-1.jpg';
import ImageThree from '@/public/app/profile/men-2.jpg';

export const ProductService = {
    getMeets() {
        return [
            {
                id: 1,
                time: '17:00',
                avatar: ImageOne,
                name: 'Александр',
                urlAccount: '#',
                status: 'Пройдено'
            },
            {
                id: 2,
                time: '19:00',
                avatar: ImageThree,
                name: 'Егор',
                urlAccount: '#',
                status: 'Ожидание'
            },
            {
                id: 3,
                time: '22:20',
                avatar: ImageTwo,
                name: 'Владислав',
                urlAccount: '#',
                status: 'Сорвано'
            },
            {
                id: 4,
                time: '22:20',
                avatar: ImageTwo,
                name: 'Владислав',
                urlAccount: '#',
                status: 'Сорвано'
            },
            {
                id: 5,
                time: '22:20',
                avatar: ImageTwo,
                name: 'Владислав',
                urlAccount: '#',
                status: 'Сорвано'
            },
        ];
    },
    getProductsMini() {
        return Promise.resolve(this.getMeets().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getMeets().slice(0, 10));
    },
};

interface Person {
    id: number,
    time: string,
    avatar: string,
    name: string,
    urlAccount: string,
    status: string,
}

const CalendarMeets = () => {
    const [products, setProducts] = useState<Person[]>([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const imageBodyTemplate = (person: Person) => {
        return (
            <Link href={person.urlAccount}>
                <Image className={style.avatar} src={person.avatar} alt={person.name}></Image>
            </Link>
        )
    };

    const timeBodyTemplate = (person: Person) => {
        return (
            <div
                className={`${person.status === 'Пройдено' ? style.accept_status : person.status === 'Ожидание' ? style.wait_status : style.reject_status}`}
            >
                    {person.time}
            </div>
        )
    }

    const nameBodyTemplate = (person: Person) => {
        return (
            <h2 className={style.name_person}>{person.name}</h2>
        )
    }

    const statusBodyTemplate = (person: Person) => {
        return (
            <div className={person.status === 'Пройдено' ? style.status_accept : person.status === 'Ожидание' ? style.status_waiting : style.status_rejected}>
                <i className={person.status === 'Пройдено' ? 'pi pi-check-circle' : person.status === 'Ожидание' ? 'pi pi-spinner' : 'pi pi-times-circle'}></i>
                <h2>{person.status}</h2>
            </div>
        )
    }

    const header = (
        <div className={style.header_calendar}>
            <div className={style.left_block}>
                <i className='pi pi-calendar'></i>
                <span>Календарь свиданий</span>
            </div>
            <CalendarIcon />
        </div>
    );

    return (
        <div className={style.card}>
            <DataTable scrollable scrollHeight="280px" value={products} header={header} tableClassName={style.table_data}>
                <Column field="time" header="Время" body={timeBodyTemplate}></Column>
                <Column header="Профиль" body={imageBodyTemplate}></Column>
                <Column header="Имя" body={nameBodyTemplate}></Column>
                <Column header="Статус" body={statusBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}

export default CalendarMeets;
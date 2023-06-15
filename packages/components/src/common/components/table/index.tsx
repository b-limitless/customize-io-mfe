import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { firstLetterUpperCase } from '../../../functions/firstLetterUpperCase';
import { defaultFont } from '../styles';

export interface BasicTableInterface<T, U> {
    tableData: T[];
    tableHeader: U[];
    tableRow: T;
    showTableHead:boolean
}

export default function BasicTable<T, R>({ tableData, tableHeader, showTableHead }: BasicTableInterface<T, R>) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                 <TableHead sx={defaultFont}>
                    {showTableHead && <TableRow sx={defaultFont}>
                        {tableHeader.map((head: any, i: number) => <TableCell key={`tb-cell-${i}`} sx={defaultFont} align="right">{firstLetterUpperCase(head)}</TableCell>)}
                    </TableRow>}
                </TableHead>
                <TableBody>
                    {tableData.map((row: any, j: number) => (
                        <TableRow
                            key={`tb-row-${j}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {tableHeader.map((showField: any, k: number) => <TableCell key={`tb-cell-${j}-${k}`} sx={defaultFont} align="right">{row[showField]}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
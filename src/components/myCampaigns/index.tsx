import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from '../../services/interceptor';
import { API } from '../../../config';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function MyCampaigns() {
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState<any>();
    const user = useSelector((state: RootState) => state.user);


    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        try {
            const response = await axios.get(`${API}/users/${user.id}`);
            setUserInfo(response.data);
        } catch (error) {
            toast(error.message);
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Campaign Name</TableCell>
                        <TableCell align="right">Target Amount(Rs)</TableCell>
                        <TableCell align="right">Current Amount(Rs)</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userInfo && userInfo.campaigns.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.campaignName}
                            </TableCell>
                            <TableCell align="right">{row.targetAmount}</TableCell>
                            <TableCell align="right">{row.collectedAmount}</TableCell>
                            <TableCell align="right"><IconButton><VisibilityIcon /></IconButton></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

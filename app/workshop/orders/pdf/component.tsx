'use client';
import blueImage from '@/public/images/logo/blueimage.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserModel } from '@/models/user.model';
import { FunctionComponent } from 'react';
import { ReturnUnifiedStringDateTime } from '@/utils/hooks';
import { InspectionsModel } from '@/models/workshops/inspections.model';
import { OrderWorkshopModel } from '@/models/workshops/orders.model';
function countTotalTasksPrice(tasks: any[]){
    var count = 0;
    tasks?.map((e) => {
        count = count + (Number(e?.ammount) * Number(e?.price));
    })
    return count;
}
type ViewPDFOrderPageType = {
    tasks: any[];
    user: UserModel;
    inspection: OrderWorkshopModel;
    index: number;
    indexLength: number
}
const ViewPDFOrderPage: FunctionComponent<ViewPDFOrderPageType> = ({tasks, user, inspection, index, indexLength}) => {
    return <div className="inspectionPdfView p1">
        <div className="flex w100">
            <div className="w100">
                <h1 style={{fontSize: '1rem', fontWeight: '600'}}>{user?.nameShop}</h1>
                <p style={{fontSize: '1rem'}}>{user?.direction}</p>
                <p style={{fontSize: '1rem'}}>RUC: {user?.ruc}</p>
                <p style={{fontSize: '1rem'}}>Celular: {user?.phone}</p>
            </div>
            <div className="w100">
                <img style={{border: '1px solid grey', marginLeft: 'auto', marginRight: 'auto'}} src={user?.imageLogo !== '' ? user?.imageLogo : blueImage.src} width='100px' height='100px'/>

            </div>
            <div className="w100 right">
                <h1 className="title" style={{fontSize: '1rem', fontWeight: '600'}}>Cotización</h1>
                <p style={{fontSize: '1rem'}}>N 00{(indexLength - (index+1))+1}</p>
                <div className="flex">
                    <p className="subtitle" style={{marginLeft: 'auto', fontSize: '1rem'}}>Fecha emisión:</p>
                    <p className="ml1" style={{fontSize: '1rem'}}>{ReturnUnifiedStringDateTime(new Date().toString())}</p>
                </div>
                <div className="flex">
                    <p className="subtitle" style={{marginLeft: 'auto', fontSize: '1rem'}}>Asesor:</p>
                    <p className="ml1" style={{fontSize: '1rem'}}>{user?.name + ' ' + user?.lastname}</p>
                </div>
                <div className="flex">
                    <p className="subtitle" style={{marginLeft: 'auto', fontSize: '1rem'}}>Mecanico:</p>
                    <p className="ml1" style={{fontSize: '1rem'}}>{inspection?.workerAssigned}</p>
                </div>
            </div>
        </div>
        <div className="w100 mt1 center">
            <h1 className="mt1" style={{color: 'grey', fontSize: '1.4rem'}}>Cotización</h1>
        </div>
        <div className="p1 mt1">
            <div className="flex between">
                <div className="mt05">
                    <div className="flex">
                        <p className="subtitle fz1">Cliente:</p>
                        <p className="ml1 fz1">{inspection?.client?.name + ' ' + inspection?.client?.lastname}</p>
                    </div>
                    <div className="flex mt05" >
                        <p className="subtitle fz1">DNI/RUC:</p>
                        <p className="ml1 fz1">{inspection?.client?.ruc}</p>
                    </div>
                    
                </div>
                <div className="mt05" style={{marginLeft: '3rem'}}>
                    <div className="flex">
                        <p className="subtitle fz1">Vehículo:</p>
                        <p className="ml1 fz1">{inspection?.vehicle?.brand + ' ' + inspection?.vehicle?.model + ' ' + inspection?.vehicle?.plate}</p>
                    </div>
                    <div className="flex mt05">
                        <p className="subtitle fz1">Celular:</p>
                        <p className="ml1 fz1">{inspection?.client?.phone}</p>
                    </div>
                </div>
                <div className="mt05">
                    <div className="flex">
                        <p className="subtitle fz1">Correo:</p>
                        <p className="ml1 fz1">{inspection?.client?.email}</p>
                    </div>
                    
                </div>
            </div>

            <TableContainer className="mt1" style={{boxShadow: 'none', border: '1px solid grey', backgroundColor: 'transparent'}} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Servicio</TableCell>
                            <TableCell align="center">Item</TableCell>
                            <TableCell align="center">Cantidad</TableCell>
                            <TableCell align="center">Precio</TableCell>
                            <TableCell align="center">Total</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                        </TableHead>
                            <TableBody>
                                {tasks?.map((row, index) => {
                                        return <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            style={{borderBottom: '1px solid rgba(0, 0, 0, 0.2)'}}
                                        >
                                        <TableCell component="th" scope="row">
                                            {row.service}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.item}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.ammount}</TableCell>
                                                <TableCell align="center">
                                                    s/. {Number(row.price).toFixed(2)}</TableCell>
                        <TableCell align="center">s/. {(Number(row?.price) * Number(row?.ammount)).toFixed(2)}</TableCell>
                    </TableRow>
                })} 
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="flex between">
                <p></p>
                <p className="mt2 mr1"><span className="mr1">Total</span> s/. {countTotalTasksPrice(tasks).toFixed(2)}</p>
            </div>

            <div className="w100 center" style={{marginTop: '6rem'}}>
                <div className="flex w100" style={{justifyContent: 'center'}} >
                    <div  style={{width: '200px'}}>
                        <p className="w100" style={{height: '2px', background: 'black'}}/>
                        <p className="mt05">Elaborado por</p>
                    </div>
                    <div style={{width: '200px', marginLeft: '3rem'}}>
                        <p className="w100" style={{height: '2px', background: 'black'}}/>
                        <p className="mt05">Firma del cliente</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ViewPDFOrderPage;
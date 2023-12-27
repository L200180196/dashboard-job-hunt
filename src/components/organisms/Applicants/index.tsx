import React, { FC } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { JOB_APPLICANTS_COLUMN, JOB_APPLICANTS_DATA } from '@/constants'
import ButtonActionTable from '../ButtonActionTable'

interface ApplicantsProps {

}

const Applicants: FC<ApplicantsProps> = ({ }) => {
    return (
        <Table>
            <TableCaption>A list of your Job Listing.</TableCaption>
            <TableHeader>
                <TableRow>
                    {
                        JOB_APPLICANTS_COLUMN.map((item: string, i: number) => (
                            <TableHead key={item + i}>
                                {item}
                            </TableHead>
                        ))
                    }
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    JOB_APPLICANTS_DATA.map((item: any, i: number) => (
                        <TableRow key={item+i}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                {item.appliedDate}
                            </TableCell>
                            <TableCell>
                                <ButtonActionTable url='' />
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default Applicants
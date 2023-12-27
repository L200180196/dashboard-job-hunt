"use client"
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
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from '@/constants'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'
import { useRouter } from 'next/navigation'
import ButtonActionTable from '@/components/organisms/ButtonActionTable'


interface JobListingPageProps {

}

const JobListingPage: FC<JobListingPageProps> = ({ }) => {

    const router = useRouter()
    return (
        <div>
            <div className='font-semibold text-3xl'>
                Job Listing
            </div>
            <div className='mt-10'>
                <Table>
                    <TableCaption>A list of your Job Listing.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            {
                                JOB_LISTING_COLUMNS.map((item: string, i: number) => (
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
                            JOB_LISTING_DATA.map((item: any, i: number) => (
                                <TableRow key={item+i}>
                                    <TableCell>{item.roles}</TableCell>
                                    <TableCell>
                                        <Badge>{item.status}</Badge>
                                    </TableCell>
                                    <TableCell>{item.datePosted}</TableCell>
                                    <TableCell>{item.dueDate}</TableCell>
                                    <TableCell>
                                        <Badge variant='outline'>{item.jobType}</Badge>
                                    </TableCell>
                                    <TableCell>{item.applicant}</TableCell>
                                    <TableCell>{item.applicant} / {item.needs}</TableCell>
                                    <TableCell>
                                        <ButtonActionTable url='/job-detail/1' />
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default JobListingPage
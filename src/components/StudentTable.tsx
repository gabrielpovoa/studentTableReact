import { Student } from '@/types/Student'
import React from 'react'

interface Props {
    Student: Student[];
}


export const StudentTable = ({ Student }: Props) => {
    return <>
        <table className='w-fullrounded overflow-hidden container'>
            <thead>
                <tr className='text-left border-b  bg-gray-800'>
                    <th className='p-3'>Name</th>
                    <th className='p-3'>Status</th>
                    <th className='p-3'>Grade 1</th>
                    <th className='p-3'>Grade 2</th>
                    <th className='p-3'>Final grade</th>
                </tr>
            </thead>
            <tbody>

                {Student.map((item) => (
                    <tr key={item.id}
                    className=' border-b border-gray-200'
                    >
                        <td className='p-3 flex items-center gap-3'>
                            <img 
                            src={item.avatar} 
                            alt={item.name} 
                            className='w-10 rounded-full object-cover'/>
                            <div>
                                <div style={{color: "#FFC857", fontWeight:'bold'}}>{item.name}</div>
                                <div style={{color: '#1B98E0', cursor: 'pointer'}}>{item.email}</div>
                            </div>
                        </td>
                        <td className='p-3'>
                            {item.active ? true &&
                                <span style={{
                                    backgroundColor: "#38A700",
                                    borderRadius: '5px',
                                    padding: '5px',
                                    fontSize: '12px'
                                }}>
                                    Active
                                </span>
                                : <span style={{
                                    backgroundColor: "#F52F57",
                                    borderRadius: '5px', padding: '5px',
                                    fontSize: '12px'
                                }}>
                                    Inactive
                                </span>}
                        </td>
                        <td className='p-3'>{item.grade1}</td>
                        <td className='p-3'>{item.grade2}</td>
                        <td className='p-3'>{item.active ? true && ((item.grade1 + item.grade2) / 2).toFixed(1)  : '--'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
